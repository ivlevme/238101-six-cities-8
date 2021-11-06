import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { ThunkAppDispatch } from '../../types/action';
import type {
  OfferId,
  State
} from '../../types';

import type { BookmarksProps } from './types';

import {
  BookmarkText,
  LoadingStatus
} from '../../consts';
import { BookmarksClassName } from './constants';
import { createPlaceCardClassName } from './helpers';
import { changeFavoriteStatusOffer } from '../../store/api-actions';

const mapStateToProps = ({
  FAVORITE,
}: State) => ({
  loadingFavoriteStatus: FAVORITE.loadingStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFavoriteButtonClick(id: OfferId, status: boolean) {
    dispatch(changeFavoriteStatusOffer(id, status));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & BookmarksProps;

function Bookmarks({
  active,
  id,
  loadingFavoriteStatus,
  onFavoriteButtonClick,
}: ConnectedComponentProps): JSX.Element {

  const renderPlaceCardClassName = () =>
    active
      ? createPlaceCardClassName(BookmarksClassName.Active)
      : createPlaceCardClassName('');

  const renderBookmarksText = () =>
    active ? BookmarkText.Active : BookmarkText.InActive;

  const handleButtonClick = () => {
    onFavoriteButtonClick(id, !active);
  };

  return (
    <button
      disabled={loadingFavoriteStatus === LoadingStatus.Loading}
      className={renderPlaceCardClassName()}
      onClick={handleButtonClick}
      type='button'
    >
      <svg
        className='place-card__bookmark-icon'
        height='19'
        width='18'
      >
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>{renderBookmarksText()}</span>
    </button>
  );
}

export { Bookmarks };
export default connector(Bookmarks);
