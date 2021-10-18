import type { Comment } from '../types';

export const oneComment: Comment = {
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 4,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

export const twoComment: Comment = {
  date: '2020-12-08T14:13:56.569Z',
  id: 2,
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 5,
  user: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 5,
    isPro: true,
    name: 'Angel',
  },
};

export const comments: Comment[] = [oneComment, twoComment];
