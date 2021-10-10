import type { Favorites } from '../types';

import { City } from '../consts';
import { oneOfferMock, twoOfferMock, threeOfferMock } from './offers';

export const favoritesMock: Favorites = new Map();
favoritesMock.set(City.Amsterdam, [oneOfferMock, twoOfferMock]);
favoritesMock.set(City.Cologne, [threeOfferMock]);
