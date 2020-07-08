import {
  GET_INITIAL_USER_LIST,
  AGREEMENT_CHANGE,
  DUE_DILIGENCE_CHANGE,
  AGENT_NAME_CHANGE,
  ADD_NOTIFICATION,
  ON_CLICK_ADD_AGENT,
  ADD_AGENTS_LIST,
  AGENT_NAME_BLUR,
  AGENT_DILIGENCE_BLUR,
  AGENT_AGREEMENT_BLUR
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const getInitialAgentsList = createAction(GET_INITIAL_USER_LIST,(users) =>({users}))
export const onAgreementChange = createAction(AGREEMENT_CHANGE,(file,name) =>({file,name}))
export const onDiligenceChange = createAction(DUE_DILIGENCE_CHANGE,(file,name) =>({file,name}))
export const onAgentNameChange = createAction(AGENT_NAME_CHANGE,(name) =>({name}))
export const add_notification = createAction(ADD_NOTIFICATION,(message,level) =>({message,level}))
export const on_click_add_agent = createAction(ON_CLICK_ADD_AGENT,(agent) =>({agent}))
export const addAgentsList = createAction(ADD_AGENTS_LIST,(agent) =>({agent}))
export const onBlurName = createAction(AGENT_NAME_BLUR,(valid) =>({valid}))
export const onBlurAgreement = createAction(AGENT_AGREEMENT_BLUR,(valid) =>({valid}))
export const onBlurDiligence = createAction(AGENT_DILIGENCE_BLUR,(valid) =>({valid}))
