import type { OfferBackend } from '../../types';
import type { ThunkActionResult } from '../../types/action';

import { APIRoute } from '../../api/const';
import {
  fillOffersAction,
  loadOffersAction
} from '../actions';

/**
 * @function fetchOffersAction – Redux Thunk Action for fetch all offers
 */
export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<OfferBackend[]>(APIRoute.Hotels);

    dispatch(loadOffersAction(data));
    dispatch(fillOffersAction(_getState().OFFERS.activeCity.name));
  };
