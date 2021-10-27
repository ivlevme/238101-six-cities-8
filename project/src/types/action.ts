import type {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import type { AxiosInstance } from 'axios';
import type { State } from '../types/state';
import {
  changeCityAction,
  changeSortingAction,
  fillOffersAction,
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
  | ReturnType<typeof changeSortingAction>
  | ReturnType<typeof fillOffersAction>
  | ReturnType<typeof loadOffersAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
