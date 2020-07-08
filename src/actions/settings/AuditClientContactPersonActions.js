import {
  SETTINGS_AUDIT_CLIENT_ADD_ANOTHER_USER,
  SETTINGS_AUDIT_CLIENT_EMAIL_CHANGE,
  SETTINGS_AUDIT_CLIENT_FIRSTNAME_CHANGE,
  SETTINGS_AUDIT_CLIENT_GET_INITIAL_USER_LIST,
  SETTINGS_AUDIT_CLIENT_LASTNAME_CHANGE,
  // SETTINGS_AUDIT_CLIENT_ON_CLICK_EDIT_USER,
  SETTINGS_AUDIT_SEND_CLIENT_INVITATION,
  SETTINGS_AUDIT_CLIENT_COMPANY_NAME_CHANGE,
  SETTINGS_AUDIT_CLIENT_ON_BLUR_COMPANY_NAME,
  SETTINGS_AUDIT_CLIENT_ON_BLUR_EMAIL,
  SETTINGS_AUDIT_CLIENT_ON_BLUR_FIRST_NAME,
  SETTINGS_AUDIT_CLIENT_ON_BLUR_LAST_NAME,
  SETTINGS_AUDIT_DELETE_AUDIT_CLIENT_CONTACT_PERSON,
  ADD_NOTIFICATION,

} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const add_notification = createAction(ADD_NOTIFICATION,(message,level) =>({message,level}))
export const addAuditContactPerson = createAction(SETTINGS_AUDIT_CLIENT_ADD_ANOTHER_USER,(value) =>({value}))
export const getInitialUserList = createAction(SETTINGS_AUDIT_CLIENT_GET_INITIAL_USER_LIST,(value) =>({value}))
export const email_change = createAction(SETTINGS_AUDIT_CLIENT_EMAIL_CHANGE,(index, value) =>({index, value}))
export const first_name_change = createAction(SETTINGS_AUDIT_CLIENT_FIRSTNAME_CHANGE,(index, value) =>({index, value}))
export const last_name_change = createAction(SETTINGS_AUDIT_CLIENT_LASTNAME_CHANGE,(index, value) =>({index, value}))
export const company_name_change = createAction(SETTINGS_AUDIT_CLIENT_COMPANY_NAME_CHANGE,(index, value) =>({index, value}))
export const onBlurCompanyName = createAction(SETTINGS_AUDIT_CLIENT_ON_BLUR_COMPANY_NAME,(index, value) =>({index, value}))
export const onBlurEmail = createAction(SETTINGS_AUDIT_CLIENT_ON_BLUR_EMAIL,(index, value) =>({index, value}))
export const onBlurFirstName = createAction(SETTINGS_AUDIT_CLIENT_ON_BLUR_FIRST_NAME,(index, value) =>({index, value}))
export const onBlurLastName = createAction(SETTINGS_AUDIT_CLIENT_ON_BLUR_LAST_NAME,(index, value) =>({index, value}))
export const invite_audit_clients = createAction(SETTINGS_AUDIT_SEND_CLIENT_INVITATION,(value) =>({value}))
export const onDeleteAuditClientContactPerson = createAction(SETTINGS_AUDIT_DELETE_AUDIT_CLIENT_CONTACT_PERSON,(index) =>({index}))
