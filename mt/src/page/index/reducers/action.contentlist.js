

import { axiosInstance } from '../../../api/API';
import { ACTION } from './actions';

export function contentInitAct(params) {
  return {
    type: ACTION.CONTENT_LIST,
    data: params,
    receiver(state, action) {
      if (action.type === ACTION.CONTENT_LIST) {
        if (action.data.page === 0) {
          return {
            ...state,
            items: action.data.listItems,
            page: action.data.page,
          }
        }
        else {
          let items = state.items.concat(action.data.listItems);
          return {
            items: items,
            page: action.data.page
          }
        }
      }
    }
  }
}

export const featch_content = (page) => {
  return dispatch => {
    axiosInstance.get('homelist.json')
      .then(res => {
        dispatch(contentInitAct({
          page: page,
          listItems: res.data.data.poilist
        }));
      })
  }
}