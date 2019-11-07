
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import BottomBar from "../../../component/BottomBar/BottomBar.jsx";


export default (props) => {
  return (
    <Fragment>
      <BottomBar/>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

// export default connect(mapStateToProps, mapDispatchToProps)(Home)


