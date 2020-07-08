import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {NewCompanyMenu} from "../components";
import * as NewCompanyMenuActions from "../actions/create_new_company/newCompanyMenuActions";
import {createSelector, createStructuredSelector} from "reselect";
import {
  ActivitiesInformationContainer,
  ContactDetailsContainer,
  OrganisationDetailsContainer,
  PersonalDetailsContainer
} from "./index";
import CorporateMemberFillInDetailsContainer from "./company/CorporateMemberFillInDetailsContainer";
import IndividualMemberFillInDetailsContainer from "./company/IndividualMemberFillInDetailsContainer";

class NewCompanyMenuContainer extends React.Component {

  static propTypes = {
    onChangeMenu: PropTypes.func.isRequired,
  };

  onClickOrganisationDetails = () => {
    this.props.onChangeMenu('organisation_details');
  }
  onClickPersonalDetails = () => {
    this.props.onChangeMenu('personal_details');
  }
  onClickContactDetails = () => {
    this.props.onChangeMenu('contact_details');
  }
  onClickActivitiesInformation = () => {
    this.props.onChangeMenu('activities_information');
  }

  render() {
    let template;
    switch (this.props.new_company_menu.activeItem) {
      case 'organisation_details':
        template = <OrganisationDetailsContainer />
        break;
      case 'personal_details':
        template = <PersonalDetailsContainer />
        break;
      case 'contact_details':
        template = <ContactDetailsContainer />
        break;
      case 'activities_information':
        template = <ActivitiesInformationContainer />
        break;
      case 'corporate_fill_in_details':
        template = <CorporateMemberFillInDetailsContainer />
        break;
      case 'individual_fill_in_details':
        template = <IndividualMemberFillInDetailsContainer />
        break;
      default:
        template = <OrganisationDetailsContainer />
        break;
    }
    return (
      <NewCompanyMenu
        template={template}
        activeItem={this.props.new_company_menu.activeItem}
        onClickOrganisationDetails={this.onClickOrganisationDetails}
        onClickPersonalDetails={this.onClickPersonalDetails}
        onClickContactDetails={this.onClickContactDetails}
        onClickActivitiesInformation={this.onClickActivitiesInformation}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  new_company_menu: createSelector(
    (state) => state.new_company_menu,
    (NewCompanyMenuState) => NewCompanyMenuState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NewCompanyMenuActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewCompanyMenuContainer)
