import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as ClientActions from "../../actions/ClientActions";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {client} from "../../apollo";
import gql from "graphql-tag";
import {ClientEdit} from "../../components/modals/ClientEdit";
import {modal} from 'react-redux-modal'



import {ClientUser} from "../../components/index";
import {ClientUserForm}  from "../../components/settings/ClientUserForm"
import Validators from '../../services/Validators';

class ClientUserContainer extends React.Component {

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
    onBlurClientFirstName: PropTypes.func.isRequired,
    company_name_change: PropTypes.func.isRequired,
    onEditChangeEmail: PropTypes.func.isRequired,
    new_client: PropTypes.object,
    edit_email: PropTypes.func.isRequired,
    edit_first_name: PropTypes.func.isRequired,
    edit_last_name: PropTypes.func.isRequired,
    edit_company_name: PropTypes.func.isRequired,
    onClickDeleteClientUser: PropTypes.func.isRequired,
    changeMenuItem: PropTypes.func.isRequired,
  };

    componentDidMount(){
      this.props.changeMenuItem('settings')
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
        this.props.add_notification('error',"warning")
      });
  }

  onChangeEmail = (index,event) => {
    this.props.email_change(index,event.target.value)
  };

  onChangeFirstName = (index,event) => {
    this.props.first_name_change(index,event.target.value)
  };

  onChangeLastName = (index,event) => {
    this.props.last_name_change(index,event.target.value)
  };

  onChangeCompany = (index,event) => {
    this.props.company_name_change(index,event.target.value)
  };

  onBlurClientFirstName = (index,event) => {
    let valid = Validators.required(event.target.value,"First Name")
    this.props.onBlurClientFirstName(index,valid)
  }

  onBlurClientLastName = (index,event) => {
    let valid = Validators.required(event.target.value,"Last Name")
    this.props.onBlurClientLastName(index,valid)
  }

  onBlurClientCompanyName = (index,event) => {
    let valid = Validators.required(event.target.value,"Company Name")
    this.props.onBlurClientCompanyName(index,valid)
  }

  onBlurClientEmail = (index,event) => {
    let valid = Validators.required(event.target.value,"Email")
    this.props.onBlurClientEmail(index,valid)
  }

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
    this.props.add_user({
      email:'',
      firstName:'',
      lastName:'',
      company:'',
      status: 'pending'
    })
  };

  newClientListStateValidation = () => {

    let new_clients = this.props.clients_list.new_clients_list
    let errors = this.props.clients_list.errors.new_clients_list
    let validation_error = false;
    for(let i=0; i< new_clients.length; i++){
      if(!new_clients[i].firstName){
        validation_error = true;
        let valid = Validators.required('',errors[i].firstName.label)
        this.props.onBlurClientFirstName(i,valid)
      }
      if(!new_clients[i].lastName){
        validation_error = true;
        let valid = Validators.required('',errors[i].lastName.label)
        this.props.onBlurClientLastName(i,valid)
      }
      if(!new_clients[i].company){
        validation_error = true;
        let valid = Validators.required('',errors[i].company.label)
        this.props.onBlurClientCompanyName(i,valid)
      }
      if(!new_clients[i].email){
        validation_error = true;
        let valid = Validators.required('',errors[i].email.label)
        this.props.onBlurClientEmail(i,valid)
      }else{
        let valid = Validators.email(new_clients[i].email,errors[i].email.label)
        this.props.onBlurClientEmail(i,valid)
        if(!valid){
          validation_error = true;
        }
      }
    }
    return validation_error
  }


  onClickSendInvitation = () => {

    if(this.newClientListStateValidation()){
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
        addUserData: this.props.clients_list.new_clients_list
      }
    }).then(({data}) => {
        this.props.add_notification("Success","success")
        //this.props.invite_users(this.props.clients_list.new_clients_list)
      }
    )
    .catch((err) => {
      this.props.add_notification("Error","warning")
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
      closeOnOutsideClick: false ,
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

  deleteClientUser = (index) => {
    this.props.onClickDeleteClientUser(index)
  }

  render() {
    let rows = [];
    let self  = this;
    if (this.props.clients_list.clients_list && this.props.clients_list.clients_list.length) {
      this.props.clients_list.clients_list.forEach(function (user, i) {
        rows.push(<Client key={i} list={user} edit={() => self.onClickClientEdit(user)}/>);
      });
    }

    let new_clients_list_template = [];
    let new_clients_list = this.props.clients_list.new_clients_list;

    if (new_clients_list.length) {
      for (let i = 0; i < new_clients_list.length; i++) {
        if (new_clients_list[i]) {
         new_clients_list_template.push(<ClientUserForm
                    deleteClientUser={this.deleteClientUser}
                    error={this.props.clients_list.errors.new_clients_list[i]}
                    key={i}
                    index={i}
                    onChangeEmail={this.onChangeEmail}
                    onChangeFirstName={this.onChangeFirstName}
                    onChangeLastName={this.onChangeLastName}
                    onChangeCompany={this.onChangeCompany}
                    onBlurClientFirstName={this.onBlurClientFirstName}
                    onBlurClientLastName={this.onBlurClientLastName}
                    onBlurClientCompanyName={this.onBlurClientCompanyName}
                    onBlurClientEmail={this.onBlurClientEmail}
                  />
          )
        }
      }
    } else {
      this.onClickAddClient()
      new_clients_list_template.push(<ClientUserForm
                    deleteClientUser={this.deleteClientUser}
                    error={this.props.clients_list.errors.new_clients_list[0]}
                    key={9999}
                    index={0}
                    onChangeEmail={this.onChangeEmail}
                    onChangeFirstName={this.onChangeFirstName}
                    onChangeLastName={this.onChangeLastName}
                    onChangeCompany={this.onChangeCompany}
                    onBlurClientFirstName={this.onBlurClientFirstName}
                    onBlurClientLastName={this.onBlurClientLastName}
                    onBlurClientCompanyName={this.onBlurClientCompanyName}
                    onBlurClientEmail={this.onBlurClientEmail}
        />
      )
    }
    // rows =

    return (
      <ClientUser
        clients={rows}
        new_clients_list={new_clients_list_template}
        onClickAddClient={this.onClickAddClient}
        onClickSendInvitation={this.onClickSendInvitation}
      />
    )
  }
}


class Client extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.list.email}</td>
        <td>{this.props.list.firstName}</td>
        <td>{this.props.list.lastName}</td>
        <td>{this.props.list.client && this.props.list.client.name}</td>
        <td className="iconCell"><span className="icon-accepted"></span></td>
        <td>
          <ul className="clearAfter iconCell">
            <li><a href="#"><span className="icon-ic_edit blue"></span></a></li>
            <li><a href="#"><span className="icon-ic_delete blue"></span></a></li>
          </ul>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  clients_list: createSelector(
    (state) => state.clients_list,
    (UserAgentState) => UserAgentState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientUserContainer)
