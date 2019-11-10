
import React, { Fragment } from 'react'
import Home from './../Home/Home.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { appStore } from '../../../store/Store'
import { hot } from 'react-hot-loader'
import BottomBar from '../../../component/BottomBar/BottomBar.jsx';

let store = appStore();
export const Main = props => {
  return (
    <Provider store={store}>
      <Fragment>
        <Home />
        <BottomBar />
      </Fragment>
    </Provider>
  )
}

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Main />
  }
}

export const HotContent = hot(module)(Content);

