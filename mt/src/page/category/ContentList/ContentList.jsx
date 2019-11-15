
import './ContentList.scss'
import React, { Component, Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ListItem from './ListItem/ListItem';
import ScrollView from '../scroll-view/ScrollView';
import { featch_content } from '../../index/reducers/action.contentlist';

const initData = (props) => {
  let [isInit, setInit] = useState(false);

  useEffect(() => {
    !isInit && props && props.featchData(0);
    setInit(true);
    return () => { setInit(false) };
  })
}

const ContentList = (props) => {
  initData(props);
  let { items } = props;
  return (
    <div className="list-wrapper">
      <ScrollView onPageLoadFunc={props.featchData}>
        {
          items && items.map((item, i) => {
            return (
              <ListItem key={i} itemData={item}></ListItem>
            )
          })
        }
      </ScrollView>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.contentReducers.items
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    featchData(page) {
      dispatch(featch_content(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)