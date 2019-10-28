
import React from 'react';
import { Route } from 'react-router-dom';
import {hydrate,render} from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import  {Routers}  from "../Routers"

import { clientStore } from '../store/Store';
import { Provider } from 'react-redux'
import { Header } from '../components/head/Header.jsx';

const App = () => (
  <Provider store={clientStore()}>
    <BrowserRouter>
      <Header></Header>
      {
        Routers.map(route=>{
          return <Route {...route}/>
        })
      }
    </BrowserRouter>
  </Provider>
)

render(<App />, document.getElementById("root"));