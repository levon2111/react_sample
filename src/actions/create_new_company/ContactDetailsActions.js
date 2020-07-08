import {
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_BANK_ACCOUNT,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_MASTER_DEBIT_REQUIRE,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CLICK_ADD_DEBIT_CARD,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_SET_INITIAL_DATA,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_INDIVIDUAL_MEMBER,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_DEBIT_NAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_BLUR_DEBIT_NAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_DEBIT_ADDRESS,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_BLUR_DEBIT_ADDRESS,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CLICK_DELETE_DEBIT_CARD,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_SET_INITIAL_ERRORS,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_SURNAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_SURNAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_BANK_NAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_BANK_NAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_EMAIL,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_EMAIL,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_PHONE,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_PHONE,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_DEBIT_CARD_MEMBER,
  ON_CHANGE_NEW_COMPANY_MENU,
} from "../../constants/actionTypes";

import {createAction} from "redux-actions";

export const onChangeBankAccount = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_BANK_ACCOUNT,(value) =>({value}))
export const onChangeMasterDebitRequire = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_MASTER_DEBIT_REQUIRE,(value) =>({value}))
export const onClickAddDebitCard = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CLICK_ADD_DEBIT_CARD,(value) =>({value}))
export const set_initial_data = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_SET_INITIAL_DATA,(value,corp) =>({value,corp}))
export const changeIndividualMember = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_INDIVIDUAL_MEMBER,(index, value) =>({index, value}))
export const changeName = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_DEBIT_NAME,(index, value) =>({index, value}))
export const changeAddress = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_DEBIT_ADDRESS,(index, value) =>({index, value}))
export const blurName = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_BLUR_DEBIT_NAME,(index, value) =>({index, value}))
export const blurAddress = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_BLUR_DEBIT_ADDRESS,(index, value) =>({index, value}))
export const onClickDeleteDebitCards = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CLICK_DELETE_DEBIT_CARD,(index) =>({index}))
export const set_initial_errors = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_SET_INITIAL_ERRORS,(type, count) =>({type, count}))
export const onChangeSurname = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_SURNAME,(index, type, value) =>({index, type, value}))
export const onChangeBankName = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_BANK_NAME,(index, type, value) =>({index, type, value}))
export const onChangePhone = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_PHONE,(index, type, value) =>({index, type, value}))
export const onChangeEmail = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_EMAIL,(index, type, value) =>({index, type, value}))
export const blurSurname = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_SURNAME,(index, type, value) =>({index, type, value}))
export const blurBankName = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_BANK_NAME,(index, type, value) =>({index, type, value}))
export const blurEmail = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_EMAIL,(index, type, value) =>({index, type, value}))
export const blurPhone = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_PHONE,(index, type, value) =>({index, type, value}))
export const blurRegisteredMember = createAction(CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_DEBIT_CARD_MEMBER,(index, value) =>({index, value}))
export const changeStepToPersonal = createAction(ON_CHANGE_NEW_COMPANY_MENU,(state) =>({state}))

