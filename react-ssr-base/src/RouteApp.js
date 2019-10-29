import React from 'react';
import { renderRoutes } from 'react-router-config';
import Home, { loadHomeData } from './containers/home/Home.jsx';
import { Login } from './containers/login/Login.jsx';
import Header from './components/head/Header.jsx';
import { onIsLogin } from './store/Action.Login.js';

/**
 * 
 * @param {*} props 
 */
export const AppRouters = (props) => {
  return (
    <div>
      <Header></Header>
      { renderRoutes(props.route.routes) }
    </div>
  )
}

AppRouters.loadData = (store)=> {
  return store.dispatch(onIsLogin());
}
