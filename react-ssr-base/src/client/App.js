
import React from 'react';
import {hydrate,render} from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import  Routers  from "../Routers"

import { ssrStore } from '../store/Store';
import { Provider } from 'react-redux'
import { Header } from '../components/head/Header.jsx';

const App = () => (
  <Provider store={ssrStore()}>
    <BrowserRouter>
      <Header></Header>
      {Routers}
    </BrowserRouter>
  </Provider>
)

render(<App />, document.getElementById("root"));