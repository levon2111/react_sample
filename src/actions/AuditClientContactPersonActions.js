import {
  AUDIT_CLIENT_ADD_ANOTHER_USER,
  AUDIT_CLIENT_EMAIL_CHANGE,
  AUDIT_CLIENT_FIRSTNAME_CHANGE,
  AUDIT_CLIENT_GET_INITIAL_USER_LIST,
  AUDIT_CLIENT_LASTNAME_CHANGE,
  AUDIT_CLIENT_ON_CLICK_EDIT_USER,
  AUDIT_SEND_CLIENT_INVITATION,
  AUDIT_CLIENT_COMPANY_NAME_CHANGE,
  ADD_NOTIFICATION,

} from "../constants/actionTypes";

import {createAction} from "redux-actions";

export const email_change = createAction(AUDIT_CLIENT_EMAIL_CHANGE,(email) => ({email}))
export const first_name_change = createAction(AUDIT_CLIENT_FIRSTNAME_CHANGE,(name) => ({name}))
export const company_name_change = createAction(AUDIT_CLIENT_COMPANY_NAME_CHANGE,(name) => ({name}))
export const last_name_change = createAction(AUDIT_CLIENT_LASTNAME_CHANGE,(name) => ({name}))
export const invite_users = createAction(AUDIT_SEND_CLIENT_INVITATION,(users) => ({users}))
export const edit_user = createAction(AUDIT_CLIENT_ON_CLICK_EDIT_USER,(user) => ({user}))
export const add_user = createAction(AUDIT_CLIENT_ADD_ANOTHER_USER,(user) => ({user}))
export const getInitialUserList = createAction(AUDIT_CLIENT_GET_INITIAL_USER_LIST,(users) =>({users}))
export const add_notification = createAction(ADD_NOTIFICATION,(message,level) =>({message,level}))
