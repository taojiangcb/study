import { axiosInstance } from '../../../api/API';
import { ACTION } from './actions';

export const orderDataList = (params) => {
  return {
    type: ACTION.OREDER_LIST,
    data: params,
    receiver: (state, action) => {
      if (action.data.page === 0) {
        return {
          ...state,
          items: action.data.items
        }
      }
      else {
        return {
          ...state,
          page:action.data.page,
          items: state.items.concat(action.data.items)
        }
      }
    }
  }
}

export const featchData = page => {
  return dispatch => {
    axiosInstance.get("orders.json")
      .then(resp => {
        let data = {
          items: resp.data.data.digestlist,
          page: page
        }
        dispatch(orderDataList(data));
      })
  }
}