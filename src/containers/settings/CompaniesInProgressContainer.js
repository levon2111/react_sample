import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";


import {CompaniesInProgress} from "../../components";
import * as UserAgentActions from "../../actions/settings/UserAgentActions";
class CompaniesInProgressContainer extends React.Component {

  static propTypes = {
    // changeUMAUser: PropTypes.func.isRequired
  };

  render() {
    return (
      <CompaniesInProgress />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  agents_list: createSelector(
    (state) => state.agents_list,
    (UserAgentState) => UserAgentState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserAgentActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompaniesInProgressContainer)
