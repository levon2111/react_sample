import {
  CLIENT_SET_INDIVIDUAL_COUNTRIES_LIST

} from "../../constants/actionTypes";

const initialState = {
  countries : []
}

export default function individual_fill_in_details(state = initialState, action) {
  switch (action.type) {
    case CLIENT_SET_INDIVIDUAL_COUNTRIES_LIST:
      return {
        ...state,
        countries: action.payload.countries
      }
    default:
      return state
  }
}
