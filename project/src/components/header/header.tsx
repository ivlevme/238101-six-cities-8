import type { ConnectedProps } from 'react-redux';
import type { State } from '../../types/state';

import {
  AuthUserNav,
  Logo,
  UnauthUserNav
} from '../index';
import { connect } from 'react-redux';
import { AuthorizationStatus } from '../../consts';

const mapStateToProps = ({
  USER,
}: State) => ({
  authorizationStatus: USER.authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Header({
  authorizationStatus,
}: ConnectedComponentProps): JSX.Element {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              {
                authorizationStatus === AuthorizationStatus.Auth
                  ? (<AuthUserNav/>)
                  : (<UnauthUserNav/>)
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };
export default connector(Header);
