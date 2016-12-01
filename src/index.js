import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import routes from './routes';
import reducers from './reducers';
import '../styles/main.scss';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(promise, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} routes={routes} />
  </Provider>
  , document.querySelector('.react-container')
);
