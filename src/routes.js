import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/Home';
import OnlineResources from './components/OnlineResources';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/online-resources" component={OnlineResources} />
  </Route>
);
