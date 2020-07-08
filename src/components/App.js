import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import NotificationContainer from "../containers/NotificationContainer";
import "babel-es6-polyfill";
import Header from "./Header";
import {AdminMenuContainer} from "../containers/index";
import ReduxModal from "react-redux-modal";
import {bindActionCreators} from "redux";
import * as LoginActions from "../actions/login";
import { browserHistory } from 'react-router'

class App extends React.Component {
  componentDidMount(){
    let token  = localStorage.getItem('token');
    this.props.checkAuth()
    if(token){
      if (location.pathname === "/"){
        browserHistory.push("admin/new-company")
      }else{
        browserHistory.push(window.location.href)
      }
    }
  }
  render() {
    let adminMenu = '';

    if (this.props.auth.user.id){
      adminMenu = <AdminMenuContainer/>;
    }else{
      adminMenu = '';
    }

    return (
      <div>
        <Header auth={this.props.auth.user.id} user={this.props.auth.user} />
        <section className="main-wrapper">
          {adminMenu}
          {this.props.children}
          <NotificationContainer />
          <ReduxModal />
        </section>
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.element,
  checkAuth: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


