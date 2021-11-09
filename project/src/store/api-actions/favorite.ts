import type { AxiosError } from 'axios';

import { toast } from 'react-toastify';

import { AppRoute } from '../../routes';
import type {
  OfferBackend,
  OfferId
} from '../../types';
import type { ThunkActionResult } from '../../types/action';

import {
  APIRoute,
  HttpCode
} from '../../api/const';
import {
  AddMessageFail,
  LoadingStatus,
  LoadMessageFail
} from '../../consts';
import {
  changeCommentLoadingStatusAction,
  changeFavoriteLoadingStatusAction,
  changeFavoritePageLoadingStatusAction,
  changeOfferFavoriteStatusAction,
  loadFavoritesAction,
  redirectToRoute
} from '../actions';


/**
 * @function fetchFavoriteAction – Redux Thunk Action for favorite offers
 */
export const fetchFavoriteOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(changeFavoritePageLoadingStatusAction(LoadingStatus.Loading));

      const { data } = await api.get<OfferBackend[]>(APIRoute.Favorite);

      dispatch(loadFavoritesAction(data));
      dispatch(changeFavoritePageLoadingStatusAction(LoadingStatus.Success));
    } catch {
      toast.info(LoadMessageFail.Favorite);

      dispatch(changeFavoritePageLoadingStatusAction(LoadingStatus.Fail));
    }
  };

/**
 * @function changeFavoriteStatusOffer – Redux Thunk Action for add offer to favorite
 * @param id – offer id
 * @param status – favorite status
 */
export const changeFavoriteStatusOffer = (
  id: OfferId,
  status: boolean,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(changeFavoriteLoadingStatusAction(LoadingStatus.Loading));

      // const { data } =
      await api.post<OfferBackend[]>(`${APIRoute.Favorite}/${id}/${+status}`);

      dispatch(changeOfferFavoriteStatusAction(id, status));
      dispatch(changeFavoriteLoadingStatusAction(LoadingStatus.Success));
    } catch(err) {

      if((err as AxiosError).response?.status === HttpCode.Unauthorized) {
        dispatch(redirectToRoute(AppRoute.Login));
        return;
      }

      toast.info(AddMessageFail.Favorite);

      dispatch(changeCommentLoadingStatusAction(LoadingStatus.Fail));
    }
  };
