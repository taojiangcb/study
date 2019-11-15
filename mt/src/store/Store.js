
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let cliStore = null;

export const appStore = () => {
  if (cliStore) return cliStore;
  let composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  cliStore = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk,logger)
  ))

  // if (module.hot) {
  //   module.hot.accept('./../page/index/reducers/reducer.tab.js', () => {
  //     const nextRootReducer = require('./Reducer').default;
  //     store.prelaceReducer(nextRootReducer);
  //   })
  // }
  return cliStore;
}

