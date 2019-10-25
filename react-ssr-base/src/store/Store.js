import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducer';
import thunk from 'redux-thunk';


let window = window || {};

// 是否启用调试工具
const composeEnhancers =
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用中间件
export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export const ssrStore = () => ( 
    createStore(reducer,composeEnhancers(
        applyMiddleware(thunk)
    )) 
)

