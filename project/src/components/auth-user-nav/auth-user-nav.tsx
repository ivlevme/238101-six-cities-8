import type { MouseEvent } from 'react';

import { Link } from 'react-router-dom';

import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { State } from '../../types';
import type { ThunkAppDispatch } from '../../types/action';

import { AppRoute } from '../../routes';
import { logoutAction } from '../../store/api-actions';

const mapStateToProps = ({
  USER,
}: State) => ({
  email: USER.email,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AuthUserNav({
  email,
  onLogout,
}: PropsFromRedux): JSX.Element {
  const handlerLogoutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onLogout();
  };

  return (
    <>
      <li className='header__nav-item user'>
        <Link
          to={AppRoute.Favorites}
          className='header__nav-link header__nav-link--profile'
        >
          <div className='header__avatar-wrapper user__avatar-wrapper'></div>
          <span className='header__user-name user__name'>
            {email}
          </span>
        </Link>
      </li>
      <li className='header__nav-item'>
        <a onClick={handlerLogoutClick} className='header__nav-link' href='/'>
          <span className='header__signout'>Sign out</span>
        </a>
      </li>
    </>
  );
}

export { AuthUserNav };
export default connector(AuthUserNav);
