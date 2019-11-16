

import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
import { appStore } from '../../store/Store';
import Header from './header/Header';
import NavHeader from '../../component/navheader/NavHeader';
import "./Main.scss";
import ContentList from './ContentList/ContentList';

let store = appStore();
export const Main = props => {
  return (
    <Provider store={store}>
      <div className="category-page-warpper ">
        <NavHeader />
        <Header />
        <div className="category-content-list">
          <ContentList />
        </div>
      </div>
    </Provider>
  )
}

class Content extends React.Component {
  constructor(props) { super(props); }
  render() { return <Main /> }
}
let expObj;
if(__DEV__) {
  expObj = hot(module)(Content);
}
else {
  expObj = Content;
}

export const HotContent = expObj;
