import {
  UMA_ADMIN_ON_CHANGE_MENU_ITEM,
  LOG_OUT,
} from "../constants/actionTypes";

import {createAction} from "redux-actions";

export const onChangeMenuItem = createAction(UMA_ADMIN_ON_CHANGE_MENU_ITEM,(value) =>({value}))
export const onClickLogout = createAction(LOG_OUT,(value) =>({value}))

