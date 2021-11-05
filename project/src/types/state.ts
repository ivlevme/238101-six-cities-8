import type { RootState } from '../store/root-reducer';

import {
  AuthorizationStatus,
  CommentLoadingStatus,
  Sorting
} from '../consts';
import type {
  City,
  Comment,
  Offer
} from './index';

/**
 * @CommentProcess State - Redux Reducer type for comment
 * */
export type CommentProcess = {
  comments: Comment[];
  commentLoadingStatus: CommentLoadingStatus;
};

/**
 * @OfferProcess State - Redux Reducer type for offer
 * */
export type OfferProcess = {
  offer: Offer | null;
  nearbyOffers: Offer[];
}

/**
 * @OffersProcess State - Redux Reducer type for offers
 * */
export type OffersProcess = {
  activeCity: City;
  allOffers: Offer[];
  isDataLoaded: boolean;
  offersByCity: Offer[];
  sorting: Sorting;
}

/**
 * @UserProcess State - Redux Reducer type for user
 * */
export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  email: string;
};

/**
 * @type State - Redux store type
 * */
export type State = RootState;
