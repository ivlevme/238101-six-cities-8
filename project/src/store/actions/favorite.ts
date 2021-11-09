import { createAction } from '@reduxjs/toolkit';

import type { OfferBackend } from '../../types';

import { ActionType } from '../action-type';
import { LoadingStatus } from '../../consts';

/**
 * @function changeFavoriteLoadingStatusAction - Action creator for
 * change loading status for adding offer to favorite
 * @param status - status loading
 * */
export const changeFavoriteLoadingStatusAction = createAction(
  ActionType.ChangeFavoriteLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function changeFavoritePageLoadingStatusAction - Action creator for
 * change loading status for favorite page
 * @param status - status loading
 * */
export const changeFavoritePageLoadingStatusAction = createAction(
  ActionType.ChangeFavoritePageLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function loadFavoritesAction - Action creator for fill favorites offers
 * @param offers - favorites offers
 * */
export const loadFavoritesAction = createAction(
  ActionType.LoadFavorites,
  (offers: OfferBackend[]) => ({
    payload: offers,
  }),
);
