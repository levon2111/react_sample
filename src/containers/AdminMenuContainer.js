import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {AdminMenu} from "../components";
import * as AdminMenuActions from "../actions/AdminMenuActions";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from 'prop-types'
import { browserHistory } from 'react-router'

class AdminMenuContainer extends React.Component {

  static propTypes = {
    onChangeMenuItem: PropTypes.func.isRequired,
    onClickLogout: PropTypes.func.isRequired,
  };

  componentDidMount(){
    let path = window.location.href.split('/');
    let type = path[3];
    this.onClickMenuItem(type)
  }

  onClickMenuItem = (item, event) => {
    this.props.onChangeMenuItem(item)
  }

  logout = () => {
    this.props.onClickLogout(true)
    browserHistory.push('/')

  }
  render() {
    return (
        <AdminMenu
          logout={this.logout}
          active={this.props.admin_menu.menu_item}
          onClickMenuItem={this.onClickMenuItem}
        />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  admin_menu: createSelector(
    (state) => state.admin_menu,
    (AdminMenuState) => AdminMenuState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AdminMenuActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminMenuContainer)
