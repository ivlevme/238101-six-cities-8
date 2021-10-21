import type { OfferListProps } from './types';

import { OfferCard } from '../index';

function OfferList({
  offers,
  onMouseEnter,
  onMouseLeave,
}: OfferListProps): JSX.Element {
  const renderOffers = () => {
    if (offers.length) {
      return offers.map(
        (offer): JSX.Element => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        ),
      );
    }
    return <span>Offers not found</span>;
  };
  return (
    <div className='cities__places-list places__list tabs__content'>
      {renderOffers()}
    </div>
  );
}

export default OfferList;
