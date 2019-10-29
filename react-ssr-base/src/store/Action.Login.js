import { ACTION_CONSTANTS } from './ActionConst';
import { createAction } from './ActionCreate';
import axios from 'axios';
import { apiInstance, API } from '../api/API';

export const onLogin = () => {
  return (dispatch, state) => {
    return apiInstance.post(API.LOGIN, { user: 'tao' })
      .then(res => {
        let act = createAction(ACTION_CONSTANTS.CHANGE_LOGIN_STATE)
        act.loginState = res.data.success;
        dispatch(act)
      })
      .catch(err => {
        let act = createAction(ACTION_CONSTANTS.CHANGE_LOGIN_ERROR)
        act.loginState = res.data.success;
        act.code = res.data.code;
        dispatch(act)
      })
  }
}

export const onLogOut = () => {
  return (dispatch, state) => {
    return apiInstance.post(API.LOGOUT, { user: 'tao' })
      .then(res => {
        let act = createAction(ACTION_CONSTANTS.CHANGE_LOGIN_STATE)
        act.loginState = res.data.success;
        dispatch(act);
      })
      .catch(err => {
        let act = createAction(ACTION_CONSTANTS.CHANGE_LOGIN_ERROR)
        act.loginState = res.data.success;
        act.code = res.data.code;
        dispatch(act);
      })
  }
}