import type { FavoritesLocationProps } from './types';

import { FavoritesCard } from '../index';

function FavoritesLocation({
  location,
  offers,
}: FavoritesLocationProps): JSX.Element {
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='/'>
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className='favorites__places'>
        {offers.map((offer) => (
          <FavoritesCard
            key={offer.id}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesLocation;
