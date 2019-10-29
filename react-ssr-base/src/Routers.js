import React from 'react';
import { renderRoutes } from 'react-router-config';
import Home, { loadHomeData } from './containers/home/Home.jsx';
import { Login } from './containers/login/Login.jsx';
import Header from './components/head/Header.jsx';
import { onIsLogin } from './store/Action.Login.js';

import { AppRouters } from './RouteApp';
import { NotFund } from './containers/notfund/NotFund'

export const Routers = [
  {
    path: "/",
    component: AppRouters,
    key: "home",
    loadData: AppRouters.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: loadHomeData,
        key: "home"
      },
      {
        path: "/login",
        exact: true,
        component: Login,
        key: "login"
      },
      {
        component:NotFund,
      }
    ]
  },
]


// export default (
//   <div>
//     <Route path="/" exact component={Home} />
//     <Route path="/login" exact component={Login} />
//   </div>
// )