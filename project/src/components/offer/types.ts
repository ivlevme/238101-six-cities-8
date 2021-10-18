import type {
  City,
  Comment,
  Offer
} from '../../types';

export type OfferProps = {
  city: City;
  comments: Comment[];
  nearbyOffers: Offer[];
  offer: Offer;
};
