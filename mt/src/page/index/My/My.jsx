import React from 'react'
import { connect } from 'react-redux'
import './My.scss'

const Avatar = props => {
  return (
    <div className="avatar">
      <img src='http://i.waimai.meituan.com/static/img/default-avatar.png' />
      <p>TAOC<span dangerouslySetInnerHTML={{ __html: " >" }}></span></p>
    </div>
  )
}

const My = props => {
  return (
    <div className="page-my">
      <img className="banner-img" src="./images/header.c2a81a2250ded5e19a7681ff525eb33d.png"></img>
      <Avatar />
      <div className="my-content">
        <ul className="my-address">
          <li className="my-item">
            <div className="scale-1px line line-content">
              <span className="iconSpace address"></span>
              <span>收货地址管理</span>
              <span className="my-arrow"></span>
            </div>
          </li>
          <li className="my-item">
          <div className="scale-1px line-content">
              <span className="iconSpace money"></span>
              <span>代金券</span>
              <span className="my-arrow"></span>
            </div>
          </li>
        </ul>

        <ul className="my-other">
          <li className="my-item">
            <div className="scale-1px line line-content">
              <span className="iconSpace email"></span>
              <span>意见反馈</span>
              <span className="my-arrow"></span>
            </div>
          </li>
          <li className="my-item">
            
            <div className="scale-1px line-content">
              <span className="iconSpace question"></span>
              <span>常见问题</span>
              <span className="my-arrow"></span>
            </div>
          </li>
        </ul>
        <ul className="my-other">
          <li className="my-item my-server-number">
            客服电话:101-097-77
          </li>
        </ul>
          <p style={{textAlign:"center",color:"#999999"}}>
            服务时间：9:00-23:00
          </p>
      </div>
    </div>
  )
}

const mapStateToProps = (props) => {
  return props;
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(My)