
import React, { Component, PureComponent } from 'react';
import { ListItem, ListWrapper } from '../style';
import { connect } from 'react-redux';
class List extends PureComponent {
  constructor(props) { super(props); } ß
  render() {
    let {list} = this.props;
    return (
      <ListWrapper>
        {
          list.map(item=>{
            return (
              <ListItem key={item.get('id')}>
              <div className="list-info">
                <h3>{item.get('title')}</h3>
                <p>{item.get('desc')}</p>
                <div className="meta">
                  <span className="jsd-meta">
                    <i className="iconfont icon31"></i>
                    <span>{item.get('jsd')}</span>
                  </span>
                  <span>
                    <span>{item.get('author')}</span>
                  </span>
                  <span>
                    <i className="iconfont iconpinglun1"></i>
                    <span>{item.get('msgcount')}</span>
                  </span>
                  <span>
                    <i className="iconfont iconshoucang3"></i>
                    <span>{item.get('favorites')}</span>
                  </span>
                </div>
              </div>
              <div className="img-content">
                <img src="https://upload-images.jianshu.io/upload_images/11308958-ad32a3be98fabc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" width="100%" />
              </div>
            </ListItem>
            )
          })
        }
      </ListWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list:state.getIn(['home','articleList'])
    // inpFocues: state.getIn(['header', 'inpFocues']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onInputFocusHandler: function () {
    //     dispatch(getAction(ACTION.CHANGE_FOCUS, true));
    // },
    // onInputOutFoucsHandler: function () {
    //     dispatch(getAction(ACTION.CHANGE_FOCUS, false));
    // }
  }
}

export default connect(mapStateToProps, null)(List);
