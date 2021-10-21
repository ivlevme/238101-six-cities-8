import { changeCityAction, fillOffersAction } from '../store/action';

export type Actions =
  | ReturnType<typeof changeCityAction>
  | ReturnType<typeof fillOffersAction>;
