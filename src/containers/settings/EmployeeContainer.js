import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createSelector, createStructuredSelector} from "reselect";
import PropTypes from "prop-types";
import {Employee} from "../../components";
import {modal} from 'react-redux-modal'
import {AddEmployee} from "../../components/modals/AddEmployee";
import {client} from "../../apollo";
import gql from "graphql-tag";

import * as EmployeesListAction from "../../actions/settings/EmployeesListAction";

class EmployeeContainer extends React.Component {

  static propTypes = {
    setInitialData: PropTypes.func.isRequired,
    setNewEmployeeSections: PropTypes.func.isRequired,
  };

  componentDidMount() {
    client.query({
      query: gql`
        query{
          sections{
            id
            name
          }
        }
      `
    }).then(({data}) => {
      this.props.setInitialData([],data.sections)
    })
  }

  onClickAddEmployee = () => {
    let sectionsTypes = this.props.employees_list.sectionTypes;
    let sectionOptions = [];
    if (sectionsTypes.length) {
      for (let i = 0; i < sectionsTypes.length; i++) {
        sectionOptions.push({value: sectionsTypes[i].id, label: sectionsTypes[i].name})
      }
    }
    modal.add(AddEmployee, {
      title: 'Add new employee',
      size: 'large',
      closeOnOutsideClick: true ,
      hideTitleBar: true ,
      hideCloseButton: false,
      onChangeSections:this.onChangeSections,
      sectionOptions:sectionOptions,
      data: this.props.employees_list.new_employee
    });
  }

  onChangeSections = (event) => {
    this.props.setNewEmployeeSections(event)
  }

  render() {
    return (
      <Employee
        onClickAddEmployee={this.onClickAddEmployee}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  employees_list: createSelector(
    (state) => state.employees_list,
    (EmployeeState) => EmployeeState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EmployeesListAction, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmployeeContainer)
