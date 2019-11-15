
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Header from './Header/Header.jsx';
import Category from './Category/Category.jsx';
import ContentList from './ContentList/ContentList.jsx';


const Home = (props) => {
  return (
    <Fragment>
      <Header/>
      <Category/>
      <ContentList/>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


