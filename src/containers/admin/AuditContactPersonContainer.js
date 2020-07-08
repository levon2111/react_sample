import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Clients} from "../../components";
import * as AuditClientContactPersonActions from "../../actions/settings/AuditClientContactPersonActions";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {client} from "../../apollo";
import gql from "graphql-tag";
import {Table} from "semantic-ui-react";

class AuditContactPersonContainer extends React.Component {

  static propTypes = {
    email_change: PropTypes.func.isRequired,
    first_name_change: PropTypes.func.isRequired,
    last_name_change: PropTypes.func.isRequired,
    invite_users: PropTypes.func.isRequired,
    add_notification: PropTypes.func.isRequired,
    edit_user: PropTypes.func.isRequired,
    add_user: PropTypes.func.isRequired,
    getInitialUserList: PropTypes.func.isRequired,
    company_name_change: PropTypes.func.isRequired,
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
      this.props.add_notification("Oops","warning")
    });
  }

  onChangeEmail = (event) => {
    this.props.email_change(event.target.value)
  };

  onChangeFirstName = (event) => {
    this.props.first_name_change(event.target.value)
  };

  onChangeLastName = (event) => {
    this.props.last_name_change(event.target.value)
  };

  onChangeCompany = (event) => {
    this.props.company_name_change(event.target.value)
  };

  onClickAddClient = () => {
    this.props.add_user(this.props.audit_clients_contact_person_list.new_audit_client_person)
  };

  onClickSendInvitation = () => {
    this.props.invite_users(this.props.audit_clients_contact_person_list.audit_clients_contact_person_list)
  };

  render() {
    let rows = [];
    if (this.props.audit_clients_contact_person_list.audit_clients_contact_person_list && this.props.audit_clients_contact_person_list.audit_clients_contact_person_list.length) {
      this.props.audit_clients_contact_person_list.audit_clients_contact_person_list.forEach(function (user, i) {
        rows.push(<Client key={i} list={user} />);
      });
    }
    return (
      <Clients
        client={this.props.audit_clients_contact_person_list.new_audit_client_person}
        clients={rows}
        onChangeEmail={this.onChangeEmail}
        onChangeFirstName={this.onChangeFirstName}
        onChangeLastName={this.onChangeLastName}
        onChangeCompany={this.onChangeCompany}
        onClickAddClient={this.onClickAddClient}
        onClickSendInvitation={this.onClickSendInvitation}
      />
    )
  }
}

class Client extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.list.email}</Table.Cell>
        <Table.Cell>{this.props.list.firstName}</Table.Cell>
        <Table.Cell>{this.props.list.firstName}</Table.Cell>
        <Table.Cell>{this.props.list.company}</Table.Cell>
        <Table.Cell>EDIT</Table.Cell>
      </Table.Row>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  audit_clients_contact_person_list: createSelector(
    (state) => state.audit_clients_contact_person_list,
    (AuditClientsContactPersonState) => AuditClientsContactPersonState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AuditClientContactPersonActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuditContactPersonContainer)
