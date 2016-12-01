import { combineReducers } from 'redux';
import categories from './PortfolioReducer';
import tools from './ToolsReducer';
import WorkReducer from './WorkReducer';
import {
  designTools,
  designThinkingTools,
  devTools,
  projectTools } from './ResourcesReducer';

const rootReducer = combineReducers({
  work: WorkReducer,
  categories,
  tools,
  designTools,
  designThinkingTools,
  devTools,
  projectTools,
});

export default rootReducer;
