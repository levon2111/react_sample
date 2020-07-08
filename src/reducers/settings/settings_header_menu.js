import {SETTINGS_HEADER_MENU_CHANGE} from "../../constants/actionTypes";

const initialState = {
  activeItem: '',
}

export default function settings_header_menu(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_HEADER_MENU_CHANGE:
      return {
        ...state,
        activeItem: action.payload.value
      }
    default:
      return state
  }
}
