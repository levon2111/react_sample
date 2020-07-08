import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as CorporateMemberFillInDetailsActions from "../../actions/create_new_company/CorporateMemberFillInDetailsActions";
import {createSelector, createStructuredSelector} from "reselect";
import {CorporateMemberFillInDetails} from "../../components/company/CorporateMemberFillInDetails";

class CorporateMemberFillInDetailsContainer extends React.Component {

  static propTypes = {
    // getInitialData: PropTypes.func,
  };

  componentDidMount() {

  }


  render() {
    return (
      <CorporateMemberFillInDetails />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  corporate_fill_in_details: createSelector(
    (state) => state.corporate_fill_in_details,
    (CorporateMemberFillInDetailsState) => CorporateMemberFillInDetailsState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CorporateMemberFillInDetailsActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CorporateMemberFillInDetailsContainer)
