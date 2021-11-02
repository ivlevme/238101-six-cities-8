import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { MainProps } from './types';
import type { State } from '../../types';

import {
  CityList,
  Header,
  Offers
} from '../index';

const mapStateToProps = ({
  offersByCity,
}: State) => ({
  offersByCity,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainProps;

function Main({
  cities,
  offersByCity,
}: ConnectedComponentProps): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className={`page__main page__main--index ${
        offersByCity.length ? '' : 'page__main--index-empty'
      }`}
      >
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <CityList cities={cities}/>
        </div>
        <Offers />
      </main>
    </div>
  );
}

export { Main };
export default connector(Main);
