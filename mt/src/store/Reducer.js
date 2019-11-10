import { combineReducers } from "redux";
import {tabReducer} from '../page/index/reducers/reducer.tab'
import { categoryReducer } from '../page/index/reducers/reducer.category';
import { contentReducers } from '../page/index/reducers/reducer.contentlist';

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentReducers
})

export default reducers;