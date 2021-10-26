import type { NameCity } from '../consts';
import type { Location } from './index';

export type City = {
  id: number;
  location: Location;
  name: NameCity;
};
