import { ACTION } from "./actions";

export const addTodo = (data = {}) => {
	return {
		type: ACTION.ADD_TO,
		data: data, //发送的data数据
		receiver(state, action) {
			if (action.type === ACTION.ADD_TO) {
				let num = action.data.num || 0;
				return {
					num: state.num + num
				}
			}
		}
	}
}

export const changeTab = (data = {}) => {
	return {
		type: ACTION.CHANGE_TAB,
		data: data, //发送的data数据
		receiver(state, action) {
			return {
				...state,
				activeKey: action.data.activeKey
			}
		}
	}
}