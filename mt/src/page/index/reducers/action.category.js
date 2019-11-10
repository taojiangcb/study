import { axiosInstance } from '../../../api/API';
import { ACTION } from './actions';


export function categoryAction(params) {
  return {
    type: ACTION.CATEGORY_LIST,
    data: params,
    receiver: (state, action) => {
      return {
        ...state,
        items: action.data,
      }
    }
  }
}

export const featch_category = () => {
  return (dispatch, getState) => {
    axiosInstance.get('head.json')
      .then(res => {
        let act = categoryAction(res.data.data.primary_filter);
        dispatch(act);
      })
  }
}