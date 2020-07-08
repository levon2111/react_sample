
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'
import LoginContainer from "../containers/auth/LoginContainer";

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: authData => !authData.isAuthenticated,
  redirectAction: routerActions.replace,
  FailureComponent: LoginContainer,
  failureRedirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false,
})

export const UserIsAdmin = UserAuthWrapper({
  authSelector: state => state.auth,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAdmin',
  predicate: authData => authData.user.role,
  allowRedirectBack: false
})
