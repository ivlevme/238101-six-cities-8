import type {
  City,
  Offer
} from '../types';
import { NameCity } from '../consts';
import {
  amsterdamOffersMock,
  parisOffersMock
} from '../mocks';

export const getOffersByCity = (city: City): Offer[] => {
  switch (city.name) {
    case NameCity.Amsterdam:
      return amsterdamOffersMock;

    case NameCity.Paris:
      return parisOffersMock;

    default:
      return [];
  }
};
