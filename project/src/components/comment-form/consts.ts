import type { CommentUser } from '../../types';

import { Rating } from '../../consts';

export const initalComment: CommentUser = {
  rating: Rating.NotDefined,
  text: '',
};
