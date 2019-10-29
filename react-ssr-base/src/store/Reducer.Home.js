import { ACTION_CONSTANTS } from './ActionConst';


const defaultState = {
  name: "Tao....",
  newsList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_CONSTANTS.GET_HOME_LIST:
      console.log('..........')
      console.log(action);
      return {
        newsList: action.newsList,
        name: state.name
      }
      break;
  }
  return state;
}
