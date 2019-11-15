import { combineReducers } from "redux";
import {tabReducer} from '../page/index/reducers/reducer.tab'
import { categoryReducer } from '../page/index/reducers/reducer.category';
import { orderReducer } from '../page/index/reducers/reducer.order';
import { categoryTypes } from '../page/category/reducer/reducer.category';
import { contentReducers } from '../page/index/reducers/reducer.contentlist';


const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentReducers,
  orderReducer,
  categoryTypes
})

export default reducers;