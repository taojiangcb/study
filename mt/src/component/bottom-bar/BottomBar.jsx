import "./bottom-bar.scss";

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { changeTab } from '../../page/index/reducers/action.tab';
import { withRouter } from 'react-router-dom'

const getTabs = (props) => {
  let { tabs, activeKey } = props;
  return tabs.map(item => {
    return (
      <div key={item.key}
        className={item.key + " btn-item"}
        onClick={e => { props.activeHandler(item.key, props) }}
      >
        <div className={item.key === activeKey ? 'act-tab-icon' : 'tab-icon'}></div>
        <div className="btn-name">{item.name}</div>
      </div>)
  })
}

const BottomBar = props => {
  let { tabs, activeKey } = props;
  return (
    <div className='bottom-bar'>
      {getTabs(props)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    activeHandler: (key, props) => {
      props.history.push(`/${key}`);
      dispatch(changeTab({ activeKey: key }));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BottomBar))