import {
  CLIENT_ADD_ANOTHER_USER,
  CLIENT_EMAIL_CHANGE,
  CLIENT_FIRSTNAME_CHANGE,
  CLIENT_GET_INITIAL_USER_LIST,
  CLIENT_LASTNAME_CHANGE,
  CLIENT_ON_CLICK_EDIT_USER,
  SEND_CLIENT_INVITATION,
  CLIENT_COMPANY_NAME_CHANGE,
  ADD_NOTIFICATION,
  CLIENT_EMAIL_EDIT_USER,
  EDIT_CLIENT_EMAIL,
  EDIT_CLIENT_FIRSTNAME,
  EDIT_CLIENT_COMPANY_NAME,
  EDIT_CLIENT_LASTNAME,
  CHANGE_USER_DATA,
  BLUR_NEW_CLIENT_LIST_FIRST_NAME,
  BLUR_NEW_CLIENT_LIST_LAST_NAME,
  BLUR_NEW_CLIENT_LIST_COMPANY_NAME,
  BLUR_NEW_CLIENT_LIST_EMAIL,
  SETTINGS_CLIENT_USER_DELETE_USER,
  UMA_ADMIN_ON_CHANGE_MENU_ITEM,

} from "../constants/actionTypes";

import {createAction} from "redux-actions";

export const email_change = createAction(CLIENT_EMAIL_CHANGE,(index,email) => ({index,email}))
export const first_name_change = createAction(CLIENT_FIRSTNAME_CHANGE,(index,name) => ({index,name}))
export const company_name_change = createAction(CLIENT_COMPANY_NAME_CHANGE,(index,name) => ({index,name}))
export const last_name_change = createAction(CLIENT_LASTNAME_CHANGE,(index,name) => ({index,name}))

export const edit_email = createAction(EDIT_CLIENT_EMAIL,(email) => ({email}))
export const edit_first_name = createAction(EDIT_CLIENT_FIRSTNAME,(name) => ({name}))
export const edit_company_name = createAction(EDIT_CLIENT_COMPANY_NAME,(name) => ({name}))
export const edit_last_name = createAction(EDIT_CLIENT_LASTNAME,(name) => ({name}))
export const change_user_data = createAction(CHANGE_USER_DATA,(firstName,lastName,id,email,client) => ({firstName,lastName,id,email,client}))

export const invite_users = createAction(SEND_CLIENT_INVITATION,(users) => ({users}))
export const edit_user = createAction(CLIENT_ON_CLICK_EDIT_USER,(user) => ({user}))
export const onEditChangeEmail = createAction(CLIENT_EMAIL_EDIT_USER,(email) => ({email}))
export const add_user = createAction(CLIENT_ADD_ANOTHER_USER,(user) => ({user}))
export const getInitialUserList = createAction(CLIENT_GET_INITIAL_USER_LIST,(users) =>({users}))
export const add_notification = createAction(ADD_NOTIFICATION,(message,level) =>({message,level}))


export const onBlurClientFirstName = createAction(BLUR_NEW_CLIENT_LIST_FIRST_NAME,(index, valid) =>({index, valid}))
export const onBlurClientLastName = createAction(BLUR_NEW_CLIENT_LIST_LAST_NAME,(index, valid) =>({index, valid}))
export const onBlurClientCompanyName = createAction(BLUR_NEW_CLIENT_LIST_COMPANY_NAME,(index, valid) =>({index, valid}))
export const onBlurClientEmail = createAction(BLUR_NEW_CLIENT_LIST_EMAIL,(index, valid) =>({index, valid}))
export const onClickDeleteClientUser = createAction(SETTINGS_CLIENT_USER_DELETE_USER,(index) =>({index}))
export const changeMenuItem = createAction(UMA_ADMIN_ON_CHANGE_MENU_ITEM,(value) =>({value}))
