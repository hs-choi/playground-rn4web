import { GET_TEXT, CHANGE_TEXT } from '../action/actionType';
const initState = {
  firstMsg: 'Hello'
}

export default (state = initState, action) => {
  
  if (action.type === GET_TEXT) {
    return state
  }

  if (action.type === CHANGE_TEXT) {
    state.firstMsg = 'world';
    return state
  }

  return state;
}