import {
  EMPLOYEE_SETTINGS_GET_INITIAL_EMPLOYEE_LIST,
  EMPLOYEE_SETTINGS_SECTIONS_CHANGE,
} from "../../constants/actionTypes";

const initialState = {
  employees:[],
  sectionTypes:[],
  new_employee: {
    email: '',
    firstName:'',
    lastName:'',
    sections:[]
  }
};

export default function employees_list(state = initialState, action) {
  let new_employee = state.new_employee;
  switch (action.type) {
    case EMPLOYEE_SETTINGS_SECTIONS_CHANGE:
      new_employee.sections.push(action.payload.value);
      return {
        ...state,
        new_employee:new_employee
      }
    case EMPLOYEE_SETTINGS_GET_INITIAL_EMPLOYEE_LIST:
      return {
        ...state,
        employees:action.payload.users,
        sectionTypes: action.payload.sectionTypes
      }
    default:
      return state
  }
}
