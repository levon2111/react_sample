import {
  ON_CHANGE_NEW_COMPANY_MENU
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const onChangeMenu = createAction(ON_CHANGE_NEW_COMPANY_MENU,(state) =>({state}))

