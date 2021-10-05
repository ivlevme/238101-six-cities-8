import { Redirect, Route } from 'react-router-dom';
import type { RouteProps } from 'react-router-dom';

import { AppRoute } from '../../routes';
import { AuthorizationStatus } from '../../conts';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children, exact, path } = props;

  const renderComponent = () =>
    authorizationStatus === AuthorizationStatus.Auth ? (
      children
    ) : (
      <Redirect to={AppRoute.Login} />
    );

  return (
    <Route exact={exact} path={path}>
      {renderComponent()}
    </Route>
  );
}

export default PrivateRoute;
