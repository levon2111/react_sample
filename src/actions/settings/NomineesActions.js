import {
  SETTINGS_NOMINEE_GET_INITIAL_USER_LIST,
  SETTINGS_NOMINEE_NOMINEE_AGREEMENT_CHANGE,
  SETTINGS_NOMINEE_NOMINEE_TYPE_CHANGE,
  SETTINGS_NOMINEE_NOMINEE_NAME_CHANGE,
  SETTINGS_NOMINEE_ON_CLICK_ADD_NOMINEE,
  SETTINGS_NOMINEE_ON_BLUR_NOMINEE_NAME,
  SETTINGS_NOMINEE_ON_BLUR_NOMINEE_AGREEMENT,
  ADD_NOTIFICATION,

} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const getInitialNomineesList = createAction(SETTINGS_NOMINEE_GET_INITIAL_USER_LIST,(value) =>({value}))
export const onAgreementChange = createAction(SETTINGS_NOMINEE_NOMINEE_AGREEMENT_CHANGE,(file, name) =>({file, name}))
export const onTypeChange = createAction(SETTINGS_NOMINEE_NOMINEE_TYPE_CHANGE,(value) =>({value}))
export const onNameChange = createAction(SETTINGS_NOMINEE_NOMINEE_NAME_CHANGE,(value) =>({value}))
export const on_click_add_nominee = createAction(SETTINGS_NOMINEE_ON_CLICK_ADD_NOMINEE,(value) =>({value}))
export const onBlurNomineeName = createAction(SETTINGS_NOMINEE_ON_BLUR_NOMINEE_NAME,(value) =>({value}))
export const onBlurNomineeAgreement = createAction(SETTINGS_NOMINEE_ON_BLUR_NOMINEE_AGREEMENT,(value) =>({value}))
export const add_notification = createAction(ADD_NOTIFICATION,(message,level) =>({message,level}))
