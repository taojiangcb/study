import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Heander from './common/header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Heander></Heander>
    </Provider>
  );
}

export default App;
