import type { Location } from './index';

export type ActiveOffer = {
  id: null | string;
};
export type HandleOfferMouseEnter = (id: string) => void;
export type HandleOfferMouseLeave = () => void;

export type Offer = {
  bookmark: boolean;
  houseType: string;
  id: string;
  img: string;
  location: Location;
  premium: boolean;
  price: number;
  title: string;
};

export type Offers = Offer[];
