import "./bottom-bar.scss";

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { changeTab } from '../../page/index/reducers/action.tab';

const getTabs = (props) => {
  let { tabs, activeKey } = props;
  return tabs.map(item => {
    return (
      <div key={item.key}
        className={item.key + " btn-item"}
        onClick={e => { props.activeHandler(item.key) }}
      >
        <div className={item.key === activeKey ? 'act-tab-icon' : 'tab-icon'}></div>
        <div className="btn-name">{item.name}</div>
      </div>)
  })
}

const BottomBar = props => (
  <div className='bottom-bar'>
    {getTabs(props)}
  </div>
)

const mapStateToProps = state => {
  return {
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activeHandler: (key) => {
      console.log('click....');
      dispatch(changeTab({ activeKey: key }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)