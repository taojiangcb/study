
import './ListItem.scss'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { StarScore } from '../../../../../component/star-score/StarScore';

/**
*  渲染月售数量
* @param {*} data 
*/
const renderMonthNum = (data) => {
  let num = data.month_sale_num;
  // 大于999采用999+
  if (num > 999) {
    return '999+';
  }
  return num;
}

const renderMeituanFlag = (data) => {
  if (data.delivery_type) {
    return <div className="item-meituan-flag">美团专送</div>
  }
  return null;
}

const renderBarand = (data) => {
  if (data.brand_type) {
    return <div className="brand brand-pin">品牌</div>
  } else {
    return <div className="brand brand-xin">新到</div>
  }
}

/**
    * 渲染商家活动
    * @param {*} data 
    */
const renderOthers = (data) => {
  let array = data.discounts2;
  return array.map((item, index) => {
    return (
      <div key={index} className="other-info">
        <img src={item.icon_url} className="other-tag" />
        <div className="other-content">{item.info}</div>
      </div>
    )
  });
}

const ListItem = (props) => {
  let { itemData } = props;
  return (
    <div className="item-content scale-1px" key={itemData.id}>
      <img className="item-img" src={itemData.pic_url} />
      {renderBarand(itemData)}
      <div className="item-info-content">
        <p className="item-title">{itemData.name}</p>
        <div className="item-desc clearfix">
          <div className="item-score">{StarScore(itemData.wm_poi_score)}</div>
          <div className="item-count">月售{itemData.month_sale_num}</div>
          <div className="item-distance">&nbsp;{itemData.distance}</div>
          <div className="item-time">{itemData.mt_delivery_time}&nbsp;|</div>
        </div>
        <div className="item-price clearfix">
          <div className="item-pre-price">{itemData.min_price_tip}</div>
          {renderMeituanFlag(itemData)}
        </div>
        <div className="item-others">
          {renderOthers(itemData)}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)


