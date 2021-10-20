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
  citiesMock,
  comments,
  favoritesMock,
  nearbyOffersMock,
  threeOfferMock
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
            offer={threeOfferMock}
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
            cities={citiesMock}
            countRentalOffers={countRentalOffers}
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
