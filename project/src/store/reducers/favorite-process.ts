import type { Actions } from '../../types/action';
import type { FavoritesProcess } from '../../types/state';

import { ActionType } from '../action';

import { LoadingStatus } from '../../consts';
import { getConvertedOffers } from '../../adapter';

const initialState: FavoritesProcess = {
  favorites: [],
  loadingStatus: LoadingStatus.Init,
};

/**
 * @function favoriveProcess – Redux reducer for favorites offers
 */
const favoritesProcess = (state = initialState, action: Actions): FavoritesProcess => {
  switch (action.type) {

    case ActionType.ChangeFavoriteLoadingStatus: {
      return {
        ...state,
        loadingStatus: action.payload,
      };
    }

    case ActionType.ChangeOfferFavoriteStatus: {
      return {
        ...state,
        favorites: state.favorites.map((offer) => {
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

    case ActionType.LoadFavorites: {
      return {
        ...state,
        favorites: getConvertedOffers(action.payload),
      };
    }

    default: {
      return state;
    }

  }
};

export { favoritesProcess };
