import {
  SETTINGS_HEADER_MENU_CHANGE,
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const chnageHeaderMenu = createAction(SETTINGS_HEADER_MENU_CHANGE,(value) =>({value}))

