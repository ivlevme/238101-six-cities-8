import { toast } from 'react-toastify';

import type { AuthData } from '../types/auth-data';
import type {
  CommentBackend,
  CommentUser,
  OfferBackend,
  OfferId
} from '../types';
import type { ThunkActionResult } from '../types/action';

import { AuthorizationStatus } from '../consts';
import {
  changeUserInfoAction,
  fillOffersAction,
  loadCommentsAction,
  loadNearbyOfferAction,
  loadOfferAction,
  loadOffersAction,
  redirectToRoute,
  requireAuthorization,
  requireLogout
} from './action';
import {
  dropToken,
  saveToken,
  Token } from '../services/token';
import { APIRoute } from '../api/const';
import { FailAuthlMessage } from '../consts/toast';
import { AppRoute } from '../routes';
import { convertCommentToServer } from '../adapter';

export const addCommentAction =
  (
    comment: CommentUser,
    id: OfferId,
  ): ThunkActionResult => async (
    dispatch,
    _getState,
    api,
  ) => {
    try {
      const { data } = await api.post<CommentBackend[]>(
        `${APIRoute.Comments}/${id}`,
        convertCommentToServer(comment),
      );
      dispatch(loadCommentsAction(data));
    } catch {
      toast.info(FailAuthlMessage.Comment);
    }
  };

export const fetchCommentsAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<CommentBackend[]>(`${APIRoute.Comments}/${id}`);

    dispatch(loadCommentsAction(data));
  };

export const fetchNearbyOfferAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<OfferBackend[]>(`${APIRoute.Hotels}/${id}/nearby`);

    dispatch(loadNearbyOfferAction(data));
    dispatch(fillOffersAction(_getState().activeCity.name));
  };

export const fetchOfferAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<OfferBackend>(`${APIRoute.Hotels}/${id}`);

      dispatch(loadOfferAction(data));
      dispatch(fillOffersAction(_getState().activeCity.name));
    }
    catch {
      dispatch(redirectToRoute(AppRoute.NotFound404));
    }
  };

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
      const {
        data: {
          email: userEmail,
        },
      } = await api.get(APIRoute.Login);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(changeUserInfoAction(userEmail));
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
        data: {
          email: userEmail,
          token,
        },
      } = await api.post<{ token: Token, email: string }>(
        APIRoute.Login, {
          email,
          password,
        },
      );

      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(changeUserInfoAction(userEmail));
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
