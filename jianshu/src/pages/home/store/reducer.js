import { fromJS } from 'immutable';
import { ACTION } from './actionConst';

const defaultState = fromJS({
  recommendList: [],
  articleList: [],
  authorList:[],
})

export default (state = defaultState, action) => {
  console.log(JSON.stringify(action));
  if (action.type === ACTION.GET_HOME_DATA) {
      return state.merge({
        recommendList:fromJS(action.recommendList),
        articleList:fromJS(action.articleList),
        authorList:fromJS(action.authorList),
      })
      // state.set('articleList',action.articleList);
      // state.set('recommendList',action.recommendList);
  }
  return state;
}; 