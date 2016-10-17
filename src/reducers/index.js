import { combineReducers } from 'redux';
import categories from './PortfolioReducer';

const rootReducer = combineReducers({
  categories
});

export default rootReducer;
