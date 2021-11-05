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

/**
 * @function addCommentAction – Redux Thunk Action for add comment for offer
 * @param comment – comment data
 * @param id – offer id
 */
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

/**
 * @function fetchCommentsAction – Redux Thunk Action for fetch comments for offer by id
 * @param id – offer id
 */
export const fetchCommentsAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<CommentBackend[]>(`${APIRoute.Comments}/${id}`);

    dispatch(loadCommentsAction(data));
  };

/**
 * @function fetchNearbyOfferAction – Redux Thunk Action for fetch nearby offers for offer by id
 * @param id – offer id
 */
export const fetchNearbyOfferAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<OfferBackend[]>(`${APIRoute.Hotels}/${id}/nearby`);

    dispatch(loadNearbyOfferAction(data));
  };

/**
 * @function fetchOfferAction – Redux Thunk Action for fetch offer by id
 * @param id – offer id
 */
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

/**
 * @function fetchOffersAction – Redux Thunk Action for fetch all offers
 */
export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<OfferBackend[]>(APIRoute.Hotels);

    dispatch(loadOffersAction(data));
    dispatch(fillOffersAction(_getState().OFFERS.activeCity.name));
  };

/**
 * @function checkAuthAction – Redux Thunk Action for check user`s auth status when app start up
 */
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

/**
 * @function loginAction – Redux Thunk Action for login user
 */
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
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      toast.info(FailAuthlMessage.Fail);
    }
  };

/**
 *
 * @function logoutAction – Redux Thunk Action for logout user
 */
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
