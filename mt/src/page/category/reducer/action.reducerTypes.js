import { ACTION } from "../../index/reducers/actions";
import { axiosInstance } from '../../../api/API';

export function changeCateType(k) {
  return {
    type: ACTION.CHANGE_CATE_TYPE,
    data: k,
    receiver: (preveState, action) => {
      return {
        ...preveState,
        activeKey: action.data
      }
    }
  }
}

export function actionGetFilterData(params) {
  return {
    type: ACTION.GET_FILTER_DATA,
    data: params,
    receiver: (prevState, action) => {
      return {
        ...prevState,
        filterData: action.data
      }
    }
  }
}

export function featchFilterData() {
  return async dispatch => {
    let resp = await axiosInstance.get('/filter.json');
    dispatch(actionGetFilterData(resp.data.data))
  }
}