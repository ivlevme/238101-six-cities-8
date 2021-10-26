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
  loadCitiesAction,
  requireAuthorization,
  requireLogout
} from '../store/action';

export type Actions =
  | ReturnType<typeof changeCityAction>
  | ReturnType<typeof changeSortingAction>
  | ReturnType<typeof fillOffersAction>
  | ReturnType<typeof loadCitiesAction>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
