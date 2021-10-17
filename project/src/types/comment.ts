import type { User } from './index';

import { Rating } from '../consts';

export type CommentUser = {
  rating: Rating;
  text: string;
};

export type Comment = {
  date: string;
  id: number;
  rating: Rating;
  text: string;
  user: User;
};
