import { normalReducer } from '../../../store/Actions';
import { ACTION } from './actions';

let defaultState = {
  items: []
}

export const categoryReducer = (state = defaultState, action) => {
  console.log(action);
  if (action.type == ACTION.CATEGORY_LIST) {
    return normalReducer(state, action);
  }
  return state;
  // return normalReducer(state,action);
}