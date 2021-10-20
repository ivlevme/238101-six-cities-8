import type {
  City,
  Offer
} from './types';
import { NameCity } from './consts';
import {
  amsterdamOffersMock,
  parisOffersMock
} from './mocks';

export const getOffersByCity = (city: City): Offer[] => {
  if( city.name === NameCity.Amsterdam ) {
    return amsterdamOffersMock;
  }

  if( city.name === NameCity.Paris ) {
    return parisOffersMock;
  }

  return [];
};
