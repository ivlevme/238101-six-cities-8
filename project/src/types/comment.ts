import type {
  Host,
  UserBackend
} from './index';

import { Rating } from '../consts';

export type CommentUser = {
  rating: Rating;
  text: string;
};

export type Comment = CommentUser & {
  date: string;
  id: number;
  user: Host;
};

export type CommentBackend = {
  comment: string;
  date: string;
  id: number;
  rating: Rating;
  user: UserBackend;
}
