import type { Offer } from '../types';
import { NameCity } from '../consts';

export const getOffersByCity = (
  city: NameCity,
  offers: Offer[],
): Offer[] =>
  offers.filter((offer) => offer.city.name === city);
