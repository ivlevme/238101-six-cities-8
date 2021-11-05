import type { OfferCardProps } from './types';

import { Link } from 'react-router-dom';

import { Bookmarks } from '../index';
import { createRouteToOffer } from '../../routes/helpers';
import { getCalcRating } from '../../helpers';
import { memo, useCallback } from 'react';

function OfferCard({
  offer,
  onMouseEnter,
  onMouseLeave,
}: OfferCardProps): JSX.Element {
  const handleOfferMouseEnter = useCallback(() => {
    onMouseEnter(offer.id);
  }, [
    offer.id,
    onMouseEnter,
  ]);

  return (
    <article
      className='cities__place-card place-card'
      onMouseEnter={handleOfferMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.premium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={createRouteToOffer(offer.id)}>
          <img
            className='place-card__image'
            src={offer.previewImg}
            width='260'
            height='200'
            alt='Place'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <Bookmarks active={offer.bookmark} />
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: getCalcRating(offer.rating) }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={createRouteToOffer(offer.id)}>
            {offer.title}
          </Link>
        </h2>
        <p className='place-card__type'>{offer.houseType}</p>
      </div>
    </article>
  );
}

export default memo(OfferCard);
