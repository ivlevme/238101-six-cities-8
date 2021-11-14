import type { City } from '../types';

export const getSuggestedCity = (cities: City[]): City =>
  cities[Math.floor(Math.random() * cities.length)];
