import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>


    <Auth0Provider
      domain="reactauthparesh.us.auth0.com"
      clientId="9hst5KiVrPD4eJ2J271cSW96q0wqun2j"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>,

  </BrowserRouter>
);

