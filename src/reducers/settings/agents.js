import {
  GET_INITIAL_USER_LIST,
  AGREEMENT_CHANGE,
  DUE_DILIGENCE_CHANGE,
  AGENT_NAME_CHANGE,
  ON_CLICK_ADD_AGENT,
  ADD_AGENTS_LIST,
  AGENT_NAME_BLUR,
  AGENT_DILIGENCE_BLUR,
  AGENT_AGREEMENT_BLUR

} from '../../constants/actionTypes'

let new_agent_data = {
    name:'',
    agentAgreement:"",
    dueDiligence:"",
    agreementName:"",
    diligenceName:""
}

const initialState = {
  error:{
    new_agent:{
      name: {valid: false, message: '', touched: false, label: 'Name'},
      dueDiligence: {valid: false, message: '', touched: false, label: 'Due Deligence'},
      agentAgreement: {valid: false, message: '', touched: false, label: 'Agreement Name'},
    }
  },
  agents_list:[],
  new_agent:new_agent_data
}

export default function agents_list(state = initialState, action) {
  let error = state.error;
  switch (action.type) {
    case GET_INITIAL_USER_LIST:
      return {
        ...state,
        agents_list:action.payload.users
      }
    case AGREEMENT_CHANGE:
      return {
        ...state,
        new_agent: {
          ...state.new_agent,
          agentAgreement: action.payload.file,
          agreementName: action.payload.name
        }
      }
    case DUE_DILIGENCE_CHANGE:
      return {
        ...state,
        new_agent: {
          ...state.new_agent,
          dueDiligence: action.payload.file,
          diligenceName: action.payload.name
        }
      }
    case ON_CLICK_ADD_AGENT:
      let list = state.agents_list.push(action.payload.agent);
      return {
        ...state,
        new_agent: {
          ...state.new_agent,
          dueDiligence: '',
          name: '',
          agentAgreement: ''

        },
        agents_list:list
      }
    case AGENT_NAME_CHANGE:
      return {
        ...state,
        new_agent: {
          ...state.new_agent,
          name: action.payload.name
        }
    }
    case ADD_AGENTS_LIST:
      return {
        ...state,
         new_agent:new_agent_data,
         agents_list: [...state.agents_list, action.payload.agent]
      }
    case AGENT_NAME_BLUR:
      error.new_agent.name = action.payload.valid;
      return {
        ...state,
        error: error
      }
    case AGENT_AGREEMENT_BLUR:
      error.new_agent.agentAgreement = action.payload.valid;
      return {
        ...state,
        error: error
      }
    case AGENT_DILIGENCE_BLUR:
      error.new_agent.dueDiligence = action.payload.valid;
      return {
        ...state,
        error: error
      }
    default:
      return state
  }
}
