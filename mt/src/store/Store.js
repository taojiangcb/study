
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducer';
import thunk from 'redux-thunk';

export const appStore = () => {
  let composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ))
}

