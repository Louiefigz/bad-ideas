import React from 'react';
import Amplify from "aws-amplify";
import config from "./config";

import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './app/index.css';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/root';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
const store = createStore(combineReducers, applyMiddleware(thunk));




Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));
registerServiceWorker();
