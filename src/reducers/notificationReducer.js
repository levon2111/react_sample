import {
  ADD_NOTIFICATION
} from '../constants/actionTypes';

export default function notification(state = {}, action) {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      const {message, level, children} = action.payload;
      return Object.assign({}, state, {
        message,
        level,
        children
      });
    }

    default:
      return state;
  }
}
