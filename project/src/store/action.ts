import type { City } from '../types';

import { Sorting } from '../consts';

export enum ActionType {
  ChangeCity = 'city/change',
  FillOffers = 'offers/fill',
  ChangeSorting = 'offers/sorting',
}

export const changeCityAction = (city: City) => ({
  type: ActionType.ChangeCity,
  payload: city,
}) as const;

export const fillOffersAction = (city: City) => ({
  type: ActionType.FillOffers,
  payload: city,
}) as const;

export const changeSortingAction = (sort: Sorting) => ({
  type: ActionType.ChangeSorting,
  payload: sort,
}) as const;
