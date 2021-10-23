import {
  changeCityAction,
  changeSortingAction,
  fillOffersAction
} from '../store/action';

export type Actions =
  | ReturnType<typeof changeCityAction>
  | ReturnType<typeof changeSortingAction>
  | ReturnType<typeof fillOffersAction>;
