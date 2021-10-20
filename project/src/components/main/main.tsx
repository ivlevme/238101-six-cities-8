import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { State } from '../../types';
import type { MainProps } from './types';

import { initalActiveOffer } from './consts';
import { useActiveOffer } from '../../hooks';
import {
  CityList,
  Header,
  Map,
  OfferList
} from '../index';

const mapStateToProps = ({
  city,
  offers,
}: State) => ({
  city,
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainProps;

function Main({
  cities,
  city,
  countRentalOffers,
  offers,
}: ConnectedComponentProps): JSX.Element {
  const [
    activeOffer,
    handleOfferMouseEnter,
    handleOfferMouseLeave,
  ] = useActiveOffer(initalActiveOffer);

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <CityList cities={cities}/>
        </div>
        <div className='cities'>
          <div className='cities__places-container container'>
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>
                {countRentalOffers} places to stay in {city.name}
              </b>
              <form className='places__sorting' action='#' method='get'>
                <span className='places__sorting-caption'>Sort by</span>
                <span className='places__sorting-type' tabIndex={0}>
                  Popular
                  <svg className='places__sorting-arrow' width='7' height='4'>
                    <use xlinkHref='#icon-arrow-select'></use>
                  </svg>
                </span>
                <ul className='places__options places__options--custom places__options--opened'>
                  <li
                    className='places__option places__option--active'
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className='places__option' tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferList
                offers={offers}
                onMouseEnter={handleOfferMouseEnter}
                onMouseLeave={handleOfferMouseLeave}
              />
            </section>
            <div className='cities__right-section'>
              <section className='cities__map map'>
                <Map
                  activeOffer={activeOffer}
                  city={city}
                  offers={offers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
