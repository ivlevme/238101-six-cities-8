import type { FavoritesProps } from './types';
import type { Offer } from '../../types';

import { NameCity } from '../../consts';
import {
  FavoritesEmpty,
  FavoritesLocation,
  Footer,
  Header
} from '../index';
import { getRandomInteger } from '../../helpers';

const LOCATION_INDEX = 0;
const OFFERS_INDEX = 1;

function Favorites({ favorities }: FavoritesProps): JSX.Element {
  const renderLocation = (location: NameCity, offers: Offer[]) => (
    <FavoritesLocation
      key={getRandomInteger()}
      location={location}
      offers={offers}
    />
  );

  const renderFavoritesCardByLocation = (): JSX.Element[] => {
    const locations: JSX.Element[] = [];

    for (const favorite of favorities) {
      locations.push(
        renderLocation(favorite[LOCATION_INDEX], favorite[OFFERS_INDEX]),
      );
    }

    return locations;
  };

  const renderFavoritesContent = () =>
    favorities.size ?
      (
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <ul className='favorites__list'>{renderFavoritesCardByLocation()}</ul>
        </section>
      ) : (<FavoritesEmpty />);

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          {renderFavoritesContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
