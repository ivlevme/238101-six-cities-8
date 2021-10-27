import { toast } from 'react-toastify';

import type { AuthData } from '../types/auth-data';
import type { OfferBackend } from '../types';
import type { ThunkActionResult } from '../types/action';

import { AuthorizationStatus } from '../consts';
import {
  fillOffersAction,
  loadOffersAction,
  requireAuthorization,
  requireLogout
} from './action';
import {
  dropToken,
  saveToken,
  Token } from '../services/token';
import { APIRoute } from '../api/const';
import { FailAuthlMessage } from '../consts/toast';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<OfferBackend[]>(APIRoute.Hotels);
    dispatch(loadOffersAction(data));
    dispatch(fillOffersAction(_getState().activeCity.name));
  };

export const checkAuthAction =
  (): ThunkActionResult => async (
    dispatch,
    _getState,
    api,
  ) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }
    catch {
      toast.info(FailAuthlMessage.Reminder);
    }
  };

export const loginAction =
  ({
    email,
    password ,
  }: AuthData): ThunkActionResult => async (
    dispatch,
    _getState,
    api,
  ) => {
    try {
      const {
        data: { token },
      } = await api.post<{ token: Token }>(
        APIRoute.Login, {
          email,
          password,
        },
      );

      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(FailAuthlMessage.Fail);
    }
  };

export const logoutAction =
  (): ThunkActionResult => async (
    dispatch,
    _getState,
    api,
  ) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
