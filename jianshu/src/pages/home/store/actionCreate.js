import { ACTION } from "./actionConst";
import axios from 'axios';


/**获取主页数据 */
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home')
      .then((res) => {
        console.log(res);
        let action = {
          type: ACTION.GET_HOME_DATA,
          articleList: res.data.data.articleList,
          recommendList: res.data.data.recommendList,
          authorList: res.data.data.authorList,
        }
        dispatch(action);
      })
  }
} 