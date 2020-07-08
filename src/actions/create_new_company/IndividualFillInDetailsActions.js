import {
  GET_INITIAL_SELECT_EMPLOYEES,
  CREATE_ORGANISATION_DETAILS_UMA_CHANGE,
  CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_CHANGE,
  CREATE_ORGANISATION_DETAILS_AGENT_CHANGE,
  CREATE_ORGANISATION_DETAILS_AUTHORISED_PERSON_CHANGE,
  CREATE_ORGANISATION_DETAILS_BENEFICIAL_OWNER_CHANGE,
  CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_ABBREVIATION_CHANGE,
  CLIENT_SET_INDIVIDUAL_COUNTRIES_LIST
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const getInitialData = createAction(GET_INITIAL_SELECT_EMPLOYEES,(agents,employees,individual_nominees,corporate_nominees) =>({agents,employees,individual_nominees,corporate_nominees}))
export const changeUMAUser = createAction(CREATE_ORGANISATION_DETAILS_UMA_CHANGE,(uma_user) =>({uma_user}))
export const changeProposedCompany = createAction(CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_CHANGE,(name) =>({name}))
export const onChangeAgent = createAction(CREATE_ORGANISATION_DETAILS_AGENT_CHANGE,(agent) =>({agent}))
export const changeAuthorisedPerson = createAction(CREATE_ORGANISATION_DETAILS_AUTHORISED_PERSON_CHANGE,(name) =>({name}))
export const changeBeneficialOwner = createAction(CREATE_ORGANISATION_DETAILS_BENEFICIAL_OWNER_CHANGE,(name) =>({name}))
export const changeProposedCompanyAbbreviation = createAction(CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_ABBREVIATION_CHANGE,(name) =>({name}))
export const countries_list = createAction(CLIENT_SET_INDIVIDUAL_COUNTRIES_LIST,(countries) =>({countries}))
