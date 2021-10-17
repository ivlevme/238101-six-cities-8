import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import type { AppProps } from './types';

import { AuthorizationStatus } from '../../consts';
import {
  Favorites,
  Login,
  Main,
  NotFoundScreen,
  Offer,
  PrivateRoute
} from '../index';
import { AppRoute } from '../../routes';
import {
  amsterdam,
  comments,
  favoritesMock,
  nearbyOffersMock,
  offersMock,
  oneOfferMock
} from '../../mocks';

function App({ countRentalOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          authorizationStatus={AuthorizationStatus.Auth}
          exact
          path={AppRoute.Offer}
        >
          <Offer
            city={amsterdam}
            comments={comments}
            nearbyOffers={nearbyOffersMock}
            offer={oneOfferMock}
          />
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.Favorites}
        >
          <Favorites favorities={favoritesMock} />
        </Route>
        <Route
          exact
          path={AppRoute.Login}
        >
          <Login />
        </Route>
        <Route
          exact
          path={AppRoute.Main}
        >
          <Main
            city={amsterdam}
            countRentalOffers={countRentalOffers}
            offers={offersMock}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
