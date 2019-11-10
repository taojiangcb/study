
/**
 * 
 * @param {上次的Preve} prevState 
 * @param {操作处理的Action} action 
 */
function ReceiveAction(prevState, action) {
  let { receiver } = action;
  if (typeof receiver === 'function') {
    return receiver(prevState, action);
  }
  return null;
}

export const normalReducer = (state, action) => {
  let newState = action.receiver ? ReceiveAction(state, action) : null;
  let resultState = newState ? newState : state;
  return resultState;
}

