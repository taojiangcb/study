import { combineReducers } from 'redux';
import HomeReducer from './Reducer.Home.js';
import LoginReducer from './Reducer.Login.js';

const reducer = combineReducers({
  Home: HomeReducer,
  Login: LoginReducer,
})

export default reducer;
