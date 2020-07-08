import {
  ADD_ANOTHER_USER,
  EMAIL_CHANGE,
  FIRSTNAME_CHANGE,
  GET_INITIAL_USER_LIST,
  LASTNAME_CHANGE,
  ON_CLICK_EDIT_USER,
  SELECT_SECTION,
  SEND_USER_INVITATION
} from "../constants/actionTypes";

import {createAction} from "redux-actions";

export const email_change = createAction(EMAIL_CHANGE,(email) => ({email}))
export const first_name_change = createAction(FIRSTNAME_CHANGE,(firstName) => ({firstName}))
export const last_name_change = createAction(LASTNAME_CHANGE,(lastName) => ({lastName}))
export const change_sections = createAction(SELECT_SECTION,(section) => ({section}))
export const invite_users = createAction(SEND_USER_INVITATION,(users) => ({users}))
export const edit_user = createAction(ON_CLICK_EDIT_USER,(user) => ({user}))
export const add_user = createAction(ADD_ANOTHER_USER,(user) => ({user}))
export const getInitialUserList = createAction(GET_INITIAL_USER_LIST,(users) =>({users}))
