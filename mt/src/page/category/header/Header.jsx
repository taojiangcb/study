import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { changeCateType, featchFilterData } from '../reducer/action.reducerTypes';
import { CATE_TAB_KEYS } from '../../../constan';
import { InitData } from '../../../controller/initData';
import './Header.scss';


function renderCategoryTypeItems(items, props) {
  let [childAct, setAct] = actState;

  let onClickHandler = (item, child) => {
    let chr = child.name + child.quantity;
    let group = item.name;
    setAct({ group: group, chr: chr })
  }

  return items && items.map(item => {
    let childrens = item.sub_category_list;
    return (
      <li key={item.code}>
        <p className="type-item-title">{item.name}({item.quantity})</p>
        <div className="clearfix">
          {
            childrens && childrens.map(child => {
              let actk = child.name + child.quantity;
              var clsname = 'child-item-title ' + (childAct.chr === actk ? 'active' : '');
              return (
                <div onClick={e => { onClickHandler(item, child) }} className="child-item-box" key={child.code}>
                  <p
                    className={clsname}>
                    {child.name}
                    <span className="child-item-count">{child.quantity}</span>
                  </p>
                </div>
              )
            })
          }
        </div>
      </li>
    )
  })
}

function renderCategoryOrderItems(items, props) {
  let [orderAct, setAct] = orderActState;
  return items && items.map(child => {
    return (
      <li onClick={e => { setAct(child.name) }} key={child.code} className="scale-1px category-order-item">
        <img src={orderAct == child.name ? child.icon_url_click : child.icon_url} />
        <span className="order-child-name">{child.name}</span>
      </li>
    )
  })
}

function renderCategoryFilter(items, props) {
  let [chrooseData, setChroose] = filterChrState;
  let chroose = chrooseData.items || [];
  let putOn = (child, item) => {
    let chr = [];
    if (item.support_multi_choice > 0 && chrooseData.group === item.group_title) {
      chr = [child.name].concat(chroose);
    }
    else {
      chr = [child.name];
    }
    setChroose({ group: item.group_title, items: chr });
  }

  return items && items.map(item => {
    let childrens = item.items;
    return (
      <li key={item.group_title}>
        <p className="type-item-title">{item.group_title}</p>
        <div className="clearfix">
          {
            childrens && childrens.map(child => {
              let actk = child.name;
              var clsname = 'child-item-title ' + (chroose.indexOf(child.name) > -1 ? 'active' : '');
              return (
                <div onClick={e => { putOn(child, item) }} className="child-item-box" key={child.code}>
                  <p
                    className={clsname}>
                    {child.name}
                  </p>
                </div>
              )
            })
          }
        </div>
      </li>
    )
  })
}

function renderChroose(props) {
  let { activeKey, filterData } = props
  let { category_filter_list, activity_filter_list, sort_type_list } = filterData;
  let dataItems;
  if (activeKey === CATE_TAB_KEYS.type) {
    dataItems = category_filter_list;
    return renderCategoryTypeItems(dataItems, props);
  }
  else if (activeKey === CATE_TAB_KEYS.order) {
    dataItems = sort_type_list;
    return renderCategoryOrderItems(dataItems, props);
  }
  else {
    dataItems = activity_filter_list;
    return renderCategoryFilter(dataItems, props);
  }
}

function chrooseCategory(props) {
  let { activeKey } = props
  let cls = `category-chroose ${activeKey ? activeKey : 'none'}`;
  return (
    activeKey
      ? <ul className={cls}> {renderChroose(props)} </ul>
      : ''
  )
}

const renderHeaders = props => {
  let { tabs } = props;
  let tabItems = [];
  let keys = Object.keys(tabs);
  for (let k of keys) {
    let v = tabs[k];
    let cls = `category-${k} 
        category-item ${props.activeKey === k
        ? 'category-item-active'
        : 'category-item-none'}`;
    let divItem =
      <div
        key={k}
        onClick={e => { props.itmClick(k === props.activeKey ? "" : k) }}
        className={cls}>
        {getHeaderTitle(v)}
        {k !== CATE_TAB_KEYS.filter ? <i /> : <address />}
      </div>
    tabItems.push(divItem);
  }
  return tabItems;
}

function getHeaderTitle(tab) {
  let title = ''
  if (tab.key === CATE_TAB_KEYS.type) {
    title = actState[0].group;
  }
  else if (tab.key === CATE_TAB_KEYS.filter) {
    title = filterChrState[0].group;
    if (title.length > 4) {
      return title.substr(0, 4);
    }
  }
  else if (tab.key === CATE_TAB_KEYS.order) {
    title = orderActState[0];
  }
  return title;
}

let actState;
let orderActState;
let filterChrState;
const Header = props => {
  InitData(props.featchData);
  actState = useState({ group: '全部分类', chr: '' });
  orderActState = useState('综合排序');
  filterChrState = useState({ group: '筛选', items: [] });
  let { activeKey } = props
  return (
    <Fragment>
      <div className="category-header-wrapper">
        <div className='scale-1px category-header'>
          {renderHeaders(props)}
        </div>
      </div>
      {
        activeKey &&
        <div className="category-layer" id='type-layer' >
          <div className="category-scroll" onClick={e => { layerClick(e, props) }}>
            <div className='category-list-content' >
              {chrooseCategory(props)}
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

function layerClick(event, props) {
  if (event.currentTarget == event.target) {
    props.itmClick('')
  }
}

const mapStateToProps = state => {
  return {
    tabs: state.categoryTypes.tabs,
    activeKey: state.categoryTypes.activeKey,
    filterData: state.categoryTypes.filterData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    itmClick(k) {
      dispatch(changeCateType(k))
    },
    featchData() {
      dispatch(featchFilterData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);