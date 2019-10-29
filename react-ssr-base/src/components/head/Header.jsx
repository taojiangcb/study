
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onLogOut, onLogin } from '../../store/Action.Login';


const Header = (props) => {
  let { loginState } = props

  console.log('....');

  return (
    <div>
      <span >Home</span>
      <br />
      {
        loginState
          ? loginRender(props)
          : <Link onClick={e => props.onLoginHandler(props)} to="">登录</Link>
      }
      <br />
    </div>
  )
}

const loginRender = (props) => (
  <div>
    <Link onClick={e => props.onLogoutHandler(props)} to="">退出</Link>
  </div>
)

const mapStateToProps = function (state) {
  return {
    loginState: state.Login.isLogin
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    onLogoutHandler: function () {
      return dispatch(onLogOut());
    },
    onLoginHandler: function () {
      return dispatch(onLogin());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)