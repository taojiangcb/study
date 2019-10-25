import { combineReducers } from 'redux-immutable';

import HomeReducer from './Reducer.Home.js';

const reducer = combineReducers({
  Home: HomeReducer
})

export default reducer;
