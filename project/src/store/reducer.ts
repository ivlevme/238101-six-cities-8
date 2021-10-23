import type { Actions } from '../types/action';
import { Sorting } from '../consts';
import type { State } from '../types';

import { ActionType } from './action';
import {
  paris,
  parisOffersMock
} from '../mocks';
import {
  getOffersByCity,
  getOffersBySorting
} from '../helpers';

const initialState: State = {
  activeCity: paris,
  offers: parisOffersMock,
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
        offers: getOffersByCity(action.payload),
      };
    case ActionType.ChangeSorting:
      return {
        ...state,
        sorting: action.payload,
        offers: getOffersBySorting(action.payload, state.offers),
      };
    default:
      return state;
  }
};

export { reducer };
