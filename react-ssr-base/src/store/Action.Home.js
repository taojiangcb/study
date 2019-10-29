import axios from 'axios';
import { API, apiInstance } from '../api/API';
import { ACTION_CONSTANTS } from './ActionConst';
import { createAction } from './ActionCreate';

export const HomeAction = {
  createAction: createAction,
  get_home_list: () => {
    return (dispatch) => {
      return apiInstance.get(API.GET_HOME_LIST)
        .then(res => {
          let action = createAction(ACTION_CONSTANTS.GET_HOME_LIST);
          action = Object.assign(action, { newsList: res.data.list });
          console.log(action);
          dispatch(action);
        })
    }
  }
}
