import type { OfferCardProps } from './types';

import { Link } from 'react-router-dom';

import { createRouteToOffer } from '../../routes/helpers';
import { Bookmarks } from '../index';

function OfferCard({
  bookmarks,
  houseType,
  id,
  img,
  premium,
  price,
  title,

  onMouseEnter,
  onMouseLeave,
}: OfferCardProps): JSX.Element {
  const renderPremium = () =>
    premium ? (
      <div className='place-card__mark'>
        <span>Premium</span>
      </div>
    ) : ('');

  const handleOfferMouseEnter = () => {
    onMouseEnter(id);
  };

  return (
    <article
      className='cities__place-card place-card'
      onMouseEnter={handleOfferMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {renderPremium()}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={createRouteToOffer(id)}>
          <img
            className='place-card__image'
            src={img}
            width='260'
            height='200'
            alt='Place'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>

          <Bookmarks active={bookmarks} />
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: '80%' }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={createRouteToOffer(id)}>{title}</Link>
        </h2>
        <p className='place-card__type'>{houseType}</p>
      </div>
    </article>
  );
}

export default OfferCard;
