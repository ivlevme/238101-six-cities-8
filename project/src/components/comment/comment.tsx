import dayjs from 'dayjs';

import type { CommentProps } from './types';

import { RatingStyleWidth } from './consts';

function Comment({ comment }: CommentProps): JSX.Element {
  return (
    <li className='reviews__item'>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            alt='Reviews avatar'
            className='reviews__avatar user__avatar'
            height='54'
            src={`${comment.user.avatarUrl}`}
            width='54'
          />
        </div>
        <span className='reviews__user-name'>{comment.user.name}</span>
        {comment.user.isPro && <span className='property__user-status'>Pro</span>}
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span
              style={{
                width: RatingStyleWidth[comment.rating],
              }}
            />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{comment.text}</p>
        <time
          className='reviews__time'
          dateTime={dayjs(comment.date).format('YYYY-MM-DD')}
        >
          {dayjs(comment.date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default Comment;
