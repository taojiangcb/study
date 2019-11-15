
import React, { Component, Fragment, useState } from 'react'
import { connect } from 'react-redux';
import './Order.scss'
import ScrollView from '../../../component/scroll-view/ScrollView';
import { featchData } from '../reducers/action.order';
import { InitData } from '../../../controller/initData';
import ListItem from './ListItem/ListItem';


const renderList = (props) => {
  let list = props.items;
  return list.map((item,i)=> {
    return <ListItem itemData={item} key={i}></ListItem>
  })
}

const Order = (props) => {
  InitData(props.featchData.bind(this, 0));
  return (
    <div className="order-page">
      <div className="header">订单</div>
      <ScrollView onPageLoadFunc={props.featchData}>
        {renderList(props)}
      </ScrollView>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.orderReducer.items,
    page:state.orderReducer.page,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    featchData: page => {
      console.log('load order ....');
      dispatch(featchData(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)


