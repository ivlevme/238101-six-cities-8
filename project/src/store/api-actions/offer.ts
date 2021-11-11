import { toast } from 'react-toastify';

import type {
  OfferBackend,
  OfferId
} from '../../types';
import type { ThunkActionResult } from '../../types/action';

import { APIRoute } from '../../api/const';
import {
  LoadingStatus,
  LoadMessageFail
} from '../../consts';
import { AppRoute } from '../../routes';
import {
  changeNearbyLoadingStatusAction,
  changeOfferLoadingStatusAction,
  loadNearbyOfferAction,
  loadOfferAction,
  redirectToRoute
} from '../actions';


/**
 * @function fetchNearbyOfferAction – Redux Thunk Action for fetch nearby offers for offer by id
 * @param id – offer id
 */
export const fetchNearbyOfferAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(changeNearbyLoadingStatusAction(LoadingStatus.Loading));
      const { data } = await api.get<OfferBackend[]>(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);

      dispatch(loadNearbyOfferAction(data));
      dispatch(changeNearbyLoadingStatusAction(LoadingStatus.Success));
    } catch {
      toast.info(LoadMessageFail.NearbyOffers);
      dispatch(changeNearbyLoadingStatusAction(LoadingStatus.Fail));
    }
  };

/**
 * @function fetchOfferAction – Redux Thunk Action for fetch offer by id
 * @param id – offer id
 */
export const fetchOfferAction = (id: OfferId): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(changeOfferLoadingStatusAction(LoadingStatus.Loading));

      const { data } = await api.get<OfferBackend>(`${APIRoute.Hotels}/${id}`);

      dispatch(loadOfferAction(data));
      dispatch(changeOfferLoadingStatusAction(LoadingStatus.Success));
    }
    catch {
      dispatch(redirectToRoute(AppRoute.NotFound404));
      dispatch(changeOfferLoadingStatusAction(LoadingStatus.Fail));
    }
  };
