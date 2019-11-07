import React from 'react';
import ReactDOM from "react-dom";
import { Main } from './Main/Main.jsx'
import { appStore } from '../../store/Store'
import { Provider } from 'react-redux'

let store = appStore();
ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById("root"));