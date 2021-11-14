import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../action-type';
import {
  AuthorizationStatus,
  LoadingStatus
} from '../../consts';

/**
 * @function changeUserLoadingStatusAction - Action creator for change loading status user
 * @param status - Loading status
 * */
export const changeUserLoadingStatusAction = createAction(
  ActionType.ChangeUserLoadingStatus,
  (status: LoadingStatus) => ({
    payload: status,
  }),
);

/**
 * @function changeUserInfoAction - Action creator for change user info
 * @param user - Current Sorting type
 * */
export const changeUserInfoAction = createAction(
  ActionType.ChangeUserInfo,
  (email: string) => ({
    payload: email,
  }),
);

/**
 * @function requireAuthorization - Action creator for define auth status
 * @param authStatus - user`s auth status
 * */
export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

/**
 * @function requireLogout - Action creator for logout
 * */
export const requireLogout = createAction(
  ActionType.RequireLogout,
);
