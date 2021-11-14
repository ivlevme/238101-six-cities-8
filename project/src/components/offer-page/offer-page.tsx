import { useEffect } from 'react';

import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import { useParams } from 'react-router';

import type {
  OfferId,
  State
} from '../../types';
import type {
  OfferProps,
  Param
} from './types';
import type { ThunkAppDispatch } from '../../types/action';

import {
  AuthorizationStatus,
  BookmarkText,
  LoadingStatus,
  RADIX
} from '../../consts';
import {
  CommentForm,
  Comments,
  Header,
  LoadingFailed,
  Map,
  OfferCard,
  OfferGood,
  OfferPromoImg,
  Spinner
} from '../index';
import { getCalcRating } from '../../helpers';
import { useActiveOffer } from '../../hooks';

import {
  changeFavoriteStatusOffer,
  fetchCommentsAction,
  fetchNearbyOfferAction,
  fetchOfferAction
} from '../../store/api-actions';
import { clearOfferAction } from '../../store/actions';
import { PromoImage } from './const';

const mapStateToProps = ({
  COMMENT,
  FAVORITE,
  OFFER,
  USER,
}: State) => ({
  authorizationStatus: USER.authorizationStatus,
  comments: COMMENT.comments,
  loadingCommentsStatus: COMMENT.allCommentsLoadingStatus,
  loadingFavoriteStatus: FAVORITE.loadingStatus,
  loadingOfferStatus: OFFER.loadingOfferStatus,
  loadingNearbyStatus: OFFER.loadingNearbyStatus,
  nearbyOffers: OFFER.nearbyOffers,
  offer: OFFER.offer,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFavoriteButtonClick(
    id: OfferId,
    status: boolean,
  ) {
    dispatch(changeFavoriteStatusOffer(
      id,
      status,
    ));
  },
  onLoadOffer(id: OfferId) {
    dispatch(fetchOfferAction(id));
    dispatch(fetchNearbyOfferAction(id));
    dispatch(fetchCommentsAction(id));
  },
  onLeaveOffer() {
    dispatch(clearOfferAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & OfferProps;

function OfferPage({
  authorizationStatus,
  city,
  comments,
  loadingCommentsStatus,
  loadingFavoriteStatus,
  loadingOfferStatus,
  loadingNearbyStatus,
  nearbyOffers,
  offer,
  onFavoriteButtonClick,
  onLeaveOffer,
  onLoadOffer,
}: PropsFromRedux): JSX.Element {
  const { id } = useParams<Param>();
  const offerId = parseInt(id, RADIX);

  useEffect(() => {
    onLoadOffer(offerId);
    return onLeaveOffer;
  }, [
    offerId,
    onLeaveOffer,
    onLoadOffer,
  ]);

  const [
    activeOffer,
    onMouseEnterOffer,
    onMouseLeaveOffer,
  ] = useActiveOffer({ id: offerId });

  if(
    loadingOfferStatus === LoadingStatus.Loading ||
    loadingCommentsStatus === LoadingStatus.Loading ||
    loadingNearbyStatus === LoadingStatus.Loading
  ) {
    return <Spinner text='Loading Offer information...'/>;
  }

  if(!offer) {
    return(
      <div
        style={{
          textAlign: 'center',
        }}
      >
        Error loading offer information.
      </div>
    );
  }

  const renderImages = () => (
    <div className='property__gallery-container container'>
      <div className='property__gallery'>
        {offer.images
          .slice(PromoImage.Start, PromoImage.MaxCount)
          .map((src) => <OfferPromoImg key={src} src={src} />)}
      </div>
    </div>
  );

  const handleBookmarkButtonClick = () => {
    onFavoriteButtonClick(offer.id, !offer.bookmark);
  };

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          {renderImages()}
          <div className='property__container container'>
            <div className='property__wrapper'>
              {offer.premium && (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>{offer.title}</h1>
                <button
                  disabled={loadingFavoriteStatus === LoadingStatus.Loading}
                  className={`property__bookmark-button ${
                    offer.bookmark ? 'property__bookmark-button--active' : ''
                  } button`}
                  onClick={handleBookmarkButtonClick}
                  type='button'
                >
                  <svg
                    className='property__bookmark-icon'
                    width='31'
                    height='33'
                  >
                    <use xlinkHref='#icon-bookmark'></use>
                  </svg>
                  <span className='visually-hidden'>
                    {offer.bookmark
                      ? BookmarkText.Active
                      : BookmarkText.InActive}
                  </span>
                </button>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span
                    style={{
                      width: getCalcRating(offer.rating),
                    }}
                  >
                  </span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {offer.rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {offer.houseType}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {offer.bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{offer.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {offer.goods.map((good) => (
                    <OfferGood
                      key={good}
                      good={good}
                    />
                  ))}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src={offer.host.avatarUrl}
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>{offer.host.name}</span>
                  { offer.host.isPro && (<span className='property__user-status'>Pro</span>) }
                </div>
                <div className='property__description'>
                  <p className='property__text'>
                    {offer.description}
                  </p>
                </div>
              </div>
              {loadingCommentsStatus === LoadingStatus.Fail
                ? (<LoadingFailed text='Failed loading comments' />)
                : (
                  <section className='property__reviews reviews'>
                    <h2 className='reviews__title'>
                      Reviews &middot;{' '}
                      <span className='reviews__amount'>{comments.length}</span>
                    </h2>
                    <Comments comments={comments} />
                    { authorizationStatus === AuthorizationStatus.Auth && <CommentForm /> }
                  </section>
                )}
            </div>
          </div>
          <section className='property__map map'>
            <Map
              activeOffer={activeOffer}
              city={city}
              offers={[...nearbyOffers, offer]}
            />
          </section>
        </section>
        <div className='container'>
          {loadingNearbyStatus === LoadingStatus.Fail
            ? (<LoadingFailed text='Failed loading nearby offers' />)
            : (
              <section className='near-places places'>
                <h2 className='near-places__title'>
                  Other places in the neighbourhood
                </h2>
                <div className='near-places__list places__list'>
                  {nearbyOffers.map((nearbyOffer) => (
                    <OfferCard
                      key={nearbyOffer.id}
                      offer={nearbyOffer}
                      onMouseEnter={onMouseEnterOffer}
                      onMouseLeave={onMouseLeaveOffer}
                    />
                  ))}
                </div>
              </section>
            )}
        </div>
      </main>
    </div>
  );
}

export { OfferPage };
export default connector(OfferPage);
