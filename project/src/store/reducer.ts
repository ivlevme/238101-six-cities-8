import type { Actions } from '../types/action';
import type { State } from '../types';

import { ActionType } from './action';
import {
  paris,
  parisOffersMock
} from '../mocks';
import { getOffersByCity } from '../offer';

const initialState = {
  activeCity: paris,
  offers: parisOffersMock,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return { ...state, activeCity: action.payload };
    case ActionType.FillOffers:
      return { ...state, offers: getOffersByCity(action.payload) };
    default:
      return state;
  }
};

export { reducer };
