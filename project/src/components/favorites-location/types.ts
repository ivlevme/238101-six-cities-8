import type { Offers } from '../../types';

import { NameCity } from '../../consts';

export type FavoritesLocationProps = {
  location: NameCity;
  offers: Offers;
};
