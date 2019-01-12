import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EventPage from './components/events/eventPage';
import SuccessPage from './components/success/successPage';

export default (
  <Route path="/" component={App}>
    <Route path="/wellDone" component={SuccessPage} />
  </Route>
);