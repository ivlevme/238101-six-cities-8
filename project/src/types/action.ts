import type {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import type { AxiosInstance } from 'axios';
import type { State } from '../types/state';
import {
  changeCityAction,
  changeCommentLoadingStatusAction,
  changeFavoriteLoadingStatusAction,
  changeFavoritePageLoadingStatusAction,
  changeOfferLoadingStatusAction,
  changeOfferFavoriteStatusAction,
  changeSortingAction,
  changeUserInfoAction,
  clearOfferAction,
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
} from '../store/action';

/**
 * @type {Actions} - Redux Actions type
 * */
export type Actions =
  | ReturnType<typeof changeCityAction>
  | ReturnType<typeof changeCommentLoadingStatusAction>
  | ReturnType<typeof changeFavoriteLoadingStatusAction>
  | ReturnType<typeof changeFavoritePageLoadingStatusAction>
  | ReturnType<typeof changeOfferLoadingStatusAction>
  | ReturnType<typeof changeOfferFavoriteStatusAction>
  | ReturnType<typeof changeSortingAction>
  | ReturnType<typeof changeUserInfoAction>
  | ReturnType<typeof clearOfferAction>
  | ReturnType<typeof clearOffersFavoriteStatusAction>
  | ReturnType<typeof fillOffersAction>
  | ReturnType<typeof loadCommentsAction>
  | ReturnType<typeof loadFavoritesAction>
  | ReturnType<typeof loadNearbyOfferAction>
  | ReturnType<typeof loadOfferAction>
  | ReturnType<typeof loadOffersAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

/**
 * @type {ThunkActionResult} - Thunk Action Result type for Redux with Axios
 * */
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

/**
 * @type {ThunkAppDispatch} - Thunk Action Dispatch type for Redux with Axios
 * */
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
