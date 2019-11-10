
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './Reducer';
import thunk from 'redux-thunk';

export const appStore = () => {
  let composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  let store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ))

  // if (module.hot) {
  //   module.hot.accept('./../page/index/reducers/reducer.tab.js', () => {
  //     const nextRootReducer = require('./Reducer').default;
  //     store.prelaceReducer(nextRootReducer);
  //   })
  // }

  return store;
}

