import {
  CREATE_COMPANY_PERSONAL_DETAILS_SET_MEMBERS_DATA,
  ADD_NOTIFICATION,
  ON_CHANGE_NEW_COMPANY_MENU,
  PERSONAL_DETAILS_SET_MEMBER_DETAILS,
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const add_notification = createAction(ADD_NOTIFICATION,(message,level) =>({message,level}))
export const setMembersData = createAction(CREATE_COMPANY_PERSONAL_DETAILS_SET_MEMBERS_DATA,(corporate, individual) =>({corporate, individual}))
export const onChangeMenuItem = createAction(ON_CHANGE_NEW_COMPANY_MENU,(state) =>({state}))
export const changeCompanyCreateStep = createAction(ON_CHANGE_NEW_COMPANY_MENU,(state) =>({state}))
export const setFillInDetailsMember = createAction(PERSONAL_DETAILS_SET_MEMBER_DETAILS,(value) =>({value}))
