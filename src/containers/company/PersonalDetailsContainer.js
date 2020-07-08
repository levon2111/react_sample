import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {PersonalDetails} from "../../components";
import * as PersonalDetailsActions from "../../actions/create_new_company/PersonalDetailsActions";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {personal_details_step_get_members} from "./queries/personal_details";


class PersonalDetailsContainer extends React.Component {

  static propTypes = {
    add_notification: PropTypes.func.isRequired,
    setMembersData: PropTypes.func.isRequired,
    onChangeMenuItem: PropTypes.func.isRequired,
    changeCompanyCreateStep: PropTypes.func.isRequired,
    setFillInDetailsMember: PropTypes.func.isRequired,
  };

  componentDidMount() {
    let id = localStorage.getItem('company_id');
    personal_details_step_get_members(id, this.props.setMembersData);
  }

  changeMenuItem = () => {
    this.props.onChangeMenuItem('contact_details')
  }

  onClickCorporateFillInDetails = (member,event) => {
    this.props.changeCompanyCreateStep('corporate_fill_in_details')
    this.props.setFillInDetailsMember(member)
  }

  onClickIndividualFillInDetails = () => {
    this.props.changeCompanyCreateStep('individual_fill_in_details')
  }

  render() {
    return (
      <PersonalDetails
        onClickIndividualFillInDetails={this.onClickIndividualFillInDetails}
        onClickCorporateFillInDetails={this.onClickCorporateFillInDetails}
        chnageMenuItem={this.changeMenuItem}
        corporate={this.props.personal_details.corporate_members}
        individual={this.props.personal_details.individual_members}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  personal_details: createSelector(
    (state) => state.personal_details,
    (PersonalDetailsState) => PersonalDetailsState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PersonalDetailsActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalDetailsContainer)
