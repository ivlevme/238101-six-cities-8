import type { Offer } from '../types';

import { Sorting } from '../consts';

export const getOffersBySorting = (
  sorting: Sorting,
  offers: Offer[],
): Offer[] => {
  switch (sorting) {
    case Sorting.Popular:
      return offers;

    case Sorting.PriceHigh:
      return offers.sort((a, b) => b.price - a.price);

    case Sorting.PriceLow:
      return offers.sort((a, b) => a.price - b.price);

    case Sorting.TopRated:
      return offers.sort((a, b) => b.rating - a.rating);
  }
};
