
import React from 'react';
import { Fragment } from 'react-dom';
import { connect } from 'react-redux';
import { HomeAction } from '../../store/Action.Home';
import { Helmet } from 'react-helmet'
import style from './index.css';



class Home extends React.Component {
  constructor(props) { super(props); }

  // componentWillMount() {
  //   if(this.props.staticContext ) {
  //     console.log(styles.__getCss());
  //   }
  // }

  render() {
    let { name, newsList } = this.props;

    //将样式传出去，用于服务器渲染
    if(this.props.staticContext) {
      this.props.staticContext.css = style._getCss();
    }

    return (
      <React.Fragment>
        <Helmet>
          <title> Hello ssr </title>
          <meta name="description" content="Hello Study ssr"/>
        </Helmet>
        <h1>{name}</h1>
        <div > 同构服务器路由 </div>
        <div className={style.test}>
          {
            newsList && newsList.map(item => {
              return <p key={item.id}>{item.title}</p>
            })
          }
        </div>
        <button onClick={(e) => { this.props.getHomeList() }}> 点击一下 </button>
      </React.Fragment>
    )
  }

  /**客户端初始化的时候发起的数据初始化请求 */
  componentDidMount() {
    let { newsList } = this.props;
    if (!newsList.length) {
      // this.props.getHomeList();
    }
  }
}

/**ssr服务器端路由时候发起的数据初始化请求 */
export const loadHomeData = (store) => {
  return store.dispatch(HomeAction.get_home_list());
}

const mapStateToProps = (state) => {
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

