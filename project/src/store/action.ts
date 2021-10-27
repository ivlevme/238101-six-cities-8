import type {
  City,
  OfferBackend
} from '../types';

import {
  AuthorizationStatus,
  NameCity,
  Sorting
} from '../consts';
import { AppRoute } from '../routes';

/**
 * @type {ActionType} - Enum Action for redux
 * */
export enum ActionType {
  ChangeCity = 'city/change',
  FillOffers = 'offers/fill',
  ChangeSorting = 'offers/sorting',
  LoadCities = 'data/loadCities',
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
 * @function fillOffersAction - Action creator for fill offers by city
 * @param city - Current active City
 * */
export const fillOffersAction = (city: NameCity) => ({
  type: ActionType.FillOffers,
  payload: city,
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
 * @function loadOffersAction - Action creator for load offers from server
 * @param offers - Offers received from remote server
 * */
export const loadOffersAction = (offers: OfferBackend[]) => ({
  type: ActionType.LoadCities,
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
