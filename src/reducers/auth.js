import {
  AUTH_BLUR_EMAIL,
  AUTH_ERROR,
  CHECK_IS_AUTH,
  LOG_IN,
  LOG_OUT,
  PASSWORD_CHANGE,
  USERNAME_CHANGE
} from "../constants/actionTypes";


const initialState = {
  errors: {
    email: {valid: false, message: '', touched: false, label: 'Email'},
    password: {valid: false, message: '', touched: false, label: 'Password'},
  },
  isAuthenticated: false,
  user: {
    id: null,
    firstName: null,
    lastName: null,
    username: '',
    password: '',
    token: '',
  },
}

export default function auth(state = initialState, action) {
  let errors = state.errors;
  switch (action.type) {
    case AUTH_BLUR_EMAIL:
      errors.email = action.payload.value
      return {
        ...state,
        errors: errors
      }
    case CHECK_IS_AUTH:
      let token = localStorage.getItem('token');
      let user = localStorage.getItem('user');
      if (token) {
        return {
          ...state,
          isAuthenticated: true,
          user: JSON.parse(user)
        }
      } else {
        return {
          ...state,
          isAuthenticated: false,
          user: {
            id: null,
            firstName: null,
            lastName: null,
            username: '',
            password: '',
            token: '',
          }
        }
      }
    case LOG_OUT:
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return Object.assign({}, state, {
        isAuthenticated: false,
        user: {
          id: null,
          firstName: null,
          lastName: null,
          username: '',
          password: '',
          token: '',
        }
      })
    case LOG_IN:
      return Object.assign({}, state, {
        isAuthenticated: true,
        user: action.payload.user
      })
    case AUTH_ERROR:
      return state - 1
    case USERNAME_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username
        }
      }
    case PASSWORD_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload.password
        }
      }
    default:
      return state
  }
}
