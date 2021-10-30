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
  Favorites,
  Login,
  Main,
  NotFoundScreen,
  Offer,
  PrivateRoute
} from '../index';
import { AppRoute } from '../../routes';
import { favoritesMock } from '../../mocks';
import { isCheckedAuth } from '../../helpers';

const mapStateToProps = ({
  activeCity,
  authorizationStatus,
  isDataLoaded,
}: State) => ({
  activeCity,
  authorizationStatus,
  isDataLoaded,
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
          <Offer
            city={activeCity}
          />
        </Route>
        <PrivateRoute
          authorizationStatus={authorizationStatus}
          exact
          path={AppRoute.Favorites}
        >
          <Favorites favorities={favoritesMock} />
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
