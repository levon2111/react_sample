import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ActivitiesInformationActions from "../../actions/create_new_company/ActivitiesInformationActions";
import {createSelector, createStructuredSelector} from "reselect";
import {IndividualMemberFillInDetails} from "../../components/company/IndividualMemberFillInDetails";

class IndividualMemberFillInDetailsContainer extends React.Component {

  static propTypes = {
    // getInitialData: PropTypes.func,
  };

  componentDidMount() {

  }


  render() {
    return (
      <IndividualMemberFillInDetails />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  activities_information: createSelector(
    (state) => state.activities_information,
    (ActivitiesInformationState) => ActivitiesInformationState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActivitiesInformationActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndividualMemberFillInDetailsContainer)
