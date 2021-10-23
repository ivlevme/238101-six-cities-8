import { Rating } from '../consts';

export type RatingRange =
  | Rating.NotDefined
  | Rating.Terribly
  | Rating.Badly
  | Rating.NotBad
  | Rating.Good
  | Rating.Perfect;
