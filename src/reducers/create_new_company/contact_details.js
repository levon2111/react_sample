import {
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_BANK_ACCOUNT,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_MASTER_DEBIT_REQUIRE,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_BLUR_DEBIT_ADDRESS,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_BLUR_DEBIT_NAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_DEBIT_ADDRESS,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_DEBIT_NAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_INDIVIDUAL_MEMBER,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CLICK_ADD_DEBIT_CARD,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CLICK_DELETE_DEBIT_CARD,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_SET_INITIAL_DATA,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_SURNAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_SET_INITIAL_ERRORS,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_SURNAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_BANK_NAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_BANK_NAME,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_EMAIL,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_EMAIL,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_PHONE,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_PHONE,
  CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_DEBIT_CARD_MEMBER,
} from "../../constants/actionTypes";

const initialState = {
  individual_members: [],
  corporate_members: [],
  errors: {
    debit_cards: [],
    corporate_members: [],
    individual_members: []
  },
  bank_account: 'yes',
  require_master_debit: 'yes',
  debit_cards: []
}

export default function contact_details(state = initialState, action) {
  let debit_cards = state.debit_cards;
  let errors = state.errors;
  let individual_members = state.individual_members;
  let corporate_members = state.corporate_members;
  switch (action.type) {
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_DEBIT_CARD_MEMBER:
      errors.debit_cards[action.payload.index].member = action.payload.value;
      console.log(errors)
      return{
        ...state,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_PHONE:
      if(action.payload.type === 'corporate'){
        errors.corporate_members[action.payload.index].phone = action.payload.value
      }else{
        errors.individual_members[action.payload.index].phone = action.payload.value
      }
      return{
        ...state,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_PHONE:
      if(action.payload.type === 'corporate'){
        corporate_members[action.payload.index].phone = action.payload.value
      }else{
        individual_members[action.payload.index].phone = action.payload.value
      }
      return{
        ...state,
        individual_members: individual_members,
        corporate_members: corporate_members
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_EMAIL:
      if(action.payload.type === 'corporate'){
        errors.corporate_members[action.payload.index].email = action.payload.value
      }else{
        errors.individual_members[action.payload.index].email = action.payload.value
      }
      return{
        ...state,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_EMAIL:
      if(action.payload.type === 'corporate'){
        corporate_members[action.payload.index].email = action.payload.value
      }else{
        individual_members[action.payload.index].email = action.payload.value
      }
      return{
        ...state,
        individual_members: individual_members,
        corporate_members: corporate_members
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_BANK_NAME:
      if(action.payload.type === 'corporate'){
        errors.corporate_members[action.payload.index].bankName = action.payload.value
      }else{
        errors.individual_members[action.payload.index].bankName = action.payload.value
      }
      return{
        ...state,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_BANK_NAME:
      if(action.payload.type === 'corporate'){
        corporate_members[action.payload.index].bankName = action.payload.value
      }else{
        individual_members[action.payload.index].bankName = action.payload.value
      }
      return{
        ...state,
        individual_members: individual_members,
        corporate_members: corporate_members
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_BLUR_SURNAME:
      if(action.payload.type === 'corporate'){
        errors.corporate_members[action.payload.index].surname = action.payload.value
      }else{
        errors.individual_members[action.payload.index].surname = action.payload.value
      }
      return{
        ...state,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_SURNAME:
      if(action.payload.type === 'corporate'){
        corporate_members[action.payload.index].surname = action.payload.value
      }else{
        individual_members[action.payload.index].surname = action.payload.value
      }
      return{
        ...state,
        individual_members: individual_members,
        corporate_members: corporate_members
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_SET_INITIAL_ERRORS:
      let corporate_errors = [];
      let individual_errors = [];
      if (action.payload.type === 'corporate') {
        for (let i = 0; i < action.payload.count; i++) {
          corporate_errors.push({
            surname: {valid: false, message: '', touched: false, label: 'Surname'},
            bankName: {valid: false, message: '', touched: false, label: 'Bank Name'},
            phone: {valid: false, message: '', touched: false, label: 'Bank Name'},
            email: {valid: false, message: '', touched: false, label: 'Address'}
          })
        }
        errors.corporate_members = corporate_errors
      }else{
        for (let i = 0; i < action.payload.count; i++) {
          individual_errors.push({
            surname: {valid: false, message: '', touched: false, label: 'Surname'},
            bankName: {valid: false, message: '', touched: false, label: 'Bank Name'},
            phone: {valid: false, message: '', touched: false, label: 'Bank Name'},
            email: {valid: false, message: '', touched: false, label: 'Address'}
          })
        }
        errors.individual_members = individual_errors
      }
      return {
        ...state,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CLICK_DELETE_DEBIT_CARD:
      debit_cards.splice(action.payload.index, action.payload.index);
      errors.debit_cards.slice(action.payload.index, action.payload.index);
      return {
        ...state,
        debit_cards: debit_cards,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_BLUR_DEBIT_ADDRESS:
      errors.debit_cards[action.payload.index].address = action.payload.value
      return {
        ...state,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_DEBIT_ADDRESS:
      debit_cards[action.payload.index].address = action.payload.value;
      return {
        ...state,
        debit_cards: debit_cards
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_BLUR_DEBIT_NAME:
      errors.debit_cards[action.payload.index].name = action.payload.value
      return {
        ...state,
        errors: errors
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_DEBIT_NAME:
      debit_cards[action.payload.index].name = action.payload.value;
      return {
        ...state,
        debit_cards: debit_cards
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CHANGE_INDIVIDUAL_MEMBER:
      debit_cards[action.payload.index].member = action.payload.value;
      return {
        ...state,
        debit_cards: debit_cards
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_SET_INITIAL_DATA:
      individual_members = action.payload.value;
      corporate_members = action.payload.corp;
      for (let i = 0; i < corporate_members.length; i++ ) {
        errors.corporate_members.push(
          {
            surname: {valid: false, message: '', touched: false, label: 'Surname'},
            bankName: {valid: false, message: '', touched: false, label: 'Bank Name'},
            phone: {valid: false, message: '', touched: false, label: 'Bank Name'},
            email: {valid: false, message: '', touched: false, label: 'Address'}
          }
        )
      }
      for (let i = 0; i < individual_members.length; i++ ) {
        errors.individual_members.push(
          {
            surname: {valid: false, message: '', touched: false, label: 'Surname'},
            bankName: {valid: false, message: '', touched: false, label: 'Bank Name'},
            phone: {valid: false, message: '', touched: false, label: 'Bank Name'},
            email: {valid: false, message: '', touched: false, label: 'Address'}
          }
        )
      }
      return {
        ...state,
        errors:errors,
        individual_members: individual_members,
        corporate_members: corporate_members
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_ON_CLICK_ADD_DEBIT_CARD:
      errors.debit_cards.push({
        member: {valid: false, message: '', touched: false, label: 'Registered Member'},
        name: {valid: false, message: '', touched: false, label: 'Name'},
        address: {valid: false, message: '', touched: false, label: 'Address'}
      });
      debit_cards.push({member: '', name: '', address: ''});
      return {
        ...state,
        errors: errors,
        debit_cards: debit_cards
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_MASTER_DEBIT_REQUIRE:
      return {
        ...state,
        require_master_debit: action.payload.value
      }
    case CREATE_NEW_COMPANY_CONTACT_DETAILS_CHANGE_BANK_ACCOUNT:
      return {
        ...state,
        bank_account: action.payload.value
      }
    default:
      return state
  }
}
