
import React from 'react';
import { connect } from 'react-redux';
import { HomeAction } from '../../store/Action.Home';

class Home extends React.Component {
  constructor(props) { super(props); }

  render() {
    let { name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <div> 同构服务器路由 </div>
        <button onClick={(e) => { this.props.getHomeList() }}> 点击一下 </button>
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
  return {
    getHomeList: () => {
      dispatch(HomeAction.get_home_list());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

