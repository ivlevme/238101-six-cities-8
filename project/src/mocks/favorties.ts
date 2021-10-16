import type { Favorites } from '../types';

import { NameCity } from '../consts';
import {
  oneOfferMock,
  threeOfferMock,
  twoOfferMock
} from './offers';

export const favoritesMock: Favorites = new Map();
favoritesMock.set(NameCity.Amsterdam, [
  oneOfferMock,
  twoOfferMock,
]);
favoritesMock.set(NameCity.Cologne, [threeOfferMock]);
