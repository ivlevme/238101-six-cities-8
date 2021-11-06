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
  ChangeOfferFavoriteStatus = 'offer/changeFavoriteStatus',
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
export const changeCityAction = (city: City) => ({
  type: ActionType.ChangeCity,
  payload: city,
}) as const;

/**
 * @function changeCommentLoadingStatusAction - Action creator for change
 * loading status for adding new comment
 * @param status - status loading
 * */
export const changeCommentLoadingStatusAction = (status: LoadingStatus) => ({
  type: ActionType.ChangeCommentLoadingStatus,
  payload: status,
}) as const;

/**
 * @function changeFavoriteLoadingStatusAction - Action creator for
 * change loading status for adding offer to favorite
 * @param status - status loading
 * */
export const changeFavoriteLoadingStatusAction = (status: LoadingStatus) => ({
  type: ActionType.ChangeFavoriteLoadingStatus,
  payload: status,
}) as const;

/**
 * @function changeOfferFavoriteStatusAction - Action creator for
 * change favorite status for offer
 * @param id - offer id
 * @param status - favorite status
 * */
export const changeOfferFavoriteStatusAction = (id: OfferId, status: boolean) => ({
  type: ActionType.ChangeOfferFavoriteStatus,
  payload: {
    id,
    status,
  },
}) as const;

/**
 * @function changeSortingAction - Action creator for change active sorting
 * @param sort - Current Sorting type
 * */
export const changeSortingAction = (sort: Sorting) => ({
  type: ActionType.ChangeSorting,
  payload: sort,
}) as const;

/**
 * @function changeUserInfoAction - Action creator for change user info
 * @param user - Current Sorting type
 * */
export const changeUserInfoAction = (email: string) => ({
  type: ActionType.ChangeUserInfo,
  payload: email,
}) as const;

/**
 * @function clearOfferAction - Action creator for clear offer data
 * after component unmount
 * */
export const clearOfferAction = () => ({
  type: ActionType.ClearOfferAction,
}) as const;

/**
 * @function clearOffersFavoriteStatusAction - Action creator for clear offers
 * favorite status
 * */
export const clearOffersFavoriteStatusAction = () => ({
  type: ActionType.ClearOffersFavoriteStatus,
}) as const;

/**
 * @function fillOffersAction - Action creator for fill offers by city
 * @param city - Current active City
 * */
export const fillOffersAction = (city: NameCity) => ({
  type: ActionType.FillOffers,
  payload: city,
}) as const;

/**
 * @function loadNearbyOfferAction - Action creator for fill nearby offers
 * @param offers - nearby offers
 * */
export const loadCommentsAction = (comments: CommentBackend[]) => ({
  type: ActionType.LoadComments,
  payload: comments,
}) as const;

/**
 * @function loadFavoritesAction - Action creator for fill favorites offers
 * @param offers - favorites offers
 * */
export const loadFavoritesAction = (offers: OfferBackend[]) => ({
  type: ActionType.LoadFavorites,
  payload: offers,
}) as const;

/**
 * @function loadNearbyOfferAction - Action creator for fill nearby offers
 * @param offers - nearby offers
 * */
export const loadNearbyOfferAction = (offers: OfferBackend[]) => ({
  type: ActionType.LoadNearbyOffers,
  payload: offers,
}) as const;

/**
 * @function loadOfferAction - Action creator for load offer from server
 * @param id - Offer id received from remote server
 * */
export const loadOfferAction = (offer: OfferBackend) => ({
  type: ActionType.LoadOffer,
  payload: offer,
}) as const;

/**
 * @function loadOffersAction - Action creator for load offers from server
 * @param offers - Offers received from remote server
 * */
export const loadOffersAction = (offers: OfferBackend[]) => ({
  type: ActionType.LoadOffers,
  payload: offers,
}) as const;

/**
 * @function requireAuthorization - Action creator for define auth status
 * @param authStatus - user`s auth status
 * */
export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

/**
 * @function requireLogout - Action creator for logout
 * */
export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

/**
 * @function redirectToRoute - Action creator for redirect to another page
 * * @param url - path url to redirect
 * */
export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
