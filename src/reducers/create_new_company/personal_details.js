import {CREATE_COMPANY_PERSONAL_DETAILS_SET_MEMBERS_DATA} from "../../constants/actionTypes";

const initialState = {
  individual_members: [],
  corporate_members: []
}


export default function personal_details(state = initialState, action) {
  let individual_members = state.individual_members;
  let corporate_members = state.corporate_members;

  switch (action.type) {
    case CREATE_COMPANY_PERSONAL_DETAILS_SET_MEMBERS_DATA:
      individual_members = action.payload.individual;
      corporate_members = action.payload.corporate;
      return {
        ...state,
        corporate_members: corporate_members,
        individual_members: individual_members
      }
    default:
      return state
  }
}
