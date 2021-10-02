import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const countRentalOffers = 312;

ReactDOM.render(
  <React.StrictMode>
    <App countRentalOffers={countRentalOffers} />
  </React.StrictMode>,
  document.getElementById('root'),
);
