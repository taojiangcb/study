
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import "./bottom-bar.scss";

const getTabs = () => {
  let tabs = ['首页', '订单', '我的'];
  console.log(...tabs);
  return tabs.map(item => {
    return (<div key={item} className="btn-item">
      <div className='table-icon'></div>
      <div className="btn-name">{item}</div>
    </div>)
  })
}

const BottomBar = props => (
  <div className='bottom-bar'>
    {getTabs()}
  </div>
)

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)