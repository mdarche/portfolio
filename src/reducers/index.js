import { combineReducers } from 'redux';
import categories from './PortfolioReducer';
import tools from './ToolsReducer';

const rootReducer = combineReducers({
  categories,
  tools
});

export default rootReducer;
