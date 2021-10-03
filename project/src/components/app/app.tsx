import type { AppProps } from './types';

import { Main } from '../index';

function App({ countRentalOffers }: AppProps): JSX.Element {
  return <Main countRentalOffers={countRentalOffers} />;
}

export default App;
