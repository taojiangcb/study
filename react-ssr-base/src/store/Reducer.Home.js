import { ACTION_HOME } from './ActionConst';


const defaultState = {
  name: "Tao....",
  newsList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_HOME.GET_HOME_LIST:
      console.log(state);
      return {
        newsList: action.newsList,
        name: state.name
      }
      break;
  }
  return state;
}
