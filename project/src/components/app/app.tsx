import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { State } from '../../types';

import { cities } from '../../consts';
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
  comments,
  favoritesMock
} from '../../mocks';

const INDEX_FIRST_OFFER = 0;
const COUNT_NEARBY_OFFERS = 3;

const mapStateToProps = ({
  activeCity,
  authorizationStatus,
  offersByCity,
}: State) => ({
  activeCity,
  authorizationStatus,
  offersByCity,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({
  activeCity,
  authorizationStatus,
  offersByCity,
}: PropsFromRedux): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          authorizationStatus={authorizationStatus}
          exact
          path={AppRoute.Offer}
        >
          <Offer
            city={activeCity}
            comments={comments}
            nearbyOffers={
              offersByCity.slice(
                INDEX_FIRST_OFFER,
                COUNT_NEARBY_OFFERS,
              )
            }
            offer={offersByCity[INDEX_FIRST_OFFER]}
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
            cities={cities}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
