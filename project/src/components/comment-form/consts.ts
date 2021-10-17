import type { CommentUser } from '../../types';

import { Rating } from '../../consts';

export const RADIX = 10;

export const initalComment: CommentUser = {
  rating: Rating.NotDefined,
  text: '',
};


