import type { CommentUser } from '../../types';

import { Rating } from '../../consts';

export const MAX_COMMENT_LENGTH = 50;

export const initalComment: CommentUser = {
  rating: Rating.NotDefined,
  text: '',
};


