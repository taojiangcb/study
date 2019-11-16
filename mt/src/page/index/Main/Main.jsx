
import React, { Fragment } from 'react'
import Home from './../Home/Home.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { appStore } from '../../../store/Store'
import { hot } from 'react-hot-loader'
import BottomBar from '../../../component/bottom-bar/BottomBar.jsx';
import Order from '../Order/Order.jsx';
import My from '../My/My.jsx';
import { setActivePage } from "./../../../controller/setActivePage"
let store = appStore();

export const Main = props => {
  setActivePage(props)
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/order" exact={true} component={Order} ></Route>
          <Route path="/my" exact={true} component={My} ></Route>
          <Route path="/home" exact={true} component={Home} ></Route>
          <Route path="/" exact={true} component={Home} ></Route>
        </Switch>
        <BottomBar />
      </Router>
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

let expObj;
if(__DEV__) {
  expObj = hot(module)(Content);
}
else {
  expObj = Content;
}

export const HotContent = expObj

