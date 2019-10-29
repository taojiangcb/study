
let action_struct = {
  type: ""
}

export const createAction = (type, ...args) => {
  if (!type) return null;
  let action = Object.assign({},action_struct, { type: type});
  return action;
}
