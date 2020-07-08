import {
  EMPLOYEE_SETTINGS_GET_INITIAL_EMPLOYEE_LIST,
  EMPLOYEE_SETTINGS_SECTIONS_CHANGE
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const setInitialData = createAction(EMPLOYEE_SETTINGS_GET_INITIAL_EMPLOYEE_LIST,(users,sectionTypes) =>({users,sectionTypes}))
export const setNewEmployeeSections = createAction(EMPLOYEE_SETTINGS_SECTIONS_CHANGE,(value) =>({value}))
