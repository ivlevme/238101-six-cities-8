import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { State } from '../../types';

import { initalActiveOffer } from '../../consts';
import { useActiveOffer } from '../../hooks';
import {
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
type ConnectedComponentProps = PropsFromRedux;

function Offers({
  activeCity,
  offers,
}: ConnectedComponentProps): JSX.Element {
  const [
    activeOffer,
    handleOfferMouseEnter,
    handleOfferMouseLeave,
  ] = useActiveOffer(initalActiveOffer);

  return (
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
            <Map activeOffer={activeOffer} city={activeCity} offers={offers} />
          </section>
        </div>
      </div>
    </div>
  );
}

export { Offers };
export default connector(Offers);
