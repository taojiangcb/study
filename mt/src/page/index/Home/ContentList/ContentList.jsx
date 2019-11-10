
import './ContentList.scss'
import React, { Component, Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { contentInitAct, featch_content } from '../../reducers/action.contentlist';
import ListItem from './ListItem/ListItem';
import { Loading } from '../../../../component/loading/Loading';

const initData = (props) => {
  let [isInit, setInit] = useState(false);
  let [page, setPage] = useState(0);
  let [sent, setSent] = useState(false);

  useEffect(() => {
    !isInit && props && props.featchData(page);
    setInit(true);
    return () => { setInit(false) };
  })

  useEffect(() => {
    function onPageLoader() {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.body.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      let proLoadDis = 30;
      if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
        console.log(`on page scroll load.....`);
        if (page < 3) {
          setPage(page + 1)
          props.featchData(page);
        }
        else {
          setSent(true);
        }
      }
    }
    window.addEventListener('scroll', onPageLoader)
    return () => {
      window.removeEventListener('scroll', onPageLoader)
    }
  }, [page])

  return [page, sent]
}

const ContentList = (props) => {
  let [page, sent] = initData(props);
  let { items } = props;
  return (
    <div className="list">
      <div className="list-content">
        <span className="list-line"></span>
        <span className="list-title">附近商家</span>
        <span className="list-line"></span>
      </div>
      <div>
        {
          items && items.map(item => {
            return (
              <ListItem key={item.id + page} itemData={item}></ListItem>
            )
          })
        }
      </div>
      <Loading completed={sent}></Loading>
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