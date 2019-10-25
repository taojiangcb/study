import React from 'react';

import { Route } from 'react-router-dom';
import  Home  from './containers/home/Home.jsx';
import { Login } from './containers/login/Login.jsx';


export default (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
  </div>
)