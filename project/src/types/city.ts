import type { NameCity } from '../consts';
import type { Location } from './index';

export type City = {
  id: string;
  location: Location;
  name: NameCity;
};
