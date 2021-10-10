import type { Offer } from '../../types';

export type MainProps = {
  countRentalOffers: number;
  offers: Offer[];
};

export type ActiveOfferState = {
  id: null | string
};
