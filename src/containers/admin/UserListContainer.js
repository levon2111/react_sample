import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {UserList} from "../../components";
import * as UserListActions from "../../actions/userList";
import {createSelector, createStructuredSelector} from "reselect";
import {client} from "../../apollo";
import gql from "graphql-tag";
class UserListContainer extends React.Component {

  static propTypes = {
    email_change: PropTypes.func.isRequired,
    getInitialUserList: PropTypes.func.isRequired,
    first_name_change: PropTypes.func.isRequired,
    last_name_change: PropTypes.func.isRequired,
    change_sections: PropTypes.func.isRequired,
    edit_user: PropTypes.func.isRequired,
    invite_users: PropTypes.func.isRequired,
    add_user: PropTypes.func.isRequired,
    new_user: PropTypes.object,
  };

  componentDidMount(){
    client.query({
      query: gql`
        query{
         users{
            firstName
            lastName
            email
            id
            employeeSection{
              sections{
                name
              }
            }
          }
        }
      `
    })
    .then(({data}) => {
        let users = [];
        for (let i = 0; i < data.users.length; i++) {
          let user = data.users[i];
          let sections = [];
          if(user.employeeSection){
            for (let i=0;i< user.employeeSection.sections.length; i++){
              sections.push(user.employeeSection.sections[i].name)
            }
          }
          let dataUser = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            sections: sections
          }
          users.push(dataUser);
        }
        this.props.getInitialUserList(users)
      }
    )
    .catch((err) => {
      console.log(err)
    });
  }

  onEmailChange = (event) => {
    this.props.email_change(event.target.value)
  }

  onFirstNameChange = (event) => {
    this.props.first_name_change(event.target.value)
  }

  onLastNameChange = (event) => {
    this.props.last_name_change(event.target.value)
  }

  onClickSection = (event) => {
    this.props.change_sections(event.target.value)
  }

  onClickInvite = () => {
    client.mutate({
      mutation: gql`
        mutation inviteUser($userList:[UserInput]){
          inviteUser(userList:$userList){
            ok
          }
        }   
      `,
      variables: {
        userList: this.props.user_list.user_list
      },
      invalidateQueries: {
        queryName: (previousQueryResult, {mutationResult}) => true
      }
    }).then(({data}) => {
        this.props.invite_users(this.props.user_list.user_list)
      }
    )
    .catch((err) => {
      console.log(err)
    });

  }

  onClickAddUser = () => {
    this.props.add_user()
  }

  onClickEdit = (event) => {
    this.props.edit_user()
  }

  render() {
    var rows = [];
    let self = this;
    if (this.props.user_list.exists_users && this.props.user_list.exists_users.length) {
      this.props.user_list.exists_users.forEach(function (user, i) {
        rows.push(<Users key={i} list={user} onClickEdit={self.onClickEdit}/>);
      });
    }

    return (
      <UserList
        list={rows}
        user={this.props.user_list.new_user}
        users={this.props.users}
        onEmailChange={this.onEmailChange}
        onFirstNameChange={this.onFirstNameChange}
        onLastNameChange={this.onLastNameChange}
        onClickSection={this.onClickSection}
        onClickInvite={this.onClickInvite}
        onClickAddUser={this.onClickAddUser}
        onClickEdit={this.onClickEdit}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user_list: createSelector(
    (state) => state.user_list,
    (userListState) => userListState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserListActions, dispatch)
}

class Users extends React.Component {
  render() {
    let rowsSections = [];
    rowsSections.push(<Sections key={this.props.list.email} sections={this.props.list.sections}/>);
    return (
      <table>
        <thead>
        <tr>
          <th>Email Address</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Sections</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>{this.props.list.email}</th>
          <th>{this.props.list.firstName}</th>
          <th>{this.props.list.lastName}</th>
          <th>{rowsSections}</th>
          <th>
            <button type="button" onClick={this.props.onClickEdit}>Edit</button>
          </th>
        </tr>
        </tbody>
      </table>
    );
  }
}


class Sections extends React.Component {
  render() {
    let sections = [];
    let sections_object = this.props.sections;
    for(let i=0; i<sections_object.length;i++){
      sections.push(<li key={i}>{sections_object[i]}</li>)
    }
    return (
      <ul>
        {sections}
      </ul>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListContainer)
