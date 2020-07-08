import {
  CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_ABBREVIATION_CHANGE,
  CLIENT_SET_COUNTRIES_LIST

} from "../../constants/actionTypes";

const initialState = {
  fill_in_details: [],
  countries : []
}

export default function fill_in_details(state = initialState, action) {
  switch (action.type) {
    case CLIENT_SET_COUNTRIES_LIST:
      return {
        ...state,
        countries: action.payload.countries
      }
    case CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_ABBREVIATION_CHANGE:
      return {
        ...state,
        fill_in_details: []
      }
    default:
      return state
  }
}
