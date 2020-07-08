import {
  PERSONAL_DETAILS_SET_MEMBER_DETAILS,
} from "../../constants/actionTypes";

const initialState = {
  fill_in_details: {
    registered_address: "",
    registered_number: "",
    registered_date:"",
    company_name:"",
    incorporation_place:"",
    company_ser
  },
  current_member:{},
  countries : []
}

export default function corporate_fill_in_details(state = initialState, action) {
  switch (action.type) {
    case PERSONAL_DETAILS_SET_MEMBER_DETAILS:
      return {
        ...state,
        current_member: action.payload.value
      }
    default:
      return state
  }
}
