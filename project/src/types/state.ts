import {
  AuthorizationStatus,
  Sorting
} from '../consts';
import type {
  City,
  Offer
} from './index';

/**
 * @type {State} - Redux store type
 * */
export type State = {
  activeCity: City;
  allOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  offersByCity: Offer[];
  sorting: Sorting;
};
