import type { Actions } from '../../types/action';
import type { OfferProcess } from '../../types/state';

import {
  getConvertedOffer,
  getConvertedOffers
} from '../../adapter';

import { ActionType } from '../action';

const initialState: OfferProcess = {
  offer: null,
  nearbyOffers: [],
};

/**
 * @function offerProcess – Redux reducer for offer
 */
const offerProcess = (state = initialState, action: Actions): OfferProcess => {
  switch (action.type) {
    case ActionType.ClearOfferAction:
      return {
        ...state,
        offer: null,
      };

    case ActionType.LoadOffer:
      return {
        ...state,
        offer: getConvertedOffer(action.payload),
      };

    case ActionType.LoadNearbyOffers:
      return {
        ...state,
        nearbyOffers: getConvertedOffers(action.payload),
      };

    default:
      return state;
  }
};

export { offerProcess };
