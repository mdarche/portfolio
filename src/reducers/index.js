import { combineReducers } from 'redux';
import categories from './PortfolioReducer';
import tools from './ToolsReducer';
import {
  designTools,
  designThinkingTools,
  devTools,
  projectTools } from './ResourcesReducer';

const rootReducer = combineReducers({
  categories,
  tools,
  designTools,
  designThinkingTools,
  devTools,
  projectTools
});

export default rootReducer;
