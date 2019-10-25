import axios from 'axios';
import { API, getApi } from '../api/API';
import { ACTION_HOME } from './ActionConst';

let action_struct = {
  type: ""
}

const createAction = (type,...args) => {
  if (!type) return null;
  let action = Object.assign(action_struct, { type: type })
  switch (type) {
    case ACTION_HOME.GET_HOME_LIST:
  }
  return action;
}

export const HomeAction = {
  createAction:createAction,
  get_home_list: () => {
    return (dispatch) => {
      axios.get(getApi(API.GET_HOME_LIST))
        .then(res => {
          console.log(`receive ... ${res}`);
          let action = createAction(ACTION_HOME.GET_HOME_LIST);
          dispatch(action);
        })
    }
  }
}
