import { useEffect } from 'react';

import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type {
  Favorites,
  Offer,
  State
} from '../../types';
import type { ThunkAppDispatch } from '../../types/action';

import {
  LoadingStatus,
  NameCity
} from '../../consts';
import {
  FavoritesEmpty,
  FavoritesLocation,
  Footer,
  Header
} from '../index';
import { getRandomInteger } from '../../helpers';
import { fetchFavoriteOffersAction } from '../../store/api-actions';

const LOCATION_INDEX = 0;
const OFFERS_INDEX = 1;

const mapStateToProps = ({
  FAVORITE,
}: State) => ({
  favorities: FAVORITE.favorites,
  loadingPageStatus: FAVORITE.loadingPageStatus,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavoriteOffersAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux;

function FavoritePage({
  favorities,
  loadingPageStatus,
  onLoadFavorites,
}: ConnectedComponentProps): JSX.Element {
  useEffect(() => {
    onLoadFavorites();
  }, [
    onLoadFavorites,
  ]);

  if(loadingPageStatus === LoadingStatus.Loading) {
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        Loading Favorite Offers information...
      </div>
    );
  }

  const renderLocation = (location: NameCity, offers: Offer[]) => (
    <FavoritesLocation
      key={getRandomInteger()}
      location={location}
      offers={offers}
    />
  );

  const renderFavoritesCardByLocation = (): JSX.Element[] => {
    const locations: JSX.Element[] = [];
    const convertedOffers: Favorites = new Map();

    favorities.forEach((offer) => {
      const city = convertedOffers.has(offer.city.name);

      if(city) {
        convertedOffers.set(
          offer.city.name,
          [...(convertedOffers.get(offer.city.name) as Offer[]), offer],
        );

        return;
      }

      convertedOffers.set(
        offer.city.name as NameCity,
        [offer],
      );
    });

    for (const convertedOffer of convertedOffers) {
      locations.push(
        renderLocation(convertedOffer[LOCATION_INDEX], convertedOffer[OFFERS_INDEX]),
      );
    }

    return locations;
  };

  const renderFavoritesContent = () =>
    favorities.length ?
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

export { FavoritePage };
export default connector(FavoritePage);
