import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/Home';
import OnlineResources from './components/resources/OnlineResources';
import WorkOverview from './components/work/WorkOverview';
import NotFound from './components/404/NotFound';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/online-resources" component={OnlineResources} />
    <Route path="/work/:path" component={WorkOverview} />
    <Route path ="*" component={NotFound} />
  </Route>
);
