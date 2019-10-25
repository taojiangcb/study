import { fromJS } from 'immutable';

const defaultState = fromJS({
  name: "Tao....",
  newList: []
})

export default (state = defaultState, action) => {
  return state;
}
