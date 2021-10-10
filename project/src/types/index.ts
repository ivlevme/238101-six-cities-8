import { City } from '../consts';

export type CommentUser = {
  rating: string;
  text: string;
};

export type Favorites = Map<City, Offers>;

export type Offer = {
  bookmark: boolean;
  houseType: string;
  id: string;
  img: string;
  premium: boolean;
  price: number;
  title: string;
};

export type Offers = Offer[];
