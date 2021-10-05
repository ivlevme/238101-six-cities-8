import { BrowserRouter, Route, Switch } from 'react-router-dom';

import type { AppProps } from './types';

import { AuthorizationStatus } from '../../conts';
import {
  Favorites,
  Login,
  Main,
  NotFoundScreen,
  Offer,
  PrivateRoute
} from '../index';
import { AppRoute } from '../../routes';

function App({ countRentalOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          authorizationStatus={AuthorizationStatus.NoAuth}
          exact
          path={AppRoute.Offer}
        >
          <Offer />
        </PrivateRoute>
        <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Main}>
          <Main countRentalOffers={countRentalOffers} />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
