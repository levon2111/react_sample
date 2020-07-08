import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Clients} from "../../components";
import * as ClientActions from "../../actions/ClientActions";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {client} from "../../apollo";
import gql from "graphql-tag";
import {Table} from "semantic-ui-react";
import {ClientEdit} from "../../components/modals/ClientEdit";
import {modal} from 'react-redux-modal'

class ClientsContainer extends React.Component {

  static propTypes = {
    email_change: PropTypes.func.isRequired,
    first_name_change: PropTypes.func.isRequired,
    last_name_change: PropTypes.func.isRequired,
    invite_users: PropTypes.func.isRequired,
    add_notification: PropTypes.func.isRequired,
    edit_user: PropTypes.func.isRequired,
    change_user_data: PropTypes.func.isRequired,
    add_user: PropTypes.func.isRequired,
    getInitialUserList: PropTypes.func.isRequired,
    company_name_change: PropTypes.func.isRequired,
    onEditChangeEmail: PropTypes.func.isRequired,
    new_client: PropTypes.object,
    edit_email: PropTypes.func.isRequired,
    edit_first_name: PropTypes.func.isRequired,
    edit_last_name: PropTypes.func.isRequired,
    edit_company_name: PropTypes.func.isRequired,
  };

  componentDidMount(){
    client.query({
      query: gql`
        query{
          usersWithType(userType:"client"){
            email
            id
            firstName
            lastName
            client{
              name
            }
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


  onEditEmail = (event) => {
     this.props.edit_email(event.target.value)
  };

  onEditFirstName = (event) => {
    this.props.edit_first_name(event.target.value)
  };

  onEditLastName = (event) => {
    this.props.edit_last_name(event.target.value)
  };

  onEditCompany = (event) => {
    this.props.edit_company_name(event.target.value)
  };

  onClickAddClient = () => {
    this.props.add_user(this.props.clients_list.new_client)
  };

  onClickSendInvitation = () => {
    client.mutate({
      mutation: gql`
         mutation addUser($addUserData:[UserInput]){
          addUser(addUserData:$addUserData){
            ok
          }
        }   
      `,
      variables: {
        addUserData: this.props.clients_list.clients_list
      }
    }).then(({data}) => {
        this.props.invite_users(this.props.clients_list.clients_list)
      }
    )
    .catch((err) => {
      this.props.add_notification("Oops","warning")
    });
  };

  onClickEditUser = () => {
    client.mutate({
      mutation: gql`
         mutation editUser($editUserData:UserInput){
          editUser(editUserData:$editUserData){
            ok
          }
        }
      `,
      variables: {
        editUserData: this.props.clients_list.edit_user_data
      }
    }).then(({data}) => {
        let datas = this.props.clients_list.edit_user_data;
        this.props.change_user_data(datas.firstName,datas.lastName,datas.id,datas.email,{name: datas.company})
        modal.clear();
      }
    ).catch((err) => {
      console.log(err)
    });
  };

  onClickClientEdit = (user) => {
      this.props.edit_user(user);
      modal.add(ClientEdit, {
      title: 'Edit client info',
      size: 'medium',
      closeOnOutsideClick: true ,
      hideTitleBar: false ,
      hideCloseButton: false ,
      data: user,
      client: this.props.clients_list.edit_user_data,
      onEditEmail :this.onEditEmail,
      onEditFirstName:this.onEditFirstName,
      onEditLastName:this.onEditLastName,
      onEditCompany:this.onEditCompany,
      onClickEditUser: this.onClickEditUser
    });
  };

  render() {
    let rows = [];
    let self  = this;
    if (this.props.clients_list.clients_list && this.props.clients_list.clients_list.length) {
      this.props.clients_list.clients_list.forEach(function (user, i) {
        rows.push(<Client key={i} list={user} edit={() => self.onClickClientEdit(user)}/>);
      });
    }
    return (
      <Clients
        client={this.props.clients_list.new_client}
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
        <Table.Cell>{this.props.list.lastName}</Table.Cell>
        <Table.Cell>{this.props.list.client && this.props.list.client.name}</Table.Cell>
        <Table.Cell><button type="button" onClick={this.props.edit}>Edit</button></Table.Cell>
      </Table.Row>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  clients_list: createSelector(
    (state) => state.clients_list,
    (ClientsState) => ClientsState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientsContainer)
