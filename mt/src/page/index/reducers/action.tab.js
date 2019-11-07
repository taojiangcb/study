import { ACTION } from "./actions";

export const addTodo = (params = {}) => {
  return {
    type: ACTION.ADD_TO,
    data: params,//发送的data数据
    receiver(state, action) {
      let num = action.data.num || 0;
      return {
        num: state.num + num
      }
    }
  }
}