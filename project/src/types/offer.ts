import type {
  Host,
  Location,
  UserBackend
} from './index';

import {
  Housing,
  NameCity
} from '../consts';

export type ActiveOffer = {
  id: null | OfferId;
};
export type HandleOfferMouseEnter = (id: number) => void;
export type HandleOfferMouseLeave = () => void;

export type Offer = {
  bedrooms: number;
  bookmark: boolean;
  description: string;
  city: {
    name: NameCity;
    location: Location;
  }
  goods: string[];
  host: Host;
  houseType: string;
  id: OfferId;
  images: string[];
  location: Location;
  maxAdults: number;
  premium: boolean;
  previewImg: string;
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
    'name': NameCity;
  };
  'description': string;
  'goods': string[];
  'host': UserBackend;
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

export type OfferId = number;
