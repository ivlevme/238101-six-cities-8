import type { AxiosError } from 'axios';
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
  LoadingStatus
} from '../consts';
import { APIRoute, HttpCode } from '../api/const';
import { AppRoute } from '../routes';
import {
  AddMessageFail,
  AuthMessage,
  LoadMessageFail
} from '../consts/toast';
import {
  changeCommentLoadingStatusAction,
  changeFavoriteLoadingStatusAction,
  changeFavoritePageLoadingStatusAction,
  changeOfferFavoriteStatusAction,
  changeOfferLoadingStatusAction,
  changeUserInfoAction,
  clearOffersFavoriteStatusAction,
  fillOffersAction,
  loadCommentsAction,
  loadFavoritesAction,
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
  ): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        dispatch(changeCommentLoadingStatusAction(LoadingStatus.Loading));

        const { data } = await api.post<CommentBackend[]>(
          `${APIRoute.Comments}/${id}`,
          getConvertedCommentToBackend(comment),
        );

        dispatch(loadCommentsAction(data));
        dispatch(changeCommentLoadingStatusAction(LoadingStatus.Success));
      } catch {
        toast.info(AddMessageFail.Comment);

        dispatch(changeCommentLoadingStatusAction(LoadingStatus.Fail));
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
 * @function fetchFavoriteAction – Redux Thunk Action for favorite offers
 */
export const fetchFavoriteOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(changeFavoritePageLoadingStatusAction(LoadingStatus.Loading));

      const { data } = await api.get<OfferBackend[]>(APIRoute.Favorite);

      dispatch(loadFavoritesAction(data));
      dispatch(changeFavoritePageLoadingStatusAction(LoadingStatus.Success));
    } catch {
      toast.info(LoadMessageFail.Favorite);

      dispatch(changeFavoritePageLoadingStatusAction(LoadingStatus.Fail));
    }
  };

/**
 * @function fetchNearbyOfferAction – Redux Thunk Action for fetch nearby offers for offer by id
 * @param id – offer id
 */
export const fetchNearbyOfferAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<OfferBackend[]>(`${APIRoute.Hotels}/${id}/nearby`);

      dispatch(loadNearbyOfferAction(data));
    } catch {
      toast.info(LoadMessageFail.NearbyOffers);
    }
  };

/**
 * @function fetchOfferAction – Redux Thunk Action for fetch offer by id
 * @param id – offer id
 */
export const fetchOfferAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(changeOfferLoadingStatusAction(LoadingStatus.Loading));

      const { data } = await api.get<OfferBackend>(`${APIRoute.Hotels}/${id}`);

      dispatch(loadOfferAction(data));
      dispatch(changeOfferLoadingStatusAction(LoadingStatus.Success));
    }
    catch {
      dispatch(redirectToRoute(AppRoute.NotFound404));
      dispatch(changeOfferLoadingStatusAction(LoadingStatus.Fail));
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
      toast.info(AuthMessage.Reminder);
    }
  };

/**
 * @function changeFavoriteStatusOffer – Redux Thunk Action for add offer to favorite
 * @param id – offer id
 * @param status – favorite status
 */
export const changeFavoriteStatusOffer = (
  id: OfferId,
  status: boolean,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(changeFavoriteLoadingStatusAction(LoadingStatus.Loading));

      // const { data } =
      await api.post<OfferBackend[]>(`${APIRoute.Favorite}/${id}/${+status}`);

      dispatch(changeOfferFavoriteStatusAction(id, status));
      dispatch(changeFavoriteLoadingStatusAction(LoadingStatus.Success));
    } catch(err) {

      if((err as AxiosError).response?.status === HttpCode.Unauthorized) {
        dispatch(redirectToRoute(AppRoute.Login));
        return;
      }

      toast.info(AddMessageFail.Favorite);

      dispatch(changeCommentLoadingStatusAction(LoadingStatus.Fail));
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
      dispatch(fetchOffersAction());
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      toast.info(AuthMessage.Fail);
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

    dispatch(clearOffersFavoriteStatusAction());
    dispatch(requireLogout());
  };
