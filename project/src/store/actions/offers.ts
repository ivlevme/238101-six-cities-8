import { createAction } from '@reduxjs/toolkit';

import type {
  City,
  OfferBackend
} from '../../types';

import { ActionType } from '../action-type';
import {
  NameCity,
  Sorting
} from '../../consts';

/**
 * @function changeCityAction - Action creator for change Active Cite
 * @param city - Current active City
 * */
export const changeCityAction = createAction(
  ActionType.ChangeCity,
  (city: City) => ({
    payload: city,
  }),
);

/**
 * @function changeSortingAction - Action creator for change active sorting
 * @param sort - Current Sorting type
 * */
export const changeSortingAction = createAction(
  ActionType.ChangeSorting,
  (sort: Sorting) => ({
    payload: sort,
  }),
);

/**
 * @function clearOffersFavoriteStatusAction - Action creator for clear offers
 * favorite status
 * */
export const clearOffersFavoriteStatusAction = createAction(
  ActionType.ClearOffersFavoriteStatus,
);

/**
 * @function fillOffersAction - Action creator for fill offers by city
 * @param city - Current active City
 * */
export const fillOffersAction = createAction(
  ActionType.FillOffers,
  (city: NameCity) => ({
    payload: city,
  }),
);

/**
 * @function loadOffersAction - Action creator for load offers from server
 * @param offers - Offers received from remote server
 * */
export const loadOffersAction = createAction(
  ActionType.LoadOffers,
  (offers: OfferBackend[]) => ({
    payload: offers,
  }),
);
