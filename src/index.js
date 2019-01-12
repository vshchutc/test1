import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

const store = configureStore();

render(
  <Provider store={store}>
    <Router routes={routes}/>
  </Provider>,
  document.getElementById('app')
);