import type { Offer } from '../../types';

import { NameCity } from '../../consts';

export type FavoritesLocationProps = {
  location: NameCity;
  offers: Offer[];
};
