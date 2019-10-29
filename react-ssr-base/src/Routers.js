import React from 'react';
import { renderRoutes } from 'react-router-config';
import Home, { loadHomeData } from './containers/home/Home.jsx';
import { Login } from './containers/login/Login.jsx';
import Header from './components/head/Header.jsx';


export const AppRouters = (props) => {
  console.log(props);
  return (
    <div>
      <Header></Header>
      { renderRoutes(props.route.routes) }
    </div>
  )
}

export const Routers = [
  {
    path: "/",
    component: AppRouters,
    key: "home",
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
      }
    ]
  }
]


// export default (
//   <div>
//     <Route path="/" exact component={Home} />
//     <Route path="/login" exact component={Login} />
//   </div>
// )