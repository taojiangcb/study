
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import './SearchBar.scss'

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div className='bar-location'>
        <div className='location-icon'></div>
        <div className="location-text">杭州市</div>
      </div>
      <div className='search-btn'>
        <p className="place-holder">鸡翅</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)


