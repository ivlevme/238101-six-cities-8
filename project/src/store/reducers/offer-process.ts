import type { Actions } from '../../types/action';
import type { OfferProcess } from '../../types/state';

import {
  getConvertedOffer,
  getConvertedOffers
} from '../../adapter';

import { ActionType } from '../action-type';
import { LoadingStatus } from '../../consts';

const initialState: OfferProcess = {
  offer: null,
  loadingOfferStatus: LoadingStatus.Init,
  loadingNearbyStatus: LoadingStatus.Init,
  nearbyOffers: [],
};

/**
 * @function offerProcess – Redux reducer for offer
 */
const offerProcess = (state = initialState, action: Actions): OfferProcess => {
  switch (action.type) {

    case ActionType.ChangeOfferFavoriteStatus: {
      return {
        ...state,
        offer: state.offer && {
          ...state.offer,
          bookmark: action.payload.status,
        },

        nearbyOffers: state.nearbyOffers.map((offer) => {
          if (offer.id === action.payload.id) {
            return {
              ...offer,
              bookmark: action.payload.status,
            };
          }

          return offer;
        }),
      };
    }

    case ActionType.ChangeOfferLoadingStatus: {
      return {
        ...state,
        loadingOfferStatus: action.payload,
      };
    }

    case ActionType.ChangeNearbyLoadingStatus: {
      return {
        ...state,
        loadingNearbyStatus: action.payload,
      };
    }

    case ActionType.ClearOfferAction: {
      return {
        ...state,
        offer: null,
      };
    }

    case ActionType.LoadOffer: {
      return {
        ...state,
        offer: getConvertedOffer(action.payload),
      };
    }

    case ActionType.LoadNearbyOffers: {
      return {
        ...state,
        nearbyOffers: getConvertedOffers(action.payload),
      };
    }

    default: {
      return state;
    }

  }
};

export { offerProcess };
