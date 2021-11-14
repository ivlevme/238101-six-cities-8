import type { Actions } from '../../types/action';
import type { FavoritesProcess } from '../../types/state';

import { ActionType } from '../action-type';

import { LoadingStatus } from '../../consts';
import { getConvertedOffers } from '../../adapter';

const initialState: FavoritesProcess = {
  favorites: [],
  loadingPageStatus: LoadingStatus.Init,
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

    case ActionType.ChangeFavoritePageLoadingStatus: {
      return {
        ...state,
        loadingPageStatus: action.payload,
      };
    }

    case ActionType.ChangeOfferFavoriteStatus: {
      return {
        ...state,
        favorites: state.favorites.filter((offer) =>
          offer.id !== action.payload.id),
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
