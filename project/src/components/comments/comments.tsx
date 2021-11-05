import { memo } from 'react';

import type { CommentsProps } from './types';

import { Comment } from '../index';

function Comments({ comments }: CommentsProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {comments.map((comment) => (
        <Comment
          comment={comment}
          key={comment.id}
        />
      ))}
    </ul>
  );
}

export default memo(Comments);
