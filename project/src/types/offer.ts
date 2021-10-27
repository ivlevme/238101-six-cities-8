import type { Location } from './index';

import { Housing } from '../consts';

export type ActiveOffer = {
  id: null | number;
};
export type HandleOfferMouseEnter = (id: number) => void;
export type HandleOfferMouseLeave = () => void;

export type Offer = {
  city: {
    name: string;
    location: Location;
  }
  bookmark: boolean;
  houseType: string;
  id: number;
  img: string;
  location: Location;
  premium: boolean;
  price: number;
  rating: number;
  title: string;
};

/**
 * @type {OfferBackend} - Offer Backend type for offers from remote server
 * */
export type OfferBackend = {
  'bedrooms': number;
  'city': {
    'location': Location;
    'name': string;
  };
  'description': string;
  'goods': string[];
  'host': {
    'avatar_url': string;
    'id': number;
    'is_pro': boolean;
    'name': string;
  };
  'id': number;
  'images': string[];
  'is_favorite': boolean;
  'is_premium': boolean;
  'location': Location;
  'max_adults': number;
  'preview_image': string;
  'price': number;
  'rating': number;
  'title': string;
  'type': Housing;
};
