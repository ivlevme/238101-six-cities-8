import type { OfferListProps } from './types';

import { OfferCard } from '../index';

function OfferList({
  offers,
  onMouseEnter,
  onMouseLeave,
}: OfferListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map(
        (offer): JSX.Element => (
          <OfferCard
            key={offer.id}
            bookmarks={offer.bookmark}
            houseType={offer.houseType}
            id={offer.id}
            img={offer.img}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            premium={offer.premium}
            price={offer.price}
            title={offer.title}
          />
        ),
      )}
    </div>
  );
}

export default OfferList;
