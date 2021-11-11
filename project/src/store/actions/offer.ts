import { createAction } from '@reduxjs/toolkit';

import type {
  CommentBackend,
  OfferBackend,
  OfferId
} from '../../types';

import { ActionType } from '../action-type';
import { LoadingStatus } from '../../consts';

/**
 * @function changeOfferLoadingStatusAction - Action creator for
 * change offer loading status
 * @param status - loading status
 * */
export const changeOfferLoadingStatusAction = createAction(
  ActionType.ChangeOfferLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function changeNearbyLoadingStatusAction - Action creator for
 * change loading status for nearby offers
 * @param status - favorite status
 * */
export const changeNearbyLoadingStatusAction = createAction(
  ActionType.ChangeNearbyLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function changeOfferFavoriteStatusAction - Action creator for
 * change favorite status for offer
 * @param id - offer id
 * @param status - favorite status
 * */
export const changeOfferFavoriteStatusAction = createAction(
  ActionType.ChangeOfferFavoriteStatus,
  (id: OfferId, status: boolean) => ({
    payload: {
      id,
      status,
    },
  }),
);

/**
 * @function clearOfferAction - Action creator for clear offer data
 * after component unmount
 * */
export const clearOfferAction = createAction(
  ActionType.ClearOfferAction,
);

/**
 * @function loadNearbyOfferAction - Action creator for fill nearby offers
 * @param offers - nearby offers
 * */
export const loadCommentsAction = createAction(
  ActionType.LoadComments,
  (comments: CommentBackend[]) => ({
    payload: comments,
  }),
);

/**
 * @function loadNearbyOfferAction - Action creator for fill nearby offers
 * @param offers - nearby offers
 * */
export const loadNearbyOfferAction = createAction(
  ActionType.LoadNearbyOffers,
  (offers: OfferBackend[]) => ({
    payload: offers,
  }),
);

/**
 * @function loadOfferAction - Action creator for load offer from server
 * @param id - Offer id received from remote server
 * */
export const loadOfferAction = createAction(
  ActionType.LoadOffer,
  (offer: OfferBackend) => ({
    payload: offer,
  }),
);
