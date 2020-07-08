import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {Audit} from "../../components";
import * as AuditClientContactPersonActions from "../../actions/settings/AuditClientContactPersonActions";
import {AuditClientContactPerson} from "../../components/settings/AuditClientContactPerson";
import {client} from "../../apollo";
import gql from "graphql-tag"; import Validators from "../../services/Validators";


class AuditClientContactPersonContainer extends React.Component {

  static propTypes = {
    addAuditContactPerson: PropTypes.func.isRequired,
    email_change: PropTypes.func.isRequired,
    first_name_change: PropTypes.func.isRequired,
    last_name_change: PropTypes.func.isRequired,
    add_notification: PropTypes.func.isRequired,
    getInitialUserList: PropTypes.func.isRequired,
    company_name_change: PropTypes.func.isRequired,
    invite_audit_clients: PropTypes.func.isRequired,
    onBlurCompanyName: PropTypes.func.isRequired,
    onBlurEmail: PropTypes.func.isRequired,
    onBlurFirstName: PropTypes.func.isRequired,
    onBlurLastName: PropTypes.func.isRequired,
    onDeleteAuditClientContactPerson: PropTypes.func.isRequired,
  };

  componentDidMount(){
    client.query({
      query: gql`
        query{
          usersWithType(userType:"clients"){
            email
            username
            id
            firstName
            lastName
          }
        }
      `
    })
    .then(({data}) => {
        this.props.getInitialUserList(data.usersWithType)
      }
    )
    .catch((err) => {
      this.props.add_notification("Oops","error")
    });
  }

  onChangeEmail = (index, event) => {
    this.props.email_change(index, event.target.value)
  };

  onChangeFirstName = (index, event) => {
    this.props.first_name_change(index, event.target.value)
  };

  onChangeLastName = (index, event) => {
    this.props.last_name_change(index, event.target.value)
  };

  onChangeCompany = (index, event) => {
    this.props.company_name_change(index, event.target.value)
  };

  auditClientContactPersonListStateValidation = () => {
    let new_clients = this.props.audit_clients_contact_person_list.contact_person_list
    let errors = this.props.audit_clients_contact_person_list.errors
    let validation_error = false;
    for(let i=0; i< new_clients.length; i++){
      if(!new_clients[i].company){
        validation_error = true;
        let valid = Validators.required('',errors[i].company.label)
        this.props.onBlurCompanyName(i,valid)
      }
      if(!new_clients[i].lastName){
        validation_error = true;
        let valid = Validators.required('',errors[i].lastName.label)
        this.props.onBlurLastName(i,valid)
      }
      if(!new_clients[i].firstName){
        validation_error = true;
        let valid = Validators.required('',errors[i].firstName.label)
        this.props.onBlurFirstName(i,valid)
      }
      if(!new_clients[i].email){
        validation_error = true;
        let valid = Validators.required('',errors[i].email.label)
        this.props.onBlurEmail(i,valid)
      }else{
        let valid = Validators.email(new_clients[i].email,errors[i].email.label)
        this.props.onBlurEmail(i,valid)
        if(!valid){
          validation_error = true;
        }
      }
    }
    console.log(validation_error)
    return validation_error
  }

  onClickSendInvitation = () => {
    if(this.auditClientContactPersonListStateValidation()){
      return false
    }

    client.mutate({
      mutation: gql`
        mutation addUser($addUserData:[UserInput]){
          addUser(addUserData:$addUserData){
            user{
              firstName
            }
          }
        }
      `,
      variables: {
        addUserData: this.props.audit_clients_contact_person_list.contact_person_list
      }
    }).then(({data}) => {
        this.props.add_notification("Success","success")
        this.props.invite_audit_clients(this.props.audit_clients_contact_person_list.contact_person_list)
      }
    )
    .catch((err) => {
      console.log(err)
      this.props.add_notification("Error","warning")
    });
  };

  onClickAddAuditContactPerson = () => {
    this.props.addAuditContactPerson({firstName: '',lastName: '',email: '',company:''});
  }

  checkCompanyName = (index, event) => {
    let valid = Validators.required(event.target.value,"Company Name")
    this.props.onBlurCompanyName(index, valid)
  }

  checkEmail = (index, event) => {
    let valid = Validators.required(event.target.value,"Email")
    this.props.onBlurEmail(index, valid)
  }

  checkFirstName = (index, event) => {
    let valid = Validators.required(event.target.value,"First Name")
    this.props.onBlurFirstName(index, valid)
  }

  checkLastname = (index, event) => {
    let valid = Validators.required(event.target.value,"Last Name")
    this.props.onBlurLastName(index, valid)
  }

  deleteAuditClientContactPerson = (index,event) => {
    this.props.onDeleteAuditClientContactPerson(index);
  }

  render() {
    let audit_client_contact_person_components = [];
    let audit_client_contact_person = this.props.audit_clients_contact_person_list.contact_person_list;
    if (audit_client_contact_person.length) {
      for (let i = 0; i < audit_client_contact_person.length; i++) {
        if (audit_client_contact_person[i]) {
          audit_client_contact_person_components.push(
            <AuditClientContactPerson
              deleteAuditClientContactPerson={this.deleteAuditClientContactPerson}
              checkLastname={this.checkLastname}
              checkCompanyName={this.checkCompanyName}
              checkFirstName={this.checkFirstName}
              checkEmail={this.checkEmail}
              error={this.props.audit_clients_contact_person_list.errors[i]}
              onChangeEmail={this.onChangeEmail}
              onChangeFirstName={this.onChangeFirstName}
              onChangeLastName={this.onChangeLastName}
              onChangeCompany={this.onChangeCompany}
              key={i}
              data={audit_client_contact_person[i]}
              flag={false}
              index={i}
            />
          )
        }
      }
    } else {
      this.onClickAddAuditContactPerson();
      audit_client_contact_person_components.push(
        <AuditClientContactPerson
          deleteAuditClientContactPerson={this.deleteAuditClientContactPerson}
          checkCompanyName={this.checkCompanyName}
          checkLastname={this.checkLastname}
          checkFirstName={this.checkFirstName}
          checkEmail={this.checkEmail}
          error={this.props.audit_clients_contact_person_list.errors[0]}
          onChangeEmail={this.onChangeEmail}
          onChangeFirstName={this.onChangeFirstName}
          onChangeLastName={this.onChangeLastName}
          onChangeCompany={this.onChangeCompany}
          data={audit_client_contact_person[0]}
          key={999999}
          flag={true}
          index={0}
        />
      )
    }
    return (
      <Audit
        onClickSendInvitation={this.onClickSendInvitation}
        audit_client_contact_person_components={audit_client_contact_person_components}
        onClickAddAuditContactPerson={this.onClickAddAuditContactPerson}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  audit_clients_contact_person_list: createSelector(
    (state) => state.audit_clients_contact_person_list,
    (AuditState) => AuditState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuditClientContactPersonActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuditClientContactPersonContainer)
