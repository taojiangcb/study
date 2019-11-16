
import React, { Component, Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { featch_category } from '../../reducers/action.category';
import './Category.scss'
import { InitData } from '../../../../controller/initData';
import { withRouter } from 'react-router-dom'

const initItemsData = (props) => {
  let [isInit, setInit] = useState(false);
  useEffect(() => {
    !isInit && props && props.featchData();
    setInit(true);
    return () => { setInit(false) };
  }, [isInit]);
}


const categoryClick = (e, props) => {
  //props.history.push(`/category.html`);
  window.location.href = "/category.html";
}

const itemRenderes = (items, props) => (
  <Fragment>
    {
      items && items.map((item, i) => {
        return (
          <div onClick={e => { categoryClick(e, props) }} key={item.code} className="category-item">
            <img className='item-icon' src={item.url} />
            <p className='item-name'>{item.name}</p>
          </div>
        )
      })
    }
  </Fragment>
)

const Category = (props) => {
  InitData(props.featchData)
  let { items } = props;
  let icons = items.slice(0, 8);

  return (
    <div className="category-content">
      {itemRenderes(icons, props)}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category))


