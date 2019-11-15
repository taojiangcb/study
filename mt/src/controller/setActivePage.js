import { appStore } from "../store/Store"
import { changeTab } from '../page/index/reducers/action.tab';

/**
 * 直接二级路由是，进行修改bottomBar的激活状态
 * @param {*} props 
 */
export const setActivePage = (props) => {
  let store = appStore();
  let curState = store.getState();
  console.log(curState);
  let path = window.location.pathname.slice(1);
  let activeKey = curState.tabReducer.activeKey;
  if (path !== activeKey) {
    store.dispatch(changeTab({ activeKey: path }))
  }
}