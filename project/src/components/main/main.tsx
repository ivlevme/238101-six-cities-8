import type { MainProps } from './types';

import {
  CityList,
  Header,
  Offers
} from '../index';

function Main({
  cities,
}: MainProps): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <CityList cities={cities}/>
        </div>
        <Offers />
      </main>
    </div>
  );
}

export default Main;
