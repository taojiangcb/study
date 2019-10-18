import { ACTION } from "./action";

const defaultState = {
    inpFocues: false,
}

export default (state = defaultState, action) => {
    if (action.type === ACTION.CHANGE_FOCUS) {
        let newStates = JSON.parse(JSON.stringify(state));
        newStates.inpFocues = action.value;
        return newStates;
    }
    return state;
};