
import { TAB_KEYS, CATE_TAB_KEYS } from '../../../constan';
import { ACTION } from '../../index/reducers/actions';
import { normalReducer } from '../../../store/Actions';

let tabs = {};
tabs[CATE_TAB_KEYS.type] = {
  key: CATE_TAB_KEYS.type,
  text: "全部分类",
  obj: {}
}
tabs[CATE_TAB_KEYS.order] = {
  key: CATE_TAB_KEYS.order,
  text: "综合排序",
  obj: {}
}
tabs[CATE_TAB_KEYS.filter] = {
  key: CATE_TAB_KEYS.filter,
  text: "筛选",
  obj: {}
}

let defaultState = {
  tabs: tabs,
  activeKey: '',//CATE_TAB_KEYS.type,
  filterData: {},
  closePanel: true
}

export const categoryTypes = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION.CHANGE_CATE_TYPE:
    case ACTION.GET_FILTER_DATA:
      return normalReducer(state, action);
    default:
      return state
  }
}