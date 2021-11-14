import dayjs from 'dayjs';
import type { Comment } from '../types';

export const getFilteredCommentsByNewest = (comments: Comment[]): Comment[] =>
  comments.sort((a, b) => dayjs(b.date).isAfter(dayjs(a.date)) ? 1 : -1);
