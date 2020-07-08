import {
  ON_CHANGE_NEW_COMPANY_MENU
} from '../../constants/actionTypes'

const initialState = {
  activeItem:'organisation_details'
}

export default function new_company_menu(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_NEW_COMPANY_MENU:
      return {
        ...state,
        activeItem:action.payload.state
      }
    default:
      return state
  }
}
