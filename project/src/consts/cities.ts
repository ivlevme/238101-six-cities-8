import type { City } from '../types';

export enum NameCity {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const amsterdam: City = {
  id: 1,
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  name: NameCity.Amsterdam,
};

export const brussels: City = {
  id: 2,
  location: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  name: NameCity.Brussels,
};

export const cologne: City = {
  id: 3,
  location: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  name: NameCity.Cologne,
};

export const dusseldorf: City = {
  id: 4,
  location: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  },
  name: NameCity.Dusseldorf,
};

export const humburg: City = {
  id: 5,
  location: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  name: NameCity.Hamburg,
};

export const paris: City = {
  id: 6,
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  name: NameCity.Paris,
};

export const cities: City[] = [
  paris,
  cologne,
  brussels,
  amsterdam,
  humburg,
  dusseldorf,
];
