import { combineReducers } from 'redux';
import categories from './PortfolioReducer';
import tools from './ToolsReducer';
import webDesign from './DesignReducer';
import {
  designTools,
  designThinkingTools,
  devTools,
  projectTools } from './ResourcesReducer';

const rootReducer = combineReducers({
  categories,
  tools,
  webDesign,
  designTools,
  designThinkingTools,
  devTools,
  projectTools
});

export default rootReducer;
