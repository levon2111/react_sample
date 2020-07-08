import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {OrganisationDetails} from "../../components";
import * as OrganisationDetailsActions from "../../actions/create_new_company/OrganisationDetailsActions";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {client} from "../../apollo";
import gql from "graphql-tag";
import {NewCompanyMenuContainer} from "../index";
import {AuthorisedShareCapital} from "../../components/company/AuthorisedShareCapital";
import {CorporateMember} from "../../components/company/CorporateMember";
import {IndividualMember} from "../../components/company/IndividualMember";
import {modal} from 'react-redux-modal'
import {AddUser} from "../../components/modals/AddUser";
import {
  organisation_details_initial_data_query,
  organisation_details_company_data
} from './queries/organisation_details';

import Validators from '../../services/Validators';

class OrganisationDetailsContainer extends React.Component {

  static propTypes = {
    getInitialData: PropTypes.func,
    changeUMAUser: PropTypes.func.isRequired,
    changeProposedCompany: PropTypes.func.isRequired,
    onChangeAgent: PropTypes.func.isRequired,
    changeAuthorisedPerson: PropTypes.func.isRequired,
    changeBeneficialOwner: PropTypes.func.isRequired,
    changeProposedCompanyAbbreviation: PropTypes.func.isRequired,
    ChangeCompanyType: PropTypes.func.isRequired,
    ChangeClientUser: PropTypes.func.isRequired,
    onClickAddCorporateMember: PropTypes.func.isRequired,
    changeCorporateMemberNominee: PropTypes.func.isRequired,
    changeCorporateMemberCompanyName: PropTypes.func.isRequired,
    changeCorporateMemberShareholder: PropTypes.func.isRequired,
    onClickDeleteCorporateMember: PropTypes.func.isRequired,
    onClickAddIndividualMember: PropTypes.func.isRequired,
    changeIndividualMemberNominee: PropTypes.func.isRequired,
    changeIndividualMemberName: PropTypes.func.isRequired,
    changeIndividualMemberShareholder: PropTypes.func.isRequired,
    onClickDeleteIndividualMember: PropTypes.func.isRequired,
    changeAddressService: PropTypes.func.isRequired,
    changeCompanyOtherAddress: PropTypes.func.isRequired,
    changeTradingActivity: PropTypes.func.isRequired,
    onClickAddShareCapital: PropTypes.func.isRequired,
    changeShareType: PropTypes.func.isRequired,
    onClickDeleteAuthorisedShareCapital: PropTypes.func.isRequired,
    onChangeNumberOfShares: PropTypes.func.isRequired,
    changeValuePerShare: PropTypes.func.isRequired,
    onChangeClassNameOfShares: PropTypes.func.isRequired,
    editNewUserEmail: PropTypes.func.isRequired,
    editNewUserFirstName: PropTypes.func.isRequired,
    editNewUserLastName: PropTypes.func.isRequired,
    clickInviteUser: PropTypes.func.isRequired,
    setInitialData: PropTypes.func.isRequired,
    add_notification: PropTypes.func.isRequired,
    onBlurProposedCompanyName: PropTypes.func.isRequired,
    onBlurProposedAbbreviation: PropTypes.func.isRequired,
    onBlurAuthorisedPerson: PropTypes.func.isRequired,
    onBlurBeneficialOwner: PropTypes.func.isRequired,
    onBlurAgent: PropTypes.func.isRequired,
    onBlurTradingActivity: PropTypes.func.isRequired,
    onBlurOtherAddresses: PropTypes.func.isRequired,
    onBlurAddressService: PropTypes.func.isRequired,
    setCorporateMembersError: PropTypes.func.isRequired,
    onBlurCorporateMemberCompany: PropTypes.func.isRequired,
    onBlurCorporateMemberTypes: PropTypes.func.isRequired,
    onBlurCorporateMemberNominee: PropTypes.func.isRequired,
    setIndividualMemberErrors: PropTypes.func.isRequired,
    onBlurIndividualMemberNameSurname: PropTypes.func.isRequired,
    onBlurIndividualMemberNominee: PropTypes.func.isRequired,
    onBlurIndividualMemberTypes: PropTypes.func.isRequired,
    setAuthorisedShareCapitalErrors: PropTypes.func.isRequired,
    blurNumberOfShares: PropTypes.func.isRequired,
    onBlurClassOfShares: PropTypes.func.isRequired,
    onBlurValuePerShares: PropTypes.func.isRequired,
    onBlurTypeOfShares: PropTypes.func.isRequired,
    changeStepToPersonal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    organisation_details_initial_data_query(this.props.getInitialData)
    if (localStorage.getItem('company_id')){
      organisation_details_company_data(localStorage.getItem('company_id'),this.props.setInitialData)
    }
  }

  componentWillMount(){
    if(this.props.organisation_details.corporate_members.length){
      this.setCorporateMemberErrors(this.props.organisation_details.corporate_members.length);
    }

    if(this.props.organisation_details.individual_members.length){
      this.props.setIndividualMemberErrors(this.props.organisation_details.individual_members.length);
    }

    if (this.props.organisation_details.authorised_share_capital.length){
      this.props.setAuthorisedShareCapitalErrors(this.props.organisation_details.authorised_share_capital.length);
    }

  }
  onChangeUMAUser = (event) => {
    this.props.changeUMAUser(event.value)
  }

  onChangeProposedCompanyName = (event) => {
    this.props.changeProposedCompany(event.target.value)
  }

  onChangeAgent = (event) => {
    this.props.onChangeAgent(event.value)
  }

  onChangeAuthorisedPerson = (event) => {
    this.props.changeAuthorisedPerson(event.target.value)
  }

  onChangeBeneficialOwner = (event) => {
    this.props.changeBeneficialOwner(event.target.value)
  }

  onChangeProposedCompanyAbbreviation = (event) => {
    this.props.changeProposedCompanyAbbreviation(event.value)
  }

  onChangeCompanyType = (event) => {
    this.props.ChangeCompanyType(event.value)
  }

  onChangeClientUser = (event) => {
    this.props.ChangeClientUser(event.value)
  }

  addCorporateMember = (event) => {
    this.props.onClickAddCorporateMember(true)
  }

  onChangeTradingActivity = (event) => {
    this.props.changeTradingActivity(event.target.value)
  }

  onChangeAddressService = (event) => {
    this.props.changeAddressService(event.value)
  }

  addIndividualMember = (event) => {
    this.props.onClickAddIndividualMember(true)
  }

  onChnageCompanyOtherAddress = (event) => {
    this.props.changeCompanyOtherAddress(event.target.value)
  }

  onChangeCorporateMemberNominee = (index, event) => {
    this.props.changeCorporateMemberNominee(index, event.value)
  }

  onChangeIndividualMemberNominee = (index, event) => {
    this.props.changeIndividualMemberNominee(index, event.value)
  }

  onChangeCorporateMemberCompanyName = (index, event) => {
    this.props.changeCorporateMemberCompanyName(index, event.target.value)
  }

  onChangeIndividualMemberName = (index, event) => {
    this.props.changeIndividualMemberName(index, event.target.value)
  }

  onChangeCorporateMemberShareholder = (index, type, event) => {
    this.props.changeCorporateMemberShareholder(index, type)
  }

  onChangeIndividualMemberShareholder = (index, type, event) => {
    this.props.changeIndividualMemberShareholder(index, type)
  }

  deleteCorporateMember = (index, event) => {
    this.props.onClickDeleteCorporateMember(index)
  }

  deleteIndividualMember = (index, event) => {
    this.props.onClickDeleteIndividualMember(index)
  }

  addShareCapital = (event) => {
    this.props.onClickAddShareCapital(true)
  }

  onChangeShareType = (index, event) => {
    this.props.changeShareType(index, event.value)
  }

  deleteAuthorisedShareCapital = (index, event) => {
    this.props.onClickDeleteAuthorisedShareCapital(index)
  }

  changeNumberOfShares = (index, event) => {
    this.props.onChangeNumberOfShares(index, event.target.value)
  }

  changeValuePerShares = (index, event) => {
    this.props.changeValuePerShare(index, event.target.value)
  }
  changeClassNameOfShares = (index, event) => {
    this.props.onChangeClassNameOfShares(index, event.target.value)
  }

  typesIsInvalid = (param) => {
    for(let property in param){
        if (param[property] === true) return false;
    }
    return true;
  }

  newOrganizationStateValidation = () => {
    let validation_error = false;
    let corporate_members_errors = this.props.organisation_details.errors.corporate_members;
    let corporate_members = this.props.organisation_details.corporate_members;
    let individual_members_errors = this.props.organisation_details.errors.individual_members;
    let individual_members = this.props.organisation_details.individual_members;
    let authorised_share_capital = this.props.organisation_details.authorised_share_capital;
    let share_capital_errors = this.props.organisation_details.errors.authorised_share_capital;
    let organization_data = this.props.organisation_details.organisation_details;
    let organization_data_errors = this.props.organisation_details.errors;
    for(let i=0; i< corporate_members.length; i++){
      if(!corporate_members[i].nominee && !corporate_members[i].companyName){
        validation_error = true;
        let valid = Validators.required('',corporate_members_errors[i].companyName.label)
        this.props.onBlurCorporateMemberCompany(i,valid)
        valid = Validators.required('',corporate_members_errors[i].nominee.label)
        this.props.onBlurCorporateMemberNominee(i,valid)
      }
      if(this.typesIsInvalid(corporate_members[i].types)){
        let valid = Validators.required('',corporate_members_errors[i].types.label)
        this.props.onBlurCorporateMemberTypes(i,valid)
      }
    }

    for(let i=0; i< individual_members.length; i++){
      if(!individual_members[i].nominee && !individual_members[i].companyName){
        validation_error = true;
        let valid = Validators.required('','Name Surname')
        this.props.onBlurIndividualMemberNameSurname(i,valid)
        valid = Validators.required('',individual_members_errors[i].nominee.label)
        this.props.onBlurIndividualMemberNominee(i,valid)
      }
      if(this.typesIsInvalid(individual_members[i].types)){
        let valid = Validators.required('',individual_members_errors[i].types.label)
        this.props.onBlurIndividualMemberTypes(i,valid)
      }
    }

    for(let i=0; i< authorised_share_capital.length; i++){
      if(!authorised_share_capital[i].numberOfShares){
        validation_error = true;
        let valid = Validators.required('',share_capital_errors[i].numberOfShares.label)
        this.props.blurNumberOfShares(i,valid)
      }
      if(!authorised_share_capital[i].typeOfShare){
        validation_error = true;
        let valid = Validators.required('',share_capital_errors[i].typeOfShare.label)
        this.props.onBlurTypeOfShares(i,valid)
      }
      if(!authorised_share_capital[i].classOfShare){
        validation_error = true;
        let valid = Validators.required('',share_capital_errors[i].classOfShare.label)
        this.props.onBlurClassOfShares(i,valid)
      }
      if(!authorised_share_capital[i].valuePerShare){
        validation_error = true;
        let valid = Validators.required('',share_capital_errors[i].valuePerShare.label)
        this.props.onBlurValuePerShares(i,valid)
      }
    }

    if(!organization_data.agent){
      validation_error = true;
      let valid = Validators.required('',organization_data_errors.agent.label)
      this.props.onBlurAgent(valid)
    }
    if(!organization_data.authorised_person){
      validation_error = true;
      let valid = Validators.required('',organization_data_errors.authorised_person.label)
      this.props.onBlurAuthorisedPerson(valid)
    }
    if(!organization_data.beneficial_owner){
      validation_error = true;
      let valid = Validators.required('',organization_data_errors.beneficial_owner.label)
      this.props.onBlurBeneficialOwner(valid)
    }
    if(!organization_data.company_other_address && !organization_data.company_address_service){
      validation_error = true;
      let valid = Validators.required('',organization_data_errors.company_other_address.label)
      this.props.onBlurOtherAddresses(valid)
      valid = Validators.required('',organization_data_errors.company_address_service.label)
      this.props.onBlurAddressService(valid)
    }
    if(!organization_data.trading_activity){
      validation_error = true;
      let valid = Validators.required('',organization_data_errors.trading_activity.label)
      this.props.onBlurTradingActivity(valid)
    }
    if(!organization_data.proposed_company_name){
      validation_error = true;
      let valid = Validators.required('',organization_data_errors.proposed_company_name.label)
      this.props.onBlurProposedCompanyName(valid)
    }
    if(!organization_data.proposed_company_abbreviation){
      validation_error = true;
      let valid = Validators.required('',organization_data_errors.proposed_company_abbreviation.label)
      this.props.onBlurProposedAbbreviation(valid)
    }
    return validation_error
  }


  onClickSaveOrganization = (e) => {

    if(this.newOrganizationStateValidation()){
      return false
    }

    let organization_mutate_data = Object.assign({},this.props.organisation_details.organisation_details);
    let organization_mutate_lists = Object.assign({},this.props.organisation_details);

    let members_to_create = [];
    let members = organization_mutate_lists.corporate_members.concat(organization_mutate_lists.individual_members);
    let member_types = organization_mutate_lists.member_types;
    for(let i=0; i < members.length; i++){
      let member_to_create = {
        memberTypes: [],
        nominee: members[i].nominee,
        position:members[i].position,
        companyName:members[i].companyName
      };
      members_to_create.push(member_to_create)
      let type_ids = []
      for(let property in members[i]['types']){
          if(members[i]['types'][property]){
            for(let j=0; j < member_types.length; j++){
              if(member_types[j][property])
                type_ids.push(member_types[j][property])
            }
          }
      }
      members_to_create[i]['memberTypes'] = type_ids;
    }
    client.mutate({
      mutation: gql`
        mutation addOrganization($organizationDetails:OrganizationInput){
          addOrganization(organizationDetails:$organizationDetails){
            company{
              id
            }
          }
        }
      `,
      variables: {
        organizationDetails: {
          'name': organization_mutate_data.proposed_company_name,
          'abbreviation': organization_mutate_data.proposed_company_abbreviation,
          'userId': organization_mutate_data.client_user,
          'uma': organization_mutate_data.uma_user,
          'agentId': organization_mutate_data.agent,
          'authorisedPerson': organization_mutate_data.authorised_person,
          'ultimateOwner': organization_mutate_data.beneficial_owner,
          'companyType': organization_mutate_data.company_type,
          'shareCapital': organization_mutate_lists.authorised_share_capital,
          'members': members_to_create,
          'registeredAddress': {
            tradingActivity: organization_mutate_data.trading_activity,
            otherAddress: organization_mutate_data.company_other_address,
            addressService: organization_mutate_data.company_address_service
          },
        }
      }
    }).then(({data}) => {
        localStorage.setItem('company_id',data.addOrganization.company.id)
        this.props.add_notification("Company Successfully created", 'success')
      }
    )
    .catch((err) => {
      console.log(err)
    });
  }

  openAddUserModal = (event) => {
    modal.add(AddUser, {
      title: 'Add new user',
      size: 'large',
      closeOnOutsideClick: true ,
      hideTitleBar: true ,
      hideCloseButton: false,
      data: this.props.organisation_details.new_user,
      onEditEmail :this.onEditNewUserEmail,
      onEditFirstName:this.onEditNewUserFirstName,
      onEditLastName:this.onEditNewUserLastName,
      onClickInvite:this.onClickInviteNewUser
    });
  }

  onEditNewUserEmail = (event) => {
    this.props.editNewUserEmail(event.target.value)
  }

  onEditNewUserFirstName = (event) => {
    this.props.editNewUserFirstName(event.target.value)
  }

  onEditNewUserLastName = (event) => {
    this.props.editNewUserLastName(event.target.value)
  }

  onClickInviteNewUser = (event) => {
    client.mutate({
      mutation: gql`
         mutation addUser($addUserData:[UserInput]){
          addUser(addUserData:$addUserData){
            user{
              id,
              firstName,
              lastName
            }
          }
        }   
      `,
      variables: {
        addUserData: [this.props.organisation_details.new_user]
      }
    }).then(({data}) => {
        this.props.clickInviteUser(true , data.addUser.user)
        this.props.add_notification("User has been Invited Successfully","success")
        modal.clear();
      }
    )
    .catch((err) => {
      this.props.add_notification("Email must be unique","warning")
    });
  }

  checkCompanyName = (event) => {
    let valid = Validators.required(event.target.value,"Company Name")
    this.props.onBlurProposedCompanyName(valid)
  }

  checkTradingActivity = (event) => {
    let valid = Validators.required(event.target.value,"Trading Activity")
    this.props.onBlurTradingActivity(valid)
  }

  checkAuthorisedPerson = (event) => {
    let valid = Validators.required(event.target.value,"Authorised Person")
    this.props.onBlurAuthorisedPerson(valid)
  }

  checkBeneficialOwner = (event) => {
    let valid = Validators.required(event.target.value,"Benefical Owner")
    this.props.onBlurBeneficialOwner(valid)
  }

  checkCompanyAbbreviation = (event) => {
    let valid = Validators.required(event.value,"Company Abbreviation")
    this.props.onBlurProposedAbbreviation(valid)
  }

  setCorporateMemberErrors = (value) => {
    this.props.setCorporateMembersError(value)
  }

  onBlurCorporateMemberCompanyName = (index,event) => {
    let valid = Validators.required(event.target.value,"Company Name")
    this.props.onBlurCorporateMemberCompany(index,valid)
  }

  onBlurCorporateMemberNominee = (index,event) => {
    let valid = Validators.required(event.target.value,"Nominee")
    this.props.onBlurCorporateMemberNominee(index,valid)
  }
  onBlurIndividualMemberName = (index,event) => {
    let valid = Validators.required(event.target.value,"Name")
    this.props.onBlurIndividualMemberNameSurname(index,valid)
  }

  onBlurNumberOfShares = (index, event) => {
    let valid = Validators.required(event.target.value,"Number Of Shares")
    this.props.blurNumberOfShares(index,valid)
  }

  blurClassOfShare = (index, event) => {
    let valid = Validators.required(event.target.value,"Class Of Shares")
    this.props.onBlurClassOfShares(index,valid)
  }

  blurValuePerShare = (index, event) => {
    let valid = Validators.required(event.target.value,"Value Per Shares")
    this.props.onBlurValuePerShares(index,valid)
  }

  goToPersonalDetails = () => {
    this.onClickSaveOrganization()
    this.props.changeStepToPersonal('personal_details')
  }

  render() {
    let addressOptions = [];
    let stateAdress = this.props.organisation_details.registered_address;
    if (stateAdress.length) {
      for (let i = 0; i < stateAdress.length; i++) {
        addressOptions.push({value: stateAdress[i].id, label: stateAdress[i].address})
      }
    }

    let shareTypeOptions = [];
    let stateshareTypeOptions = this.props.organisation_details.share_types;
    if (stateshareTypeOptions.length) {
      for (let i = 0; i < stateshareTypeOptions.length; i++) {
        shareTypeOptions.push({value: stateshareTypeOptions[i].id, label: stateshareTypeOptions[i].name})
      }
    }

    let individual_nominees = this.props.organisation_details.individual_nominees;
    let individualNomineeOptions = [];
    if (individual_nominees.length) {
      for (let i = 0; i < individual_nominees.length; i++) {
        individualNomineeOptions.push({value: individual_nominees[i].id, label: individual_nominees[i].name})
      }
    }
    let corporate_nominees = this.props.organisation_details.corporate_nominees;
    let corporateNomineesOptions = [];
    if (corporate_nominees.length) {
      for (let i = 0; i < corporate_nominees.length; i++) {
        corporateNomineesOptions.push({value: corporate_nominees[i].id, label: corporate_nominees[i].name})
      }
    }
    let agents = this.props.organisation_details.agents;
    let agentsOptions = [];
    if (agents.length) {
      for (let i = 0; i < agents.length; i++) {
        agentsOptions.push({value: agents[i].id, label: agents[i].name})
      }
    }
    let employess = this.props.organisation_details.employees;
    let employeeOptions = [];
    if (employess.length) {
      for (let i = 0; i < employess.length; i++) {
        employeeOptions.push({value: employess[i].id, label: employess[i].firstName + " " + employess[i].lastName})
      }
    }

    let clients = [];
    let state_clients = this.props.organisation_details.clients;
    if (state_clients.length) {
      for (let i = 0; i < state_clients.length; i++) {
        clients.push({value: state_clients[i].id, label: state_clients[i].firstName + " " + state_clients[i].lastName})
      }
    }

    let company_types = [
      {value: 'trustee', label: 'Trustee'},
      {value: 'corporate_shareholder', label: 'Corporate Shareholder'},
      {value: 'foundation', label: 'Foundation'}
    ];

    let abbreviationOptions = [
      {value: 'ltd', label: 'LTD'},
      {value: 'limited', label: 'LIMITED'},
    ];

    let corporate_members_components = [];
    let c_members = this.props.organisation_details.corporate_members;

    if (c_members.length) {
      for (let i = 0; i < c_members.length; i++) {
        if (c_members[i]) {
          corporate_members_components.push(
            <CorporateMember
              error={this.props.organisation_details.errors.corporate_members[i]}
              key={i}
              data={c_members[i]}
              nominee={corporateNomineesOptions}
              flag={false}
              index={i}
              onBlurCorporateMemberCompanyName={this.onBlurCorporateMemberCompanyName}
              onChangeCorporateMemberNominee={this.onChangeCorporateMemberNominee}
              onChangeCorporateMemberCompanyName={this.onChangeCorporateMemberCompanyName}
              onChangeCorporateMemberShareholder={this.onChangeCorporateMemberShareholder}
              deleteCorporateMember={this.deleteCorporateMember}
            />
          )
        }
      }
    } else {
      this.addCorporateMember(true);
      corporate_members_components.push(
        <CorporateMember
          error={this.props.organisation_details.errors.corporate_members[0]}
          data={c_members[0]}
          key={999999}
          nominee={corporateNomineesOptions}
          flag={true}
          index={0}
          onBlurCorporateMemberCompanyName={this.onBlurCorporateMemberCompanyName}
          onChangeCorporateMemberNominee={this.onChangeCorporateMemberNominee}
          onChangeCorporateMemberCompanyName={this.onChangeCorporateMemberCompanyName}
          onChangeCorporateMemberShareholder={this.onChangeCorporateMemberShareholder}
          deleteCorporateMember={this.deleteCorporateMember}
        />
      )
    }

    let individual_members_components = [];
    let i_members = this.props.organisation_details.individual_members;
    if (i_members.length) {
      for (let i = 0; i < i_members.length; i++) {
        if (i_members[i]) {
          individual_members_components.push(
            <IndividualMember
              error={this.props.organisation_details.errors.individual_members[i]}
              onBlurIndividualMemberName={this.onBlurIndividualMemberName}
              company_type={this.props.organisation_details.organisation_details.company_type}
              key={i}
              data={i_members[i]}
              nominee={individualNomineeOptions}
              flag={false}
              index={i}
              onChangeIndividualMemberNominee={this.onChangeIndividualMemberNominee}
              onChangeIndividualMemberName={this.onChangeIndividualMemberName}
              onChangeIndividualMemberShareholder={this.onChangeIndividualMemberShareholder}
              deleteIndividualMember={this.deleteIndividualMember}
            />
          )
        }
      }
    } else {
      this.addIndividualMember(true)
      individual_members_components.push(
        <IndividualMember
          error={this.props.organisation_details.errors.individual_members[0]}
          onBlurIndividualMemberName={this.onBlurIndividualMemberName}
          company_type={this.props.organisation_details.organisation_details.company_type}
          data={i_members[0]}
          key={999999}
          nominee={individualNomineeOptions}
          flag={true}
          index={0}
          onChangeIndividualMemberNominee={this.onChangeIndividualMemberNominee}
          onChangeIndividualMemberName={this.onChangeIndividualMemberName}
          onChangeIndividualMemberShareholder={this.onChangeIndividualMemberShareholder}
          deleteIndividualMember={this.deleteIndividualMember}
        />
      )
    }

    let other_address_input = '';
    if (this.props.organisation_details.organisation_details.company_address_service === '') {

      other_address_input =
        <div className={(this.props.organisation_details.errors.company_other_address.valid || !this.props.organisation_details.errors.company_other_address.touched ) ? "field" : "field errorField"}>
          <label className="fieldName">other addresses</label>
          <input type="text" placeholder="enter address" onChange={this.onChnageCompanyOtherAddress}/>
          <span className="errorText">{this.props.organisation_details.errors.company_other_address['message']}</span>
        </div>
    }

    let authorised_share_capital_components = [];
    let authorised_share_capital = this.props.organisation_details.authorised_share_capital;

    if (authorised_share_capital.length) {
      for (let i = 0; i < authorised_share_capital.length; i++) {
        if (authorised_share_capital[i]) {
          authorised_share_capital_components.push(
            <AuthorisedShareCapital
              error={this.props.organisation_details.errors.authorised_share_capital[i]}
              key={i}
              data={authorised_share_capital[i]}
              shareTypeOptions={shareTypeOptions}
              flag={false}
              index={i}
              blurClassOfShare={this.blurClassOfShare}
              blurValuePerShare={this.blurValuePerShare}
              onBlurNumberOfShares={this.onBlurNumberOfShares}
              onChangeShareType={this.onChangeShareType}
              deleteAuthorisedShareCapital={this.deleteAuthorisedShareCapital}
              changeNumberOfShares={this.changeNumberOfShares}
              changeClassNameOfShares={this.changeClassNameOfShares}
              changeValuePerShares={this.changeValuePerShares}
            />
          )
        }
      }
    } else {
      this.addShareCapital(true)
      authorised_share_capital_components.push(
        <AuthorisedShareCapital
          error={this.props.organisation_details.errors.authorised_share_capital[0]}
          data={authorised_share_capital[0]}
          key={999999}
          shareTypeOptions={shareTypeOptions}
          flag={true}
          index={0}
          blurClassOfShare={this.blurClassOfShare}
          blurValuePerShare={this.blurValuePerShare}
          onBlurNumberOfShares={this.onBlurNumberOfShares}
          onChangeShareType={this.onChangeShareType}
          deleteAuthorisedShareCapital={this.deleteAuthorisedShareCapital}
          changeNumberOfShares={this.changeNumberOfShares}
          changeClassNameOfShares={this.changeClassNameOfShares}
          changeValuePerShares={this.changeValuePerShares}
        />
      )
    }

    return (
      <OrganisationDetails
        goToPersonalDetails={this.goToPersonalDetails}
        errors={this.props.organisation_details.errors}
        checkCompanyName={this.checkCompanyName}
        checkTradingActivity={this.checkTradingActivity}
        checkBeneficialOwner={this.checkBeneficialOwner}
        checkAuthorisedPerson={this.checkAuthorisedPerson}
        checkCompanyAbbreviation={this.checkCompanyAbbreviation}
        openAddUserModal={this.openAddUserModal}
        addShareCapital={this.addShareCapital}
        authorised_share_capital_components={authorised_share_capital_components}
        other_address_input={other_address_input}
        abbreviationOptions={abbreviationOptions}
        onChangeTradingActivity={this.onChangeTradingActivity}
        individual_members_components={individual_members_components}
        corporate_members_components={corporate_members_components}
        addCorporateMember={this.addCorporateMember}
        onChangeAddressService={this.onChangeAddressService}
        addIndividualMember={this.addIndividualMember}
        onChangeClientUser={this.onChangeClientUser}
        clients={clients}
        company_types={company_types}
        organisation_details={this.props.organisation_details.organisation_details}
        step={<NewCompanyMenuContainer />}
        onChangeUMAUser={this.onChangeUMAUser}
        onChangeProposedCompanyName={this.onChangeProposedCompanyName}
        onChangeAgent={this.onChangeAgent}
        onChangeAuthorisedPerson={this.onChangeAuthorisedPerson}
        onChnageBeneficialOwner={this.onChangeBeneficialOwner}
        onChangeProposedCompanyAbbreviation={this.onChangeProposedCompanyAbbreviation}
        userOptions={employeeOptions}
        agentOptions={agentsOptions}
        individualNomineeOptions={individualNomineeOptions}
        corporateNomineesOptions={corporateNomineesOptions}
        addressOptions={addressOptions}
        shareTypeOptions={shareTypeOptions}
        onChangeCompanyType={this.onChangeCompanyType}
        onClickSaveOrganization={this.onClickSaveOrganization}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  organisation_details: createSelector(
    (state) => state.organisation_details,
    (OrganisationDetailsState) => OrganisationDetailsState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(OrganisationDetailsActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrganisationDetailsContainer)
