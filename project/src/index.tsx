import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  RentalOffersNumber: 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalOffersNumber={Setting.RentalOffersNumber}/>
  </React.StrictMode>,
);
