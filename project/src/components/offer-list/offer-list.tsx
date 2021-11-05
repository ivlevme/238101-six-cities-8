import type { OfferListProps } from './types';

import { OfferCard } from '../index';

function OfferList({
  offers,
  onMouseEnter,
  onMouseLeave,
}: OfferListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map(
          (offer): JSX.Element => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          ),
        )
      }
    </div>
  );
}

export default OfferList;
