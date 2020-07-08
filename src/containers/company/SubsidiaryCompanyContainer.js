import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as SubsidiaryCompanyActions from "../../actions/create_new_company/SubsidiaryCompanyActions";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import Validators from "../../services/Validators";
import {SubsidiaryCompany} from "../../components/company/SubsidiaryCompany";
import {SubsidiaryCompanyShareCapital} from "../../components/company/SubsidiaryCompanyShareCapital";


class SubsidiaryCompanyContainer extends React.Component {

  static propTypes = {
    addSubsidiaryCompany: PropTypes.func.isRequired,
    changeSubsidiaryCompanyName: PropTypes.func.isRequired,
    blurSubsidiaryCompanyName: PropTypes.func.isRequired,
    changeRegistrationNumber: PropTypes.func.isRequired,
    blurSubsidiaryCompanyRegistrationNumber: PropTypes.func.isRequired,
    changeDomicile: PropTypes.func.isRequired,
    blurSubsidiaryCompanyDomicile: PropTypes.func.isRequired,
    changeAddress: PropTypes.func.isRequired,
    blurSubsidiaryCompanyAddress: PropTypes.func.isRequired,
    changeActivity: PropTypes.func.isRequired,
    blurSubsidiaryCompanyActivity: PropTypes.func.isRequired,
    addShareCapitalToSubsidiaryCompany: PropTypes.func.isRequired,
    subsidiaryCompanyShareNumberChamge: PropTypes.func.isRequired,
    blurSubsidiaryCompanyShareCapitalNumberOfShares: PropTypes.func.isRequired,
    changeShareCapital: PropTypes.func.isRequired,
    onChangeShareCapitalClassNameOfShares: PropTypes.func.isRequired,
    blurSubsidiaryCompanyShareCapitalClassOfShare: PropTypes.func.isRequired,
    onChangeShareCapitalChangeValuePerShare: PropTypes.func.isRequired,
    blurSubsidiaryCompanyShareCapitalValuePerShare: PropTypes.func.isRequired,
    onChangeShareCapitalChangePaidUp: PropTypes.func.isRequired,
    blurSubsidiaryCompanyShareCapitalPaidUp: PropTypes.func.isRequired,
    deleteShareCapital: PropTypes.func.isRequired,
    onClickDeleteSubsidiaryCompany: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (!this.props.activities_information.subsidiary_companies.length) {
      this.onClickAddSubsidiaryCompany()
    }
  }

  onClickAddSubsidiaryCompany = () => {
    this.props.addSubsidiaryCompany()
  }

  onChangeCompanyName = (index, event) => {
    this.props.changeSubsidiaryCompanyName(index, event.target.value)
  }

  checkCompanyName = (index, event) => {
    let valid = Validators.required(event.target.value, "Company Name")
    this.props.blurSubsidiaryCompanyName(index, valid)
  }

  onChangeRegistrartionNumber = (index, event) => {
    this.props.changeRegistrationNumber(index, event.target.value)
  }

  checkRegistrationNumber = (index, event) => {
    let valid = Validators.required(event.target.value, "Registration Number")
    this.props.blurSubsidiaryCompanyRegistrationNumber(index, valid)
  }

  checkDomicile = (index, event) => {
    let valid = Validators.required(event.target.value, "Domicile")
    this.props.blurSubsidiaryCompanyDomicile(index, valid)
  }

  checkAddress = (index, event) => {
    let valid = Validators.required(event.target.value, "Address")
    this.props.blurSubsidiaryCompanyAddress(index, valid)
  }

  checkActivity = (index, event) => {
    let valid = Validators.required(event.target.value, "Activity")
    this.props.blurSubsidiaryCompanyActivity(index, valid)
  }

  onChangeDomicile = (index, event) => {
    this.props.changeDomicile(index, event.target.value)
  }

  onChangeAddress = (index, event) => {
    this.props.changeAddress(index, event.target.value)
  }

  onChangeActivity = (index, event) => {
    this.props.changeActivity(index, event.target.value)
  }

  addShareCapital = (index) => {
    this.props.addShareCapitalToSubsidiaryCompany(index)
  }

  changeNumberOfShares = (x, y, event) => {
    this.props.subsidiaryCompanyShareNumberChamge(x, y, event.target.value)
  }

  onBlurNumberOfShares = (x, y, event) => {
    let valid = Validators.required(event.target.value, "Number Of Shares");
    this.props.blurSubsidiaryCompanyShareCapitalNumberOfShares(x, y, valid)
  }

  blurValuePerShare = (x, y, event) => {
    let valid = Validators.required(event.target.value, "Value Per Share");
    this.props.blurSubsidiaryCompanyShareCapitalValuePerShare(x, y, valid)
  }

  onChangeShareType = (x, y, event) => {
    this.props.changeShareCapital(x, y, event.value)
  }

  changeClassNameOfShares = (x, y, event) => {
    this.props.onChangeShareCapitalClassNameOfShares(x, y, event.target.value)
  }

  blurClassOfShare = (x, y, event) => {
    let valid = Validators.required(event.target.value, "Class Of Share");
    this.props.blurSubsidiaryCompanyShareCapitalClassOfShare(x, y, valid)
  }

  changeValuePerShares = (x, y, event) => {
    this.props.onChangeShareCapitalChangeValuePerShare(x, y, event.target.value)
  }

  changePaidUp = (x, y, event) => {
    this.props.onChangeShareCapitalChangePaidUp(x, y, event.target.value)
  }

  blurPaidUp = (x, y, event) => {
    let valid = Validators.required(event.target.value, "Paid Up");
    this.props.blurSubsidiaryCompanyShareCapitalPaidUp(x, y, valid)
  }
  addShareCapitalClick = (index, event) => {
    this.addShareCapital(index);
  }

  deleteShareCapital = (x, y, event) => {
    this.props.deleteShareCapital(x,y)
  }

  deleteSubsidiaryCompany = (index, event) => {
    this.props.onClickDeleteSubsidiaryCompany(index)
  }

  render() {
    let state_companies = this.props.activities_information.subsidiary_companies;
    let companies_template = [];
    let shareTypeOptions = [];
    let stateshareTypeOptions = this.props.activities_information.share_types;
    if (stateshareTypeOptions.length) {
      for (let i = 0; i < stateshareTypeOptions.length; i++) {
        shareTypeOptions.push({value: stateshareTypeOptions[i].id, label: stateshareTypeOptions[i].name})
      }
    }
    for (let i = 0; i < state_companies.length; i++) {
      let subsidiary_company_share_capital_components = [];
      let share_capitals = this.props.activities_information.subsidiary_companies[i].share_capital;
      if (share_capitals.length) {
        for (let j = 0; j < share_capitals.length; j++) {
          if (share_capitals[j]) {
            subsidiary_company_share_capital_components.push(
              <SubsidiaryCompanyShareCapital
                blurPaidUp={this.blurPaidUp}
                deleteShareCapital={this.deleteShareCapital}
                changePaidUp={this.changePaidUp}
                changeValuePerShares={this.changeValuePerShares}
                blurValuePerShare={this.blurValuePerShare}
                blurClassOfShare={this.blurClassOfShare}
                changeClassNameOfShares={this.changeClassNameOfShares}
                onChangeShareType={this.onChangeShareType}
                changeNumberOfShares={this.changeNumberOfShares}
                onBlurNumberOfShares={this.onBlurNumberOfShares}
                error={this.props.activities_information.errors.subsidiary_companies[i].share_capital[j]}
                key={j}
                data={share_capitals[j]}
                flag={false}
                shareIndex={j}
                index={i}
                shareTypeOptions={shareTypeOptions}
              />
            )
          }
        }
      } else {
        this.addShareCapital(i);
        subsidiary_company_share_capital_components.push(
          <SubsidiaryCompanyShareCapital
            blurPaidUp={this.blurPaidUp}
            deleteShareCapital={this.deleteShareCapital}
            changeValuePerShares={this.changeValuePerShares}
            changePaidUp={this.changePaidUp}
            blurClassOfShare={this.blurClassOfShare}
            blurValuePerShare={this.blurValuePerShare}
            changeClassNameOfShares={this.changeClassNameOfShares}
            onChangeShareType={this.onChangeShareType}
            changeNumberOfShares={this.changeNumberOfShares}
            onBlurNumberOfShares={this.onBlurNumberOfShares}
            error={this.props.activities_information.errors.subsidiary_companies[0].share_capital[0]}
            data={share_capitals[0]}
            key={999999}
            flag={true}
            shareIndex={0}
            index={i}
            shareTypeOptions={shareTypeOptions}
          />
        )
      }


      companies_template.push(
        <SubsidiaryCompany
          subsidiary_company_share_capital_components={subsidiary_company_share_capital_components}
          errors={this.props.activities_information.errors.subsidiary_companies[i]}
          addShareCapitalClick={this.addShareCapitalClick}
          checkCompanyName={this.checkCompanyName}
          deleteSubsidiaryCompany={this.deleteSubsidiaryCompany}
          onChangeAddress={this.onChangeAddress}
          checkActivity={this.checkActivity}
          checkAddress={this.checkAddress}
          onChangeActivity={this.onChangeActivity}
          checkDomicile={this.checkDomicile}
          onChangeDomicile={this.onChangeDomicile}
          checkRegistrationNumber={this.checkRegistrationNumber}
          onChangeRegistrartionNumber={this.onChangeRegistrartionNumber}
          onChangeCompanyName={this.onChangeCompanyName}
          data={state_companies[i]}
          key={i}
          index={i}
        />
      )
    }
    return (
      <div>
        {companies_template}
      </div>
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
  return bindActionCreators(SubsidiaryCompanyActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubsidiaryCompanyContainer)
