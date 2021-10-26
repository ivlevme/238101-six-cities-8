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
import { getConvertedOffers } from '../adapter';

const initialState: State = {
  activeCity: paris,
  allOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
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
    case ActionType.FillOffers:
      return {
        ...state,
        offersByCity: getOffersByCity(action.payload, state.allOffers),
      };
    case ActionType.ChangeSorting:
      return {
        ...state,
        sorting: action.payload,
        offersByCity: action.payload === Sorting.Popular
          ? getOffersByCity(state.activeCity.name, state.allOffers)
          : getOffersBySorting(action.payload, state.offersByCity),
      };
    case ActionType.LoadCities:
      return {
        ...state,
        isDataLoaded: true,
        allOffers: getConvertedOffers(action.payload),
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
