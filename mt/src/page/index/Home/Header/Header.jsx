
import './Header.scss'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';

const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <img className="banner-img" src="./images/header.c2a81a2250ded5e19a7681ff525eb33d.png"></img>
        <SearchBar />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)


