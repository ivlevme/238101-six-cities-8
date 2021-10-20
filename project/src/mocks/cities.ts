import type { City } from '../types';

import { NameCity } from '../consts';

export const amsterdam: City = {
  id: '1',
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: NameCity.Amsterdam,
};

export const brussels: City = {
  id: '2',
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: NameCity.Brussels,
};

export const cologne: City = {
  id: '3',
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: NameCity.Cologne,
};

export const dusseldorf: City = {
  id: '4',
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: NameCity.Dusseldorf,
};

export const humburg: City = {
  id: '5',
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
  name: NameCity.Hamburg,
};

export const paris: City = {
  id: '6',
  location: {
    latitude: 40.835292,
    longitude: -73.916236,
    zoom: 10,
  },
  name: NameCity.Paris,
};

export const citiesMock: City[] = [
  paris,
  cologne,
  brussels,
  amsterdam,
  humburg,
  dusseldorf,
];
