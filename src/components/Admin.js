import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import NotificationContainer from "../containers/NotificationContainer";
import "babel-es6-polyfill";
import Header from "./Header";
import {AdminMenuContainer} from "../containers/index";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main-wrapper">
          <AdminMenuContainer />
          {this.props.children}
          <NotificationContainer />
        </section>
      </div>
    );
  }
}

Admin.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps
)(Admin);
