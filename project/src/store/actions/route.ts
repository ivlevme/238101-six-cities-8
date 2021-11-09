import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../action-type';
import { AppRoute } from '../../routes';

/**
 * @function redirectToRoute - Action creator for redirect to another page
 * * @param url - path url to redirect
 * */
export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
