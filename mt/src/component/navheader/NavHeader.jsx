
import React from 'react';
import { connect } from 'react-redux';
import './NavHeader.scss';

const backClick = (e) => {
  window.location.href = "/";
}

const NavHeander = props => {
  return (
    <div className='nav-header scale-1px'>
      <div className='nav-back-icon' onClick={backClick}></div>
      <div className="nav-title">分类</div>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHeander)
