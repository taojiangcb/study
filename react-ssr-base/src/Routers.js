
import Home, { loadHomeData } from './containers/home/Home.jsx';
import { Login } from './containers/login/Login.jsx';

export const Routers = [
  {
    path: '/',
    component: Home,
    exact:true,
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


// export default (
//   <div>
//     <Route path="/" exact component={Home} />
//     <Route path="/login" exact component={Login} />
//   </div>
// )