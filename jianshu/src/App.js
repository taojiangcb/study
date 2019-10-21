import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Heander from './common/header';
import store from './store';

import { BrowserRouter, Route } from 'react-router-dom';
import  Home  from './pages/home';
import { Detail } from './pages/detail';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Heander></Heander>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
