import type { BookmarksProps } from './types';

import { BookmarksText } from '../../consts';
import { BookmarksClassName } from './constants';
import { createPlaceCardClassName } from './helpers';

function Bookmarks({ active }: BookmarksProps): JSX.Element {
  const renderPlaceCardClassName = () =>
    active
      ? createPlaceCardClassName(BookmarksClassName.Active)
      : createPlaceCardClassName('');

  const renderBookmarksText = () =>
    active ? BookmarksText.Active : BookmarksText.InActive;

  return (
    <button className={renderPlaceCardClassName()} type='button'>
      <svg className='place-card__bookmark-icon' width='18' height='19'>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>{renderBookmarksText()}</span>
    </button>
  );
}

export default Bookmarks;
