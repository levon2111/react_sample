import {
  GET_INITIAL_SELECT_EMPLOYEES,
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const getInitialData = createAction(GET_INITIAL_SELECT_EMPLOYEES,(agents,employees,individual_nominees,corporate_nominees) =>({agents,employees,individual_nominees,corporate_nominees}))


