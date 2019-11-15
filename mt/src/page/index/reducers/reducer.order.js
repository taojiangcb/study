import { ACTION } from "./actions"
import { normalReducer } from '../../../store/Actions';

let defaultState = {
  items: [],
  page:0
}

export const orderReducer = (state = defaultState, action) => {
  if (action.type === ACTION.OREDER_LIST) {
    return normalReducer(state, action);
  }
  return state
}