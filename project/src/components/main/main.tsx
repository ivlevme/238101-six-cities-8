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
  OfferList,
  SortingOptions
} from '../index';

const mapStateToProps = ({
  activeCity,
  offersByCity,
}: State) => ({
  activeCity,
  offers: offersByCity,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainProps;

function Main({
  cities,
  activeCity,
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
                {offers.length} places to stay in {activeCity.name}
              </b>
              <SortingOptions />
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
                  city={activeCity}
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
