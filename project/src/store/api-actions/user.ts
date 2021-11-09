import { toast } from 'react-toastify';

import type { AuthData } from '../../types/auth-data';
import type { ThunkActionResult } from '../../types/action';
import type { Token } from '../../services/token';

import { APIRoute } from '../../api/const';
import {
  AuthMessage,
  AuthorizationStatus
} from '../../consts';
import { AppRoute } from '../../routes';
import {
  changeUserInfoAction,
  clearOffersFavoriteStatusAction,
  redirectToRoute,
  requireAuthorization,
  requireLogout
} from '../actions';
import { fetchOffersAction } from './index';
import {
  dropToken,
  saveToken
} from '../../services';

/**
 * @function checkAuthAction – Redux Thunk Action for check user`s auth status when app start up
 */
export const checkAuthAction =
 (): ThunkActionResult => async (
   dispatch,
   _getState,
   api,
 ) => {
   try {
     const {
       data: {
         email: userEmail,
       },
     } = await api.get(APIRoute.Login);

     dispatch(requireAuthorization(AuthorizationStatus.Auth));
     dispatch(changeUserInfoAction(userEmail));
   }
   catch {
     toast.info(AuthMessage.Reminder);
   }
 };

/**
 * @function loginAction – Redux Thunk Action for login user
 */
export const loginAction =
({
  email,
  password ,
}: AuthData): ThunkActionResult => async (
  dispatch,
  _getState,
  api,
) => {
  try {
    const {
      data: {
        email: userEmail,
        token,
      },
    } = await api.post<{ token: Token, email: string }>(
      APIRoute.Login, {
        email,
        password,
      },
    );

    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(changeUserInfoAction(userEmail));
    dispatch(fetchOffersAction());
    dispatch(redirectToRoute(AppRoute.Main));
  } catch {
    toast.info(AuthMessage.Fail);
  }
};

/**
 *
 * @function logoutAction – Redux Thunk Action for logout user
 */
export const logoutAction =
 (): ThunkActionResult => async (
   dispatch,
   _getState,
   api,
 ) => {
   api.delete(APIRoute.Logout);
   dropToken();

   dispatch(clearOffersFavoriteStatusAction());
   dispatch(requireLogout());
 };
