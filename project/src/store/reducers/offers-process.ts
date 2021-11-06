import type { Actions } from '../../types/action';
import type { OffersProcess } from '../../types/state';

import { getConvertedOffers } from '../../adapter';
import {
  getOffersByCity,
  getOffersBySorting
} from '../../helpers';

import { ActionType } from '../action';
import { paris, Sorting } from '../../consts';


const initialState: OffersProcess = {
  allOffers: [],
  activeCity: paris,
  isDataLoaded: false,
  offersByCity: [],
  sorting: Sorting.Popular,
};

/**
 * @function offersProcess – Redux reducer for offers
 */
const offersProcess = (state = initialState, action: Actions): OffersProcess => {
  switch (action.type) {

    case ActionType.ChangeCity: {
      return {
        ...state,
        activeCity: action.payload,
      };
    }


    case ActionType.ClearOffersFavoriteStatus: {
      return {
        ...state,
        offersByCity: state.offersByCity.map(
          (offer) => ({
            ...offer,
            bookmark: false,
          }),
        ),

        allOffers: state.allOffers.map(
          (offer) => ({
            ...offer,
            bookmark: false,
          }),
        ),
      };
    }

    case ActionType.ChangeSorting: {
      const offersByCity = getOffersByCity(state.activeCity.name, state.allOffers);

      return {
        ...state,
        sorting: action.payload,
        offersByCity:
          action.payload === Sorting.Popular
            ? offersByCity
            : getOffersBySorting(
              action.payload,
              offersByCity,
            ),
      };
    }

    case ActionType.ChangeOfferFavoriteStatus: {
      return {
        ...state,
        offersByCity: state.offersByCity.map((offer) => {
          if (offer.id === action.payload.id) {
            return {
              ...offer,
              bookmark: action.payload.status,
            };
          }

          return offer;
        }),

        allOffers: state.allOffers.map((offer) => {
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

    case ActionType.FillOffers: {
      return {
        ...state,
        offersByCity: getOffersByCity(action.payload, state.allOffers),
      };
    }


    case ActionType.LoadOffers: {
      return {
        ...state,
        allOffers: getConvertedOffers(action.payload),
        isDataLoaded: true,
      };
    }

    default: {
      return state;
    }

  }
};

export { offersProcess };
