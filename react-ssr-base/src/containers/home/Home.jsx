
import React from 'react';

import { connect } from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <div> 同构服务器路由 </div>
        <button onClick={(e) => { alert('再来一下'); }}> 点击一下 </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.getIn(['Home', "name"]),
  }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, null)(Home)

