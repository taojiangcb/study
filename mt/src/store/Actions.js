
/**
 * 
 * @param {上次的Preve} prevState 
 * @param {操作处理的Action} action 
 */
export function ReceiveAction(prevState, action) {
  let { receiver } = action;
  if (typeof receiver === 'function') {
    return receiver(prevState, action);
  }
  return null;
}