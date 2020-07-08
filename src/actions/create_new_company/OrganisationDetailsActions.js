import {
  GET_INITIAL_SELECT_EMPLOYEES,
  CREATE_ORGANISATION_DETAILS_UMA_CHANGE,
  CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_CHANGE,
  CREATE_ORGANISATION_DETAILS_AGENT_CHANGE,
  CREATE_ORGANISATION_DETAILS_AUTHORISED_PERSON_CHANGE,
  CREATE_ORGANISATION_DETAILS_BENEFICIAL_OWNER_CHANGE,
  CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_ABBREVIATION_CHANGE,
  CREATE_ORGANISATION_DETAILS_CHANGE_COMPANY_TYPE,
  CREATE_ORGANISATION_DETAILS_CHANGE_CLIENT_USER,
  CREATE_ORGANISATION_DETAILS_CLICK_ADD_CORPORATE_MEMBER,
  CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_TYPE,
  CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_COMPANY_NAME,
  CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_SHAREHOLDER,
  CREATE_ORGANISATION_DETAILS_DELETE_CORPORATE_MEMBER,
  CREATE_ORGANISATION_DETAILS_ADD_INDIVIDUAL_MEMBER,
  CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_NOMINEE,
  CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_NOMINEE_NAME,
  CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_MEMBER_SHAREHOLDER,
  CREATE_ORGANISATION_DETAILS_DELETE_INDIVIDUAL_MEMBER,
  CREATE_ORGANISATION_DETAILS_CHANGE_ADDRESS_SERVICE,
  CREATE_ORGANISATION_DETAILS_CHANGE_OTHER_ADDRESS,
  CREATE_ORGANISATION_DETAILS_CHANGE_TRADING_ACTIVITY,
  CREATE_ORGANISATION_DETAILS_ADD_SHARE_CAPITAL,
  CREATE_ORGANISATION_DETAILS_CHANGESHARE_TYPE,
  CREATE_ORGANISATION_DETAILS_DELETE_AUTHORISED_SHARE_CAPITAL,
  CREATE_ORGANISATION_DETAILS_NUMBER_OF_CHARES,
  CREATE_ORGANISATION_DETAILS_NAME_OF_CHARES,
  CREATE_ORGANISATION_DETAILS_PER_SHARE,
  CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_EMAIL,
  CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_FIRST_NAME,
  CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_LAST_NAME,
  CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_CLICK_INVITE,
  CREATE_ORGANISATION_DETAILS_SET_INITIAL_DATA,
  CREATE_ORGANISATION_DETAILS_CHECK_PROPOSED_COMPANY_NAME,
  CREATE_ORGANISATION_DETAILS_CHECK_PROPOSED_COMPANY_ABBREVIATION,
  CREATE_ORGANISATION_DETAILS_CHECK_AUTHORISED_PERSON,
  CREATE_ORGANISATION_DETAILS_CHECK_BENEFICAL_OWNER,
  CREATE_ORGANISATION_DETAILS_CHECK_AGENT,
  CREATE_ORGANISATION_DETAILS_CHECK_TRADING_ACTIVITY,
  CREATE_ORGANISATION_DETAILS_CHECK_OTHER_ADDRESSES,
  CREATE_ORGANISATION_DETAILS_CHECK_ADDRESS_SERVICE,
  CREATE_ORGANISATION_DETAILS_SET_CORPORATE_MEMBERS_ERRORS,
  CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_COMPANY_NAME,
  CREATE_ORGANISATION_DETAILS_SET_INDIVIDUAL_MEMBERS_ERRORS,
  CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_COMPANY_NAME,
  CREATE_ORGANISATION_DETAILS_SET_AUTHORISED_SHARE_CAPITAL_ERRORS,
  CREATE_ORGANISATION_DETAILS_BLUR_NUMBER_OF_SHARES,
  CREATE_ORGANISATION_DETAILS_BLUR_CLASS_OF_SHARES,
  CREATE_ORGANISATION_DETAILS_BLUR_TYPE_OF_SHARES,
  CREATE_ORGANISATION_DETAILS_BLUR_VALUE_PER_SHARES,
  ADD_NOTIFICATION,
  CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_NOMINEE,
  CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_TYPES,
  CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_TYPES,
  CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_NOMINEE,
  ON_CHANGE_NEW_COMPANY_MENU,
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const getInitialData = createAction(GET_INITIAL_SELECT_EMPLOYEES,(agents,employees,individual_nominees,corporate_nominees,shareholder_types, clients, share_types, registered_address, member_types) =>({agents,employees,individual_nominees,corporate_nominees,shareholder_types, clients, share_types, registered_address, member_types}))
export const changeUMAUser = createAction(CREATE_ORGANISATION_DETAILS_UMA_CHANGE,(uma_user) =>({uma_user}))
export const changeProposedCompany = createAction(CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_CHANGE,(name) =>({name}))
export const onChangeAgent = createAction(CREATE_ORGANISATION_DETAILS_AGENT_CHANGE,(agent) =>({agent}))
export const changeAuthorisedPerson = createAction(CREATE_ORGANISATION_DETAILS_AUTHORISED_PERSON_CHANGE,(name) =>({name}))
export const changeBeneficialOwner = createAction(CREATE_ORGANISATION_DETAILS_BENEFICIAL_OWNER_CHANGE,(name) =>({name}))
export const changeProposedCompanyAbbreviation = createAction(CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_ABBREVIATION_CHANGE,(name) =>({name}))
export const ChangeCompanyType = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_COMPANY_TYPE,(name) =>({name}))
export const ChangeClientUser = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_CLIENT_USER,(value) =>({value}))
export const onClickAddCorporateMember = createAction(CREATE_ORGANISATION_DETAILS_CLICK_ADD_CORPORATE_MEMBER,(value) =>({value}))
export const changeCorporateMemberNominee = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_TYPE,(index, value) =>({index, value}))
export const changeCorporateMemberCompanyName = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_COMPANY_NAME,(index, value) =>({index, value}))
export const changeCorporateMemberShareholder = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_SHAREHOLDER,(index, value) =>({index, value}))
export const changeIndividualMemberShareholder = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_MEMBER_SHAREHOLDER,(index, value) =>({index, value}))
export const onClickDeleteCorporateMember = createAction(CREATE_ORGANISATION_DETAILS_DELETE_CORPORATE_MEMBER,(index, value) =>({index, value}))
export const onClickDeleteIndividualMember = createAction(CREATE_ORGANISATION_DETAILS_DELETE_INDIVIDUAL_MEMBER,(index, value) =>({index, value}))
export const onClickAddIndividualMember = createAction(CREATE_ORGANISATION_DETAILS_ADD_INDIVIDUAL_MEMBER,(value) =>({value}))
export const changeIndividualMemberNominee = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_NOMINEE,(index, value) =>({index, value}))
export const changeIndividualMemberName = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_NOMINEE_NAME,(index, value) =>({index, value}))
export const changeAddressService = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_ADDRESS_SERVICE,(value) =>({value}))
export const changeCompanyOtherAddress = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_OTHER_ADDRESS,(value) =>({value}))
export const changeTradingActivity = createAction(CREATE_ORGANISATION_DETAILS_CHANGE_TRADING_ACTIVITY,(value) =>({value}))
export const onClickAddShareCapital = createAction(CREATE_ORGANISATION_DETAILS_ADD_SHARE_CAPITAL,(value) =>({value}))
export const changeShareType = createAction(CREATE_ORGANISATION_DETAILS_CHANGESHARE_TYPE,(index, value) =>({index, value}))
export const onClickDeleteAuthorisedShareCapital = createAction(CREATE_ORGANISATION_DETAILS_DELETE_AUTHORISED_SHARE_CAPITAL,(index) =>({index}))
export const onChangeNumberOfShares = createAction(CREATE_ORGANISATION_DETAILS_NUMBER_OF_CHARES,(index, value) =>({index, value}))
export const onChangeClassNameOfShares = createAction(CREATE_ORGANISATION_DETAILS_NAME_OF_CHARES,(index, value) =>({index, value}))
export const changeValuePerShare = createAction(CREATE_ORGANISATION_DETAILS_PER_SHARE,(index, value) =>({index, value}))
export const editNewUserEmail = createAction(CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_EMAIL,(value) =>({value}))
export const editNewUserFirstName = createAction(CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_FIRST_NAME,(value) =>({value}))
export const editNewUserLastName = createAction(CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_LAST_NAME,(value) =>({value}))
export const clickInviteUser = createAction(CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_CLICK_INVITE,(value , client) =>({value, client}))
export const setInitialData = createAction(CREATE_ORGANISATION_DETAILS_SET_INITIAL_DATA,(corporate_members,individual_members,authorised_share_capital,organisation_details) =>({corporate_members,individual_members,authorised_share_capital,organisation_details}))
export const add_notification = createAction(ADD_NOTIFICATION,(message,level) =>({message,level}))
export const onBlurProposedCompanyName = createAction(CREATE_ORGANISATION_DETAILS_CHECK_PROPOSED_COMPANY_NAME,(valid) =>({valid}))
export const onBlurProposedAbbreviation = createAction(CREATE_ORGANISATION_DETAILS_CHECK_PROPOSED_COMPANY_ABBREVIATION,(valid) =>({valid}))
export const onBlurAuthorisedPerson = createAction(CREATE_ORGANISATION_DETAILS_CHECK_AUTHORISED_PERSON,(valid) =>({valid}))
export const onBlurBeneficialOwner = createAction(CREATE_ORGANISATION_DETAILS_CHECK_BENEFICAL_OWNER,(valid) =>({valid}))
export const onBlurAgent = createAction(CREATE_ORGANISATION_DETAILS_CHECK_AGENT,(valid) =>({valid}))
export const onBlurTradingActivity = createAction(CREATE_ORGANISATION_DETAILS_CHECK_TRADING_ACTIVITY,(valid) =>({valid}))
export const onBlurOtherAddresses = createAction(CREATE_ORGANISATION_DETAILS_CHECK_OTHER_ADDRESSES,(valid) =>({valid}))
export const onBlurAddressService = createAction(CREATE_ORGANISATION_DETAILS_CHECK_ADDRESS_SERVICE,(valid) =>({valid}))
export const setCorporateMembersError = createAction(CREATE_ORGANISATION_DETAILS_SET_CORPORATE_MEMBERS_ERRORS,(value) =>({value}))
export const setAuthorisedShareCapitalErrors = createAction(CREATE_ORGANISATION_DETAILS_SET_AUTHORISED_SHARE_CAPITAL_ERRORS,(value) =>({value}))
export const setIndividualMemberErrors = createAction(CREATE_ORGANISATION_DETAILS_SET_INDIVIDUAL_MEMBERS_ERRORS,(value) =>({value}))
export const onBlurCorporateMemberCompany = createAction(CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_COMPANY_NAME,(index, valid) =>({index, valid}))
export const onBlurCorporateMemberNominee = createAction(CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_NOMINEE,(index, valid) =>({index, valid}))
export const onBlurCorporateMemberTypes = createAction(CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_TYPES,(index, valid) =>({index, valid}))
export const onBlurIndividualMemberTypes = createAction(CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_TYPES,(index, valid) =>({index, valid}))
export const onBlurIndividualMemberNominee = createAction(CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_NOMINEE,(index, valid) =>({index, valid}))
export const onBlurIndividualMemberNameSurname = createAction(CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_COMPANY_NAME,(index, valid) =>({index, valid}))
export const onBlurClassOfShares = createAction(CREATE_ORGANISATION_DETAILS_BLUR_CLASS_OF_SHARES,(index, valid) =>({index, valid}))
export const onBlurTypeOfShares = createAction(CREATE_ORGANISATION_DETAILS_BLUR_TYPE_OF_SHARES,(index, valid) =>({index, valid}))
export const blurNumberOfShares = createAction(CREATE_ORGANISATION_DETAILS_BLUR_NUMBER_OF_SHARES,(index, valid) =>({index, valid}))
export const onBlurValuePerShares = createAction(CREATE_ORGANISATION_DETAILS_BLUR_VALUE_PER_SHARES,(index, valid) =>({index, valid}))
export const changeStepToPersonal = createAction(ON_CHANGE_NEW_COMPANY_MENU,(state) =>({state}))
