import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Login} from "../../components";
import * as LoginActions from "../../actions/login";
import {createSelector, createStructuredSelector} from "reselect";
import {client} from '../../apollo'
import gql from "graphql-tag"
import { browserHistory } from 'react-router';
import Validators from "../../services/Validators";

class LoginContainer extends React.Component {

  static propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    username_change: PropTypes.func.isRequired,
    password_change: PropTypes.func.isRequired,
    blurEmail: PropTypes.func.isRequired,
    add_notification: PropTypes.func.isRequired,
    history: PropTypes.object
  };

  login = () => {
    this.props.login()
  };

  logout = () => {
    this.props.logout()
  };

  onUsernameChange = (event) => {
    this.props.username_change(event.target.value)
  }

  onPasswordChange = (event) => {
    this.props.password_change(event.target.value)
  }

  onClickLogin = () => {

    client.mutate({
      mutation: gql`
        mutation loginUser($username: String!,$password:String!){
          loginUser(input: {
            email: $username,
            password: $password
          }) {
            ok,
            user {
              id,
              firstName,
              email,
              token
            }
          }
        }
      `,
      variables: {username: this.props.auth.user.username, password: this.props.auth.user.password}
    })
    .then(({data}) => {
        if (data.loginUser.ok === true) {
          localStorage.setItem('token', data.loginUser.user.token)
          localStorage.setItem('user', JSON.stringify(data.loginUser.user))
          this.props.login(data.loginUser.user)
          browserHistory.push('/admin/new-company');
        } else {
          localStorage.setItem('token', data.loginUser.user.token)
          this.props.add_notification('Check your user name and password, and try again.','warning',"<div><strong>sdfasfdasd</strong></div>");
        }
      }
    )
    .catch((err)=>{
      console.log(err)
      this.props.add_notification('Check your user name and password, and try again.', 'error');
    });
  }

  incrementIfOdd = () => {
    this.props.incrementIfOdd()
  };

  onBlurEmail = (event) => {
    let valid = Validators.email(event.target.value,"Email")
    this.props.blurEmail(valid)
  }

  render() {
    return (
      <Login
        error={this.props.auth.errors}
        onBlurEmail={this.onBlurEmail}
        data={this.props.auth.user}
        onClickLogin={this.onClickLogin}
        onUsernameChange={this.onUsernameChange}
        onPasswordChange={this.onPasswordChange}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  auth: createSelector(
    (state) => state.auth,
    (authState) => authState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer)
