import { ReceiveAction } from "../../../store/Actions"

let defaultState = {
  num: 0
}

export const tabReducer = (state = defaultState, action) => {
  let newState = ReceiveAction(state, action);
  let resultState = newState ? newState : { num: state.num };
  return resultState;
}

