import { createAction } from '@reduxjs/toolkit';

import type {
  City,
  CommentBackend,
  OfferBackend,
  OfferId
} from '../types';

import {
  AuthorizationStatus,
  LoadingStatus,
  NameCity,
  Sorting
} from '../consts';
import { AppRoute } from '../routes';

/**
 * @type {ActionType} - Enum Action for redux
 * */
export enum ActionType {
  ChangeCity = 'city/change',
  ChangeCommentLoadingStatus = 'comment/loadingStatus',
  ChangeFavoriteLoadingStatus = 'favorite/loadingStatus',
  ChangeFavoritePageLoadingStatus = 'offer/loadingPageStatus',
  ChangeOfferFavoriteStatus = 'offer/changeFavoriteStatus',
  ChangeOfferLoadingStatus = 'offer/loadingStatus',
  ChangeSorting = 'offers/sorting',
  ChangeUserInfo = 'user/info',
  ClearOfferAction = 'offer/clearData',
  ClearOffersFavoriteStatus = 'offer/clearOffersFavoriteStatus',
  FillOffers = 'offers/fill',
  LoadComments = 'data/comments',
  LoadFavorites = 'data/favorites',
  LoadNearbyOffers = 'data/nearbyOffers',
  LoadOffer = 'data/offer',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'user/redirectToRoute'
}

/**
 * @function changeCityAction - Action creator for change Active Cite
 * @param city - Current active City
 * */
export const changeCityAction = createAction(
  ActionType.ChangeCity,
  (city: City) => ({
    payload: city,
  }),
);

/**
 * @function changeCommentLoadingStatusAction - Action creator for change
 * loading status for adding new comment
 * @param status - status loading
 * */
export const changeCommentLoadingStatusAction = createAction(
  ActionType.ChangeCommentLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function changeFavoriteLoadingStatusAction - Action creator for
 * change loading status for adding offer to favorite
 * @param status - status loading
 * */
export const changeFavoriteLoadingStatusAction = createAction(
  ActionType.ChangeFavoriteLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function changeFavoritePageLoadingStatusAction - Action creator for
 * change loading status for favorite page
 * @param status - status loading
 * */
export const changeFavoritePageLoadingStatusAction = createAction(
  ActionType.ChangeFavoritePageLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function changeOfferLoadingStatusAction - Action creator for
 * change offer loading status
 * @param status - loading status
 * */
export const changeOfferLoadingStatusAction = createAction(
  ActionType.ChangeOfferLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function changeOfferFavoriteStatusAction - Action creator for
 * change favorite status for offer
 * @param id - offer id
 * @param status - favorite status
 * */
export const changeOfferFavoriteStatusAction = createAction(
  ActionType.ChangeOfferFavoriteStatus,
  (id: OfferId, status: boolean) => ({
    payload: {
      id,
      status,
    },
  }),
);

/**
 * @function changeSortingAction - Action creator for change active sorting
 * @param sort - Current Sorting type
 * */
export const changeSortingAction = createAction(
  ActionType.ChangeSorting,
  (sort: Sorting) => ({
    payload: sort,
  }),
);

/**
 * @function changeUserInfoAction - Action creator for change user info
 * @param user - Current Sorting type
 * */
export const changeUserInfoAction = createAction(
  ActionType.ChangeUserInfo,
  (email: string) => ({
    payload: email,
  }),
);

/**
 * @function clearOfferAction - Action creator for clear offer data
 * after component unmount
 * */
export const clearOfferAction = createAction(
  ActionType.ClearOfferAction,
);

/**
 * @function clearOffersFavoriteStatusAction - Action creator for clear offers
 * favorite status
 * */
export const clearOffersFavoriteStatusAction = createAction(
  ActionType.ClearOffersFavoriteStatus,
);

/**
 * @function fillOffersAction - Action creator for fill offers by city
 * @param city - Current active City
 * */
export const fillOffersAction = createAction(
  ActionType.FillOffers,
  (city: NameCity) => ({
    payload: city,
  }),
);

/**
 * @function loadNearbyOfferAction - Action creator for fill nearby offers
 * @param offers - nearby offers
 * */
export const loadCommentsAction = createAction(
  ActionType.LoadComments,
  (comments: CommentBackend[]) => ({
    payload: comments,
  }),
);

/**
 * @function loadFavoritesAction - Action creator for fill favorites offers
 * @param offers - favorites offers
 * */
export const loadFavoritesAction = createAction(
  ActionType.LoadFavorites,
  (offers: OfferBackend[]) => ({
    payload: offers,
  }),
);

/**
 * @function loadNearbyOfferAction - Action creator for fill nearby offers
 * @param offers - nearby offers
 * */
export const loadNearbyOfferAction = createAction(
  ActionType.LoadNearbyOffers,
  (offers: OfferBackend[]) => ({
    payload: offers,
  }),
);

/**
 * @function loadOfferAction - Action creator for load offer from server
 * @param id - Offer id received from remote server
 * */
export const loadOfferAction = createAction(
  ActionType.LoadOffer,
  (offer: OfferBackend) => ({
    payload: offer,
  }),
);

/**
 * @function loadOffersAction - Action creator for load offers from server
 * @param offers - Offers received from remote server
 * */
export const loadOffersAction = createAction(
  ActionType.LoadOffers,
  (offers: OfferBackend[]) => ({
    payload: offers,
  }),
);

/**
 * @function requireAuthorization - Action creator for define auth status
 * @param authStatus - user`s auth status
 * */
export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

/**
 * @function requireLogout - Action creator for logout
 * */
export const requireLogout = createAction(
  ActionType.RequireLogout,
);

/**
 * @function redirectToRoute - Action creator for redirect to another page
 * * @param url - path url to redirect
 * */
export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
