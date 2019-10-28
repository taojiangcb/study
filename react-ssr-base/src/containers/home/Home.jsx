
import React from 'react';
import { connect } from 'react-redux';
import { HomeAction } from '../../store/Action.Home';

class Home extends React.Component {

  constructor(props) { super(props); }

  render() {
    let { name, newsList } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <div> 同构服务器路由 </div>
        {
          newsList && newsList.map(item=>{
            return <p key={item.id}>{item.title}</p>
          })
        }

        <button onClick={(e) => { this.props.getHomeList() }}> 点击一下 </button>
      </div>
    )
  }

  /**客户端初始化的时候发起的数据初始化请求 */
  componentDidMount() {
    let { newsList } = this.props;
    if (!newsList || newsList.length === 0) {
      this.props.getHomeList();
    }
  }
}

/**ssr服务器端路由时候发起的数据初始化请求 */
export const loadHomeData = (store) => {
  return store.dispatch(HomeAction.get_home_list());
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    name: state.Home.name,
    newsList: state.Home.newsList,
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

