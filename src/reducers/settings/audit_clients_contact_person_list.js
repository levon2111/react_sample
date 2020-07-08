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


} from '../../constants/actionTypes'

const initialState = {
  errors: [],
  contact_person_list:[],
  persons: []
}

export default function audit_clients_contact_person_list(state = initialState, action) {
  let contact_person_list = state.contact_person_list;
  let persons = state.persons;
  let errors = state.errors;
  switch (action.type) {
    case SETTINGS_AUDIT_DELETE_AUDIT_CLIENT_CONTACT_PERSON:
      errors.splice(action.payload.index, action.payload.index)
      contact_person_list.splice(action.payload.index, action.payload.index)
      return {
        ...state,
        errors: errors,
        contact_person_list: contact_person_list
      }
    case SETTINGS_AUDIT_CLIENT_ON_BLUR_LAST_NAME:
      errors[action.payload.index].lastName = action.payload.value
      return {
        ...state,
        errors: errors
      }
    case SETTINGS_AUDIT_CLIENT_ON_BLUR_FIRST_NAME:
      errors[action.payload.index].firstName = action.payload.value
      return {
        ...state,
        errors: errors
      }
    case SETTINGS_AUDIT_CLIENT_ON_BLUR_EMAIL:
      errors[action.payload.index].email = action.payload.value
      return {
        ...state,
        errors: errors
      }
    case SETTINGS_AUDIT_CLIENT_ON_BLUR_COMPANY_NAME:
      errors[action.payload.index].company = action.payload.value
      return {
        ...state,
        errors: errors
      }
    case SETTINGS_AUDIT_SEND_CLIENT_INVITATION:
      return state;
    case SETTINGS_AUDIT_CLIENT_ADD_ANOTHER_USER:
      contact_person_list.push(action.payload.value);
      errors.push({
        company: {valid: false, message: '', touched: false, label: 'Company Name'},
        email: {valid: false, message: '', touched: false, label: 'Email'},
        lastName: {valid: false, message: '', touched: false, label: 'Last Name'},
        firstName: {valid: false, message: '', touched: false, label: 'First Name'}
      })
      return {
        ...state,
        contact_person_list:contact_person_list,
        errors: errors
      }
    case SETTINGS_AUDIT_CLIENT_GET_INITIAL_USER_LIST:
      persons = action.payload.value
      errors.push({
        company: {valid: false, message: '', touched: false, label: 'Company Name'},
        email: {valid: false, message: '', touched: false, label: 'Email'},
        lastName: {valid: false, message: '', touched: false, label: 'Last Name'},
        firstName: {valid: false, message: '', touched: false, label: 'First Name'}
      })
        return {
          ...state,
          persons: persons,
          errors:errors
        }
    case SETTINGS_AUDIT_CLIENT_EMAIL_CHANGE:
      contact_person_list[action.payload.index].email = action.payload.value;
      return {
        ...state,
        contact_person_list: contact_person_list
      }
    case SETTINGS_AUDIT_CLIENT_FIRSTNAME_CHANGE:
      contact_person_list[action.payload.index].firstName = action.payload.value;
      return {
        ...state,
        contact_person_list: contact_person_list
      }
    case SETTINGS_AUDIT_CLIENT_LASTNAME_CHANGE:
      contact_person_list[action.payload.index].lastName = action.payload.value;
      return {
        ...state,
        contact_person_list: contact_person_list
      }
    case SETTINGS_AUDIT_CLIENT_COMPANY_NAME_CHANGE:
      contact_person_list[action.payload.index].company = action.payload.value;
      return {
        ...state,
        contact_person_list: contact_person_list
      }
    default:
      return state
  }
}
