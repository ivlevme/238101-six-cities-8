import { Footer, Header } from '../index';

function FavoritesEmpty(): JSX.Element {
  return (
    <div className='page page--favorites-empty'>
      <Header />
      <div className='page__favorites-container container'>
        <section className='favorites favorites--empty'>
          <h1 className='visually-hidden'>Favorites (empty)</h1>
          <div className='favorites__status-wrapper'>
            <b className='favorites__status'>Nothing yet saved.</b>
            <p className='favorites__status-description'>
              Save properties to narrow down search or plan your future trips.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default FavoritesEmpty;
