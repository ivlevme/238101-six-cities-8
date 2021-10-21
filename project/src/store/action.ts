import type { City } from '../types';

export enum ActionType {
  ChangeCity = 'city/change',
  FillOffers = 'offers/fill',
}

export const changeCityAction = (city: City) => ({
  type: ActionType.ChangeCity,
  payload: city,
}) as const;

export const fillOffersAction = (city: City) => ({
  type: ActionType.FillOffers,
  payload: city,
}) as const;
