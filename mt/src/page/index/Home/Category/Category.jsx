
import React, { Component, Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { featch_category } from '../../reducers/action.category';
import './Category.scss'

const initItemsData = (props) => {
  let [isInit, setInit] = useState(false);
  useEffect(() => {
    !isInit && props && props.featchData();
    setInit(true);
    return () => { setInit(false) };
  })
}

const itemRenderes = (items) => (
  <Fragment>
    {
      items && items.map(item => {
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
  initItemsData(props);
  let { items } = props;
  items = items.splice(0, 8);
  return (
    <div className="category-content">
      {itemRenderes(items)}
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


