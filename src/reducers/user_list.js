import {
  ADD_ANOTHER_USER,
  EMAIL_CHANGE,
  FIRSTNAME_CHANGE,
  LASTNAME_CHANGE,
  SELECT_SECTION,
  GET_INITIAL_USER_LIST,
  SEND_USER_INVITATION
} from "../constants/actionTypes";




const initialState = {
  new_user: {
    email: '',
    firstName: '',
    lastName: '',
    sections: []
  },
  user_list: [],
  exists_users: [],
};

export default function user_list(state = initialState, action) {
  switch (action.type) {
    case SEND_USER_INVITATION:
      return state;
    case GET_INITIAL_USER_LIST:
      return {
        ...state,
        exists_users:action.payload.users
      }
    case EMAIL_CHANGE:
      return {
        ...state,
        new_user: {
          ...state.new_user,
          email: action.payload.email
        }
      }
    case ADD_ANOTHER_USER:
      state.user_list.push(state.new_user);
      return {
        ...state,
        new_user: initialState.new_user
      }
    case FIRSTNAME_CHANGE:
      return {
        ...state,
        new_user: {
          ...state.new_user,
          firstName: action.payload.firstName
        }
      }
    case LASTNAME_CHANGE:
      return {
        ...state,
        new_user: {
          ...state.new_user,
          lastName: action.payload.lastName
        }
      }
    case SELECT_SECTION:
       let sections = state.new_user.sections;
       sections.push(action.payload.section);
       return {
        ...state,
        new_user: {
          ...state.new_user,
          sections: sections
        }
      }


    default:
      return state
  }
}
