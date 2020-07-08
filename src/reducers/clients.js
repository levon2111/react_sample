import {
  CLIENT_ADD_ANOTHER_USER,
  CLIENT_EMAIL_CHANGE,
  CLIENT_FIRSTNAME_CHANGE,
  CLIENT_GET_INITIAL_USER_LIST,
  CLIENT_LASTNAME_CHANGE,
  CLIENT_ON_CLICK_EDIT_USER,
  SEND_CLIENT_INVITATION,
  CLIENT_COMPANY_NAME_CHANGE,
  EDIT_CLIENT_EMAIL,
  EDIT_CLIENT_FIRSTNAME,
  EDIT_CLIENT_LASTNAME,
  EDIT_CLIENT_COMPANY_NAME,
  CHANGE_USER_DATA,
  BLUR_NEW_CLIENT_LIST_FIRST_NAME,
  BLUR_NEW_CLIENT_LIST_COMPANY_NAME,
  BLUR_NEW_CLIENT_LIST_EMAIL,
  BLUR_NEW_CLIENT_LIST_LAST_NAME,
  SETTINGS_CLIENT_USER_DELETE_USER,

} from '../constants/actionTypes'

const initialState = {
  errors:{
    new_clients_list:[]
  },
  clients_list:[],
  new_clients_list:[],
  edit_user_data:{
    id:'',
    email:'',
    firstName:'',
    lastName:'',
    company:'',
  }
}

export default function clients_list(state = initialState, action) {
  let new_clients_list = state.new_clients_list
  let errors = state.errors;
  switch (action.type) {
    case SETTINGS_CLIENT_USER_DELETE_USER:
      errors.new_clients_list.splice(action.payload.index, action.payload.index)
      new_clients_list.splice(action.payload.index, action.payload.index)
      return {
        ...state,
        errors: errors,
        new_clients_list: new_clients_list
      }
    case EDIT_CLIENT_EMAIL:
      return {
        ...state,
        edit_user_data: {
          ...state.edit_user_data,
          email: action.payload.email,
        }
      }
    case EDIT_CLIENT_FIRSTNAME:
      return {
        ...state,
        edit_user_data: {
          ...state.edit_user_data,
          firstName: action.payload.name,
        }
      }
    case EDIT_CLIENT_LASTNAME:
      return {
        ...state,
        edit_user_data: {
          ...state.edit_user_data,
          lastName: action.payload.name,
        }
      }
    case EDIT_CLIENT_COMPANY_NAME:
      return {
        ...state,
        edit_user_data: {
          ...state.edit_user_data,
          company: action.payload.name,
        }
      }
    case CLIENT_GET_INITIAL_USER_LIST:
      return {
        ...state,
        clients_list:action.payload.users
      }
    case CLIENT_EMAIL_CHANGE:
      new_clients_list[action.payload.index].email=action.payload.email
      return {
        ...state,
        new_clients_list:new_clients_list
      }
    case CLIENT_FIRSTNAME_CHANGE:
      new_clients_list[action.payload.index].firstName=action.payload.name
      return {
        ...state,
        new_clients_list:new_clients_list
      }
    case CLIENT_LASTNAME_CHANGE:
      new_clients_list[action.payload.index].lastName=action.payload.name
      return {
        ...state,
        new_clients_list:new_clients_list
      }
    case CLIENT_COMPANY_NAME_CHANGE:
      new_clients_list[action.payload.index].company=action.payload.name
      return {
        ...state,
        new_clients_list:new_clients_list
    }
    case BLUR_NEW_CLIENT_LIST_FIRST_NAME:
      errors.new_clients_list[action.payload.index].firstName = action.payload.valid;
      return {
        ...state,
        errors: errors
    }
    case BLUR_NEW_CLIENT_LIST_COMPANY_NAME:
      errors.new_clients_list[action.payload.index].company = action.payload.valid;
      return {
        ...state,
        errors: errors
    }
    case BLUR_NEW_CLIENT_LIST_LAST_NAME:
      errors.new_clients_list[action.payload.index].lastName = action.payload.valid;
      return {
        ...state,
        errors: errors
    }
    case BLUR_NEW_CLIENT_LIST_EMAIL:
      errors.new_clients_list[action.payload.index].email = action.payload.valid;
      return {
        ...state,
        errors: errors
    }
    case CLIENT_ADD_ANOTHER_USER:
      new_clients_list.push(action.payload.user)
       errors.new_clients_list.push(
        {
          email: {valid: false, message: '', touched: false, label: 'Email'},
          firstName: {valid: false, message: '', touched: false, label: 'First Name'},
          lastName: {valid: false, message: '', touched: false, label: 'Last Name'},
          company: {valid: false, message: '', touched: false, label: 'Company'}
        }
      );
      return {
        ...state,
        errors:errors,
        new_clients_list: new_clients_list
      }

    case CLIENT_ON_CLICK_EDIT_USER:
      return {
        ...state,
        edit_user_data: {
          ...state.edit_user_data,
          firstName: action.payload.user.firstName,
          lastName: action.payload.user.lastName,
          id: action.payload.user.id,
          email: action.payload.user.email,
          company: action.payload.user.client ? action.payload.user.client.name : '',
          position: action.payload.user.position
        }
      }
    case CHANGE_USER_DATA:
      const updatedItems = state.clients_list.map(item => {
        if(item.id === action.payload.id){
          return { ...item, ...action.payload }
        }
        return item
      })
      return {
        ...state,
        clients_list: updatedItems
      }

    case SEND_CLIENT_INVITATION:
          return state
    default:
      return state
  }
}
