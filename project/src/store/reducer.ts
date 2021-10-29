import type { Actions } from '../types/action';
import {
  AuthorizationStatus,
  Sorting
} from '../consts';
import type { State } from '../types';

import { ActionType } from './action';
import { paris } from '../consts';
import {
  getOffersByCity,
  getOffersBySorting
} from '../helpers';
import {
  getConvertedComments,
  getConvertedOffer,
  getConvertedOffers
} from '../adapter';
import {  } from '../adapter/offer';

const initialState: State = {
  activeCity: paris,
  allOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  comments: [],
  email: '',
  isDataLoaded: false,
  nearbyOffers: [],
  offer: null,
  offersByCity: [],
  sorting: Sorting.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.ChangeLoadingStatus:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    case ActionType.ChangeSorting:
      return {
        ...state,
        sorting: action.payload,
        offersByCity: action.payload === Sorting.Popular
          ? getOffersByCity(state.activeCity.name, state.allOffers)
          : getOffersBySorting(action.payload, state.offersByCity),
      };
    case ActionType.ChangeUserInfo:
      return {
        ...state,
        email: action.payload,
      };
    case ActionType.ClearOfferAction:
      return {
        ...state,
        offer: null,
      };
    case ActionType.FillOffers:
      return {
        ...state,
        offersByCity: getOffersByCity(action.payload, state.allOffers),
      };
    case ActionType.LoadComments:
      return {
        ...state,
        comments: getConvertedComments(action.payload),
      };
    case ActionType.LoadNearbyOffers:
      return {
        ...state,
        isDataLoaded: true,
        nearbyOffers: getConvertedOffers(action.payload),
      };
    case ActionType.LoadOffers:
      return {
        ...state,
        allOffers: getConvertedOffers(action.payload),
        isDataLoaded: true,
      };
    case ActionType.LoadOffer:
      return {
        ...state,
        isDataLoaded: true,
        offer: getConvertedOffer(action.payload),
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.RequireLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};

export { reducer };
