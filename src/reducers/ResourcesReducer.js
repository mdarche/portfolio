import {
  designResources,
  designThinkingResources,
  developmentResources,
  projectResources,
} from '../data/OnlineResources';

function designTools(state = designResources.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function designThinkingTools(state = designThinkingResources.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function devTools(state = developmentResources.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function projectTools(state = projectResources.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export { designTools, designThinkingTools, devTools, projectTools };
