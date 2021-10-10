import type { Offers } from '../../types';

import { City } from '../../consts';

export type FavoritesLocationProps = {
  location: City;
  offers: Offers;
};
