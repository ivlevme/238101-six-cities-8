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
