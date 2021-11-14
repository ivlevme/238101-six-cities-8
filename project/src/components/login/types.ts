import type { City } from '../../types';

export type LoginProps = {
  suggestedCity: City;
};

export type UserSignIn = {
  email: string;
  password: string;
};
