import { memo } from 'react';

import type { CommentsProps } from './types';

import { Comment } from '../index';

const INDEX_FIRST_COMMENT = 0;
const MAX_COUNT_VISIBLE_COMMENTS = 10;

function Comments({ comments }: CommentsProps): JSX.Element {
  return (
    <ul className='reviews__list'>
      {comments
        .slice(INDEX_FIRST_COMMENT, MAX_COUNT_VISIBLE_COMMENTS)
        .map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
          />
        ))}
    </ul>
  );
}

export default memo(Comments);
