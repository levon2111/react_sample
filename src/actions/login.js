import { LOG_IN, LOG_OUT,ADD_NOTIFICATION, AUTH_ERROR,USERNAME_CHANGE,PASSWORD_CHANGE,CHECK_IS_AUTH ,AUTH_BLUR_EMAIL} from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const login = createAction(LOG_IN,(user) => ({user}))

export const logout = createAction(LOG_OUT)
export const username_change = createAction(USERNAME_CHANGE,(username)=>({username}))
export const password_change = createAction(PASSWORD_CHANGE,(password)=>({password}))

export const auth_error = createAction(AUTH_ERROR)
export const add_notification = createAction(ADD_NOTIFICATION,(message,level,children) =>({message,level,children}))
export const checkAuth = createAction(CHECK_IS_AUTH,(message,level) =>({message,level}))
export const blurEmail = createAction(AUTH_BLUR_EMAIL,(value) =>({value}))
