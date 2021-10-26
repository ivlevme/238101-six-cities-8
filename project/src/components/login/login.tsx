import type {
  ChangeEvent,
  FormEvent,
  MouseEvent
} from 'react';
import { useState } from 'react';

import type { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';

import type { AuthData } from '../../types/auth-data';
import type { ThunkAppDispatch } from '../../types/action';
import type {
  City,
  State
} from '../../types';

import { Header } from '../index';

import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../../routes';
import {
  changeCityAction,
  changeSortingAction,
  fillOffersAction,
  redirectToRoute
} from '../../store/action';
import {
  amsterdam,
  Sorting
} from '../../consts';
import { initUserSignIn } from './const';

const mapStateToProps = ({ sorting }: State) => ({ sorting });

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
    dispatch(redirectToRoute(AppRoute.Main));
  },
  onChangeCity(city: City, sorting: Sorting) {
    dispatch(changeCityAction(city));
    dispatch(fillOffersAction(city.name));
    dispatch(changeSortingAction(sorting));
    dispatch(redirectToRoute(AppRoute.Main));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Login({
  onChangeCity,
  onSubmit,
  sorting,
}: PropsFromRedux): JSX.Element {
  const [userSignIn, setUserSignIn] = useState(initUserSignIn);

  const isSignInButtonDisabled =
    userSignIn.email.trim() === initUserSignIn.email ||
    userSignIn.password.trim() === initUserSignIn.password;


  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserSignIn((prevUserSignIn) => ({
      ...prevUserSignIn,
      email: evt.target.value,
    }));
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserSignIn((prevUserSignIn) => ({
      ...prevUserSignIn,
      password: evt.target.value,
    }));
  };

  const handleSignInFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      email: userSignIn.email,
      password: userSignIn.password,
    });
  };

  const handleLinkToCityClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    onChangeCity(amsterdam, sorting);
  };

  return (
    <div className='page page--gray page--login'>
      <Header />
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form
              action='#'
              className='login__form form'
              onSubmit={handleSignInFormSubmit}
              method='post'
            >
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input
                  className='login__input form__input'
                  name='email'
                  onChange={handleEmailChange}
                  placeholder='Email'
                  type='email'
                  required
                  value={userSignIn.email}
                />
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input
                  autoComplete="off"
                  className='login__input form__input'
                  name='password'
                  onChange={handlePasswordChange}
                  placeholder='Password'
                  type='password'
                  required
                  value={userSignIn.password}
                />
              </div>
              <button
                className='login__submit form__submit button'
                type='submit'
                disabled={isSignInButtonDisabled}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <a
                className='locations__item-link'
                href="/"
                onClick={handleLinkToCityClick}
              >
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { Login };
export default connector(Login);
