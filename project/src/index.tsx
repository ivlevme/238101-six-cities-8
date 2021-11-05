import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { ThunkAppDispatch } from './types/action';

import { App } from './components';
import { requireAuthorization } from './store/action';
import { rootReducer } from './store/root-reducer';
import { redirect } from './store/middlewares/redirect';

import { createAPI } from './api';
import {
  checkAuthAction,
  fetchOffersAction
} from './store/api-actions';

import { AuthorizationStatus } from './consts';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
