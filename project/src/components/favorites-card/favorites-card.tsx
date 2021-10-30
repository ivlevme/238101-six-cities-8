import { Link } from 'react-router-dom';

import type { FavoritesCardProps } from './types';

import { createRouteToOffer } from '../../routes/helpers';

function FavoritesCard({ offer }: FavoritesCardProps): JSX.Element {
  return (
    <article className='favorites__card place-card'>
      {offer.premium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <Link to={createRouteToOffer(offer.id)}>
          <img
            alt='Place'
            className='place-card__image'
            height='110'
            src={offer.previewImg}
            width='150'
          />
        </Link>
      </div>
      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button
            className='place-card__bookmark-button place-card__bookmark-button--active button'
            type='button'
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: '100%' }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={createRouteToOffer(offer.id)}>{offer.title}</Link>
        </h2>
        <p className='place-card__type'>{offer.houseType}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
