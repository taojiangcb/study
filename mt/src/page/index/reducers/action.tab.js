import { ACTION } from "./actions";

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