import {
  SETTINGS_NOMINEE_GET_INITIAL_USER_LIST,
  SETTINGS_NOMINEE_NOMINEE_AGREEMENT_CHANGE,
  SETTINGS_NOMINEE_NOMINEE_TYPE_CHANGE,
  SETTINGS_NOMINEE_NOMINEE_NAME_CHANGE,
  SETTINGS_NOMINEE_ON_CLICK_ADD_NOMINEE,
  SETTINGS_NOMINEE_ON_BLUR_NOMINEE_NAME,
  SETTINGS_NOMINEE_ON_BLUR_NOMINEE_AGREEMENT,
} from '../../constants/actionTypes'

const initialState = {
  errors: {
    new_nominee: {
      name: {valid: false, message: '', touched: false, label: 'Name'},
      agreement: {valid: false, message: '', touched: false, label: 'Agreement'},
      nomineeType: {valid: false, message: '', touched: false, label: 'Nominee Type'}
    }
  },
  nominees:[],
  new_nominee:{
    agreementOriginalName: '',
    name: '',
    agreement: '',
    nomineeType: 'INDIVIDUAL'
  }
}

export default function nominees_list(state = initialState, action) {
  let nominees = state.nominees;
  let errors = state.errors;
  let new_nominee = state.new_nominee;
  switch (action.type) {
    case SETTINGS_NOMINEE_NOMINEE_NAME_CHANGE:
      new_nominee.name = action.payload.value;
      return {
        ...state,
        new_nominee: new_nominee
      }
    case SETTINGS_NOMINEE_NOMINEE_TYPE_CHANGE:
      new_nominee.nomineeType = action.payload.value;
      return {
        ...state,
        new_nominee: new_nominee
      }
    case SETTINGS_NOMINEE_ON_BLUR_NOMINEE_AGREEMENT:
      errors.new_nominee.agreement = action.payload.value;
      return {
        ...state,
        errors: errors
      }
    case SETTINGS_NOMINEE_NOMINEE_AGREEMENT_CHANGE:
      new_nominee.agreement = action.payload.file;
      new_nominee.agreementOriginalName = action.payload.name;
      return {
        ...state,
        new_nominee: new_nominee
      }
    case SETTINGS_NOMINEE_ON_BLUR_NOMINEE_NAME:
      errors.new_nominee.name = action.payload.value
      return {
        ...state,
        errors: errors
      }
    case SETTINGS_NOMINEE_ON_CLICK_ADD_NOMINEE:
      errors.new_nominee = {
        name: {valid: false, message: '', touched: false, label: 'Name'},
        agreement: {valid: false, message: '', touched: false, label: 'Agreement'},
        nomineeType: {valid: false, message: '', touched: false, label: 'Nominee Type'}
      }
      new_nominee = {
        name: '',
        agreement: '',
        nomineeType:'CORPORATE',
        agreementOriginalName:''
      }
      return {
        ...state,
        errors: errors,
        nominees: nominees.push(action.payload.value),
        new_nominee: new_nominee
      }
    case SETTINGS_NOMINEE_GET_INITIAL_USER_LIST:
      nominees = action.payload.value;
      errors.new_nominee = {
        name: {valid: false, message: '', touched: false, label: 'Name'},
        agreement: {valid: false, message: '', touched: false, label: 'Agreement'},
        nomineeType: {valid: false, message: '', touched: false, label: 'Nominee Type'}
      }
      return {
        ...state,
        nominees:nominees,
        errors:errors
      }
    default:
      return state
  }
}
