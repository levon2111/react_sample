import {
  ON_CHANGE_NEW_COMPANY_MENU,
  UMA_ADMIN_ON_CHANGE_MENU_ITEM
} from '../constants/actionTypes'

const initialState = {
  activeItem:'organisation_details',
  menu_item: 'new-company',
}

export default function admin_menu(state = initialState, action) {
  switch (action.type) {
    case UMA_ADMIN_ON_CHANGE_MENU_ITEM:
      return{
        ...state,
        menu_item:action.payload.value
      }
    case ON_CHANGE_NEW_COMPANY_MENU:
      return {
        ...state,
        activeItem:action.payload.state
      }
    default:
      return state
  }
}
