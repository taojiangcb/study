import React from 'react';
import ReactDOM from "react-dom";
import { Main, HotContent } from './Main/Main.jsx'
import { appStore } from '../../store/Store'
import { Provider } from 'react-redux'




ReactDOM.render(<HotContent />, document.getElementById("root"));