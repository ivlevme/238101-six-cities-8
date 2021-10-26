import type {
  City,
  OfferBackend
} from '../types';

import {
  AuthorizationStatus,
  NameCity,
  Sorting
} from '../consts';

export enum ActionType {
  ChangeCity = 'city/change',
  FillOffers = 'offers/fill',
  ChangeSorting = 'offers/sorting',
  LoadCities = 'data/loadCities',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export const changeCityAction = (city: City) => ({
  type: ActionType.ChangeCity,
  payload: city,
}) as const;

export const fillOffersAction = (city: NameCity) => ({
  type: ActionType.FillOffers,
  payload: city,
}) as const;

export const changeSortingAction = (sort: Sorting) => ({
  type: ActionType.ChangeSorting,
  payload: sort,
}) as const;

export const loadCitiesAction = (offers: OfferBackend[]) => ({
  type: ActionType.LoadCities,
  payload: offers,
}) as const;

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
