import type {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import type { AxiosInstance } from 'axios';
import type { State } from '../types/state';
import {
  changeCityAction,
  changeCommentLoadingStatusAction,
  changeLoadingStatusAction,
  changeSortingAction,
  changeUserInfoAction,
  clearOfferAction,
  fillOffersAction,
  loadCommentsAction,
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
  | ReturnType<typeof changeLoadingStatusAction>
  | ReturnType<typeof changeSortingAction>
  | ReturnType<typeof changeUserInfoAction>
  | ReturnType<typeof clearOfferAction>
  | ReturnType<typeof fillOffersAction>
  | ReturnType<typeof loadCommentsAction>
  | ReturnType<typeof loadNearbyOfferAction>
  | ReturnType<typeof loadOfferAction>
  | ReturnType<typeof loadOffersAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
