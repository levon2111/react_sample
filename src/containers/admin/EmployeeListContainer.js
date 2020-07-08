import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {EmployeesList} from "../../components";
import {SectionsEdit} from "../../components/modals/SectionsEdit";
import * as EmployeesListActions from "../../actions/EmployeesListAction";
import {createSelector, createStructuredSelector} from "reselect";
import {client} from "../../apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import {modal} from 'react-redux-modal'

class EmployeesListContainer extends React.Component {
  static propTypes = {
    getInitialEmployeeList: PropTypes.func.isRequired,
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
        this.props.getInitialEmployeeList(users)
      }
    )
    .catch((err) => {
      console.log(err)
    });
  }
  onClickSectionsEdit = () => {
    modal.add(SectionsEdit, {
      title: 'This is my modal',
      size: 'medium', // large, medium or small,
      closeOnOutsideClick: true ,// (optional) Switch to true if you want to close the modal by clicking outside of it,
      hideTitleBar: false ,// (optional) Switch to true if do not want the default title bar and close button,
      hideCloseButton: false ,// (optional) if you don't wanna show the top right close button
      //.. all what you put in here you will get access in the modal props ;)
    });
  }

  render() {
    let rows = [];
    let self  = this;
    if (this.props.employees_list.employees_list && this.props.employees_list.employees_list.length) {
      this.props.employees_list.employees_list.forEach(function (user, i) {
        rows.push(<Employee key={i} list={user} sectionEditClick={self.onClickSectionsEdit}/>);
      });
    }
    return (
      <EmployeesList
        employees={rows}
      />
    )
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

class Employee extends React.Component {
  render() {
    let sections = [];
    sections.push(<Sections key={this.props.list.email} sections={this.props.list.sections} />);
    return (
      <tr>
        <td>00{this.props.list.id}</td>
        <td>{this.props.list.firstName}</td>
        <td>{this.props.list.lastName}</td>
        <td>{sections}</td>
        <td>
          <button type="button">View access control</button>
          <button type="button" onClick={this.props.sectionEditClick}>Amend sections</button>
          <button type="button">View all clients</button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  employees_list: createSelector(
    (state) => state.employees_list,
    (EmployeesListState) => EmployeesListState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EmployeesListActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeesListContainer)
