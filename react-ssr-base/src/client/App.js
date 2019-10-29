
import React from 'react';
import { Route } from 'react-router-dom';
import { hydrate, render } from 'react-dom';
import { renderRoutes } from 'react-router-config';

import { BrowserRouter } from 'react-router-dom';
import { Routers } from "../Routers"

import { clientStore } from '../store/Store';
import { Provider } from 'react-redux'
import { Header } from '../components/head/Header.jsx';

const App = () => (
  <Provider store={clientStore()}>
    <BrowserRouter>
      {renderRoutes(Routers)}
    </BrowserRouter>
  </Provider>
)

render(<App />, document.getElementById("root"));