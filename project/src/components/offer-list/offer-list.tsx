import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { State } from '../../types';
import type { OfferListProps } from './types';

import {
  OfferLoadingScreen,
  OfferCard
} from '../index';
import { isCheckedAuth } from '../../helpers';

const mapStateToProps = ({
  authorizationStatus,
  isDataLoaded,
}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & OfferListProps;

function OfferList({
  authorizationStatus,
  isDataLoaded,
  offers,
  onMouseEnter,
  onMouseLeave,
}: ConnectedComponentProps): JSX.Element {
  const renderOffers = () =>(
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
  );


  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        isCheckedAuth(authorizationStatus) || !isDataLoaded
          ? (<OfferLoadingScreen />)
          : (renderOffers())
      }
    </div>
  );
}

export { OfferList };
export default connector(OfferList);
