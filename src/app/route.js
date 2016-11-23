import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Home from './components/Home';

const route = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
);

export default route;
