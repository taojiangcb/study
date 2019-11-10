// import { ReceiveAction } from "../../../store/Actions"
import { TAB_KEYS } from '../../../constan'
import { ACTION } from './actions';
import { normalReducer } from '../../../store/Actions';
let defaultState = {
  tabs: [
    { name: '首页', key: TAB_KEYS.home },
    { name: '订单', key: TAB_KEYS.order },
    { name: '我的', key: TAB_KEYS.my },
  ],
  activeKey: TAB_KEYS.home,
}

export const tabReducer = (state = defaultState, action) => {
  if(action.type === ACTION.CHANGE_TAB) {
    return normalReducer(state,action);
  }
  return state;
}

