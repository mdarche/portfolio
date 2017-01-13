import { MODAL_ON, MODAL_OFF } from '../actions/index';

const INITIAL_STATE = [{ toggleOn: false, image: null }];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MODAL_ON:
      return [...state, { toggleOn: true, image: action.payload }];
    case MODAL_OFF:
      return [...state, { toggleOn: false, image: null }];
    default:
      return state;
  }
}
