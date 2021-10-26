import type { AuthData } from '../types/auth-data';
import type { OfferBackend } from '../types';
import type { ThunkActionResult } from '../types/action';

import {
  fillOffersAction,
  loadCitiesAction,
  requireAuthorization,
  requireLogout
} from './action';
import {
  dropToken,
  saveToken,
  Token } from '../services/token';
import { APIRoute } from '../api/const';
import { AuthorizationStatus } from '../consts';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<OfferBackend[]>(APIRoute.Hotels);
    dispatch(loadCitiesAction(data));
    dispatch(fillOffersAction(_getState().activeCity.name));
  };

export const checkAuthAction =
  (): ThunkActionResult => async (
    dispatch,
    _getState,
    api,
  ) => {
    await api.get(APIRoute.Login).then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    });
  };

export const loginAction =
  ({
    login: email,
    password ,
  }: AuthData): ThunkActionResult => async (
    dispatch,
    _getState,
    api,
  ) => {
    const {
      data: { token },
    } = await api.post<{ token: Token }>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
