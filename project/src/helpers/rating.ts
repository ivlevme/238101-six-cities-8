import type { RatingRange } from '../types';

import { RatingStyleWidth} from '../consts';

export const getCalcRating = (rating: number): string => {
  const ratingValue: RatingRange = Math.round(rating);
  return RatingStyleWidth[ratingValue];
};
