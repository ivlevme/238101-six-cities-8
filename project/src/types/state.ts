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
 * @type {State} - Redux store type
 * */
export type State = {
  activeCity: City;
  allOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  comments: Comment[];
  commentLoadingStatus: CommentLoadingStatus;
  email: string;
  isDataLoaded: boolean;
  nearbyOffers: Offer[];
  offer: Offer | null;
  offersByCity: Offer[];
  sorting: Sorting;
};
