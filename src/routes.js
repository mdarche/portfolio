import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/Home';
import OnlineResources from './components/resources/OnlineResources';
import WebDesign from './components/work/WebDesign';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/online-resources" component={OnlineResources} />
    <Route path="/web-ux-design" component={WebDesign} />
    <Route path="/identity-design" component={WebDesign} />
    <Route path="/print-design" component={WebDesign} />
    <Route path="/web-ios-development" component={WebDesign} />
  </Route>
);
