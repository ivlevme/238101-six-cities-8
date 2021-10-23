import { Sorting } from '../consts';
import type {
  City,
  Offer
} from './index';

export type State = {
  activeCity: City;
  offers: Offer[];
  sorting: Sorting;
};
