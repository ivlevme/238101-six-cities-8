import {
  Router as BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { State } from '../../types';

import { browserHistory } from '../../browser-history';
import { cities } from '../../consts';
import {
  FavoritePage,
  Login,
  Main,
  NotFoundScreen,
  OfferPage,
  PrivateRoute
} from '../index';
import { AppRoute } from '../../routes';
import { isCheckedAuth } from '../../helpers';

const mapStateToProps = ({
  OFFERS,
  USER,
}: State) => ({
  activeCity: OFFERS.activeCity,
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: OFFERS.isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({
  activeCity,
  authorizationStatus,
  isDataLoaded,
}: PropsFromRedux): JSX.Element {
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        Loading Application...
      </div>
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.Offer}
        >
          <OfferPage
            city={activeCity}
          />
        </Route>
        <PrivateRoute
          authorizationStatus={authorizationStatus}
          exact
          path={AppRoute.Favorites}
        >
          <FavoritePage />
        </PrivateRoute>
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
