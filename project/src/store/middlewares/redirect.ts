import type { Middleware } from 'redux';

import { ActionType } from '../action-type';
import { browserHistory } from '../../browser-history';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

/**
 * @function redirect – Redux middleware for redirect to App Route
* */
export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action) => {
    if (action.type === ActionType.RedirectToRoute) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
