import React, {Component} from "react";
import {LoginContainer, NewCompanyMenuContainer} from "../containers";


import NotFound from "../components/NotFound";

import {browserHistory, IndexRoute, Route, Router} from "react-router";
import App from "../components/App";
import {UserAgentContainer, NomineeContainer, ClientUserContainer, CompaniesInProgressContainer, AuditClientContactPersonContainer, EmployeeContainer} from "../containers/index";

function checkLogin(nextState, replace) {
  const token = window.localStorage.getItem('token')
  if (!token) {
    replace('/')
  }
}

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={LoginContainer} />
          <Route path='/settings/agent' component={UserAgentContainer} onEnter={checkLogin} />
          <Route path='login' component={LoginContainer} />
          <Route path='/admin/new-company' component={NewCompanyMenuContainer} onEnter={checkLogin} />
          <Route path='/settings/nominee' component={NomineeContainer} onEnter={checkLogin} />
          <Route path='/settings/client-user' component={ClientUserContainer} onEnter={checkLogin} />
          <Route path='/settings/companies-in-progress' component={CompaniesInProgressContainer} onEnter={checkLogin} />
          <Route path='/settings/audit' component={AuditClientContactPersonContainer} onEnter={checkLogin} />
          <Route path='/settings/employee' component={EmployeeContainer} onEnter={checkLogin} />
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

export default Routes
