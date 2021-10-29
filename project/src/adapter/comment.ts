import type {
  Comment,
  CommentBackend,
  CommentUser
} from '../types';

export const convertCommentToServer = (
  comment: CommentUser,
): Pick<CommentBackend, 'comment' | 'rating'> => (
  {
    comment: comment.text,
    rating: comment.rating,
  }
);

export const getConvertedComments = (
  comments: CommentBackend[],
): Comment[] => (comments.map(getConvertedComment));

export const getConvertedComment = (
  comment: CommentBackend,
): Comment => ({
  date: comment.date,
  id: comment.id,
  rating: comment.rating,
  text: comment.comment,
  user: {
    avatarUrl: comment.user.avatar_url,
    id: comment.user.id,
    isPro: comment.user.is_pro,
    name: comment.user.name,
  },
});

