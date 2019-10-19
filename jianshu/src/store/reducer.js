
import { combineReducers } from 'redux-immutable';

import {reducer as headerReducer} from '../common/header/store'

/**整合拆分的reducer */
const reducer = combineReducers({
        header: headerReducer
})

export default reducer;