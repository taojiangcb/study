
import React, { Component, Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { featch_category } from '../../reducers/action.category';
import './Category.scss'
import { InitData } from '../../../../controller/initData';

const initItemsData = (props) => {
  let [isInit, setInit] = useState(false);
  useEffect(() => {
    !isInit && props && props.featchData();
    setInit(true);
    return () => { setInit(false) };
  }, [isInit]);
}

const itemRenderes = (items) => (
  <Fragment>
    {
      items && items.map((item, i) => {
        return (
          <div key={item.code} className="category-item">
            <img className='item-icon' src={item.url} />
            <p className='item-name'>{item.name}</p>
          </div>
        )
      })
    }
  </Fragment>
)

const Category = (props) => {
  // initItemsData(props);
  InitData(props.featchData)
  let { items } = props;
  let icons = items.slice(0, 8);

  return (
    <div className="category-content">
      {itemRenderes(icons)}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    items: state.categoryReducer.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    featchData: () => {
      dispatch(featch_category());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)


