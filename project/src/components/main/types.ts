import type {
  City,
  Offers
} from '../../types';

export type MainProps = {
  city: City;
  countRentalOffers: number;
  offers: Offers;
};
