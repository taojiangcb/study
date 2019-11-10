import { normalReducer } from '../../../store/Actions';
import { ACTION } from './actions';

let defaultState = {
  items: [],
  page: 0
}

export const contentReducers = (state = defaultState, action) => {
  if (action.type === ACTION.CONTENT_LIST) {
    return normalReducer(state, action);
  }
  return state;
}