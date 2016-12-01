import { FETCH_CATEGORY } from '../actions/index';

const INITIAL_STATE = { workpage: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return { ...state, workpage: action.payload.data };
    default:
      return state;
  }
}
