import { ACTION_CONSTANTS } from "./ActionConst";

const defaultState = {
  isLogin: false,
  loginError:0
}

export default (state = defaultState, action) => {
  let newState = null;
  switch(action.type) {
    case ACTION_CONSTANTS.CHANGE_LOGIN_STATE:
      newState = Object.assign(defaultStatus,{isLogin:action.loginState});
      return newState;
      break;
    case ACTION_CONSTANTS.CHANGE_LOGIN_ERROR:
      newState = Object.assign(defaultStatus,{isLogin:action.loginState,loginError:action.code});
      return newState;
      break;
  }
  return state;
}