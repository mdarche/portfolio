import { projectCategories } from '../data/ProjectCategories';

export default function categories(state = projectCategories.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}
