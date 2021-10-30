import { toast } from 'react-toastify';

import type { AuthData } from '../types/auth-data';
import type {
  CommentBackend,
  CommentUser,
  OfferBackend,
  OfferId
} from '../types';
import type { ThunkActionResult } from '../types/action';

import {
  AuthorizationStatus,
  CommentLoadingStatus
} from '../consts';
import { APIRoute } from '../api/const';
import { AppRoute } from '../routes';
import { FailAuthlMessage } from '../consts/toast';
import {
  changeCommentLoadingStatusAction,
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
  Token
} from '../services/token';
import { getConvertedCommentToBackend } from '../adapter';

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
      dispatch(changeCommentLoadingStatusAction(CommentLoadingStatus.Loading));

      const { data } = await api.post<CommentBackend[]>(
        `${APIRoute.Comments}/${id}`,
        getConvertedCommentToBackend(comment),
      );

      dispatch(loadCommentsAction(data));
      dispatch(changeCommentLoadingStatusAction(CommentLoadingStatus.Success));
    } catch {
      toast.info(FailAuthlMessage.Comment);

      dispatch(changeCommentLoadingStatusAction(CommentLoadingStatus.Fail));
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
  };

export const fetchOfferAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<OfferBackend>(`${APIRoute.Hotels}/${id}`);

      dispatch(loadOfferAction(data));
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
