import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import * as HeaderMenuActions from "../../actions/settings/HeaderMenuActions";
import {HeaderMenu} from "../../components/index";

class HeaderMenuContainer extends React.Component {

  static propTypes = {
    chnageHeaderMenu: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if(!localStorage.getItem('settings_active_menu')){
      localStorage.setItem('settings_active_menu','users')
    }
    this.props.chnageHeaderMenu(localStorage.getItem('settings_active_menu'))
  }


  onChangeHeaderMenu = (item, event) => {
    localStorage.setItem('settings_active_menu',item)
    this.props.chnageHeaderMenu(item)
  }

  render() {
    return (
      <HeaderMenu
        active={localStorage.getItem('settings_active_menu')}
        onChangeHeaderMenu={this.onChangeHeaderMenu}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  settings_header_menu: createSelector(
    (state) => state.settings_header_menu,
    (SettingsHeaderState) => SettingsHeaderState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HeaderMenuActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenuContainer)
