import {
  CREATE_ORGANISATION_DETAILS_ADD_INDIVIDUAL_MEMBER,
  CREATE_ORGANISATION_DETAILS_ADD_SHARE_CAPITAL,
  CREATE_ORGANISATION_DETAILS_AGENT_CHANGE,
  CREATE_ORGANISATION_DETAILS_AUTHORISED_PERSON_CHANGE,
  CREATE_ORGANISATION_DETAILS_BENEFICIAL_OWNER_CHANGE,
  CREATE_ORGANISATION_DETAILS_CHECK_AGENT,
  CREATE_ORGANISATION_DETAILS_CHANGE_ADDRESS_SERVICE,
  CREATE_ORGANISATION_DETAILS_CHANGE_CLIENT_USER,
  CREATE_ORGANISATION_DETAILS_CHANGE_COMPANY_TYPE,
  CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_COMPANY_NAME,
  CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_SHAREHOLDER,
  CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_TYPE,
  CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_MEMBER_SHAREHOLDER,
  CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_NOMINEE,
  CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_NOMINEE_NAME,
  CREATE_ORGANISATION_DETAILS_CHANGE_OTHER_ADDRESS,
  CREATE_ORGANISATION_DETAILS_CHANGE_TRADING_ACTIVITY,
  CREATE_ORGANISATION_DETAILS_CHANGESHARE_TYPE,
  CREATE_ORGANISATION_DETAILS_CHECK_AUTHORISED_PERSON,
  CREATE_ORGANISATION_DETAILS_CHECK_BENEFICAL_OWNER,
  CREATE_ORGANISATION_DETAILS_CHECK_PROPOSED_COMPANY_ABBREVIATION,
  CREATE_ORGANISATION_DETAILS_CHECK_PROPOSED_COMPANY_NAME,
  CREATE_ORGANISATION_DETAILS_CHECK_TRADING_ACTIVITY,
  CREATE_ORGANISATION_DETAILS_CHECK_OTHER_ADDRESSES,
  CREATE_ORGANISATION_DETAILS_CHECK_ADDRESS_SERVICE,
  CREATE_ORGANISATION_DETAILS_CLICK_ADD_CORPORATE_MEMBER,
  CREATE_ORGANISATION_DETAILS_DELETE_AUTHORISED_SHARE_CAPITAL,
  CREATE_ORGANISATION_DETAILS_DELETE_CORPORATE_MEMBER,
  CREATE_ORGANISATION_DETAILS_DELETE_INDIVIDUAL_MEMBER,
  CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_CLICK_INVITE,
  CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_EMAIL,
  CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_FIRST_NAME,
  CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_LAST_NAME,
  CREATE_ORGANISATION_DETAILS_NAME_OF_CHARES,
  CREATE_ORGANISATION_DETAILS_NUMBER_OF_CHARES,
  CREATE_ORGANISATION_DETAILS_PER_SHARE,
  CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_ABBREVIATION_CHANGE,
  CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_CHANGE,
  CREATE_ORGANISATION_DETAILS_SET_CORPORATE_MEMBERS_ERRORS,
  CREATE_ORGANISATION_DETAILS_SET_INITIAL_DATA,
  CREATE_ORGANISATION_DETAILS_UMA_CHANGE,
  CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_COMPANY_NAME,
  CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_NOMINEE,
  CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_TYPES,
  CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_TYPES,
  CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_NOMINEE,
  GET_INITIAL_SELECT_EMPLOYEES,
  CREATE_ORGANISATION_DETAILS_SET_INDIVIDUAL_MEMBERS_ERRORS,
  CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_COMPANY_NAME,
  CREATE_ORGANISATION_DETAILS_SET_AUTHORISED_SHARE_CAPITAL_ERRORS,
  CREATE_ORGANISATION_DETAILS_BLUR_NUMBER_OF_SHARES,
  CREATE_ORGANISATION_DETAILS_BLUR_CLASS_OF_SHARES,
  CREATE_ORGANISATION_DETAILS_BLUR_VALUE_PER_SHARES,
  CREATE_ORGANISATION_DETAILS_BLUR_TYPE_OF_SHARES
} from "../../constants/actionTypes";


let share_capital_validation = {
      numberOfShares: {valid: false, message: '', touched: false, label:'Nomber Of Shares'},
      valuePerShare: {valid: false, message: '', touched: false, label:'Value Per Share'},
      typeOfShare: {valid: false, message: '', touched: false, label:'Type Of Share'},
      classOfShare: {valid: false, message: '', touched: false, label:'Class Of Share'}
    }
let members_validation = {
      nominee: {valid: false, message: '', touched: false, label:'Nominee'},
      companyName: {valid: false, message: '', touched: false, label:'Company Name'},
      types: {valid: false, message: '', touched: false, label:'Type'}
    }
const initialState = {
  errors: {
    authorised_share_capital: [],
    corporate_members: [],
    individual_members: [],
    uma_user: {valid: false, message: "", touched: false, label:""},
    proposed_company_name: {valid: false, message: "", touched: false, label:"Proposed Company Name"},
    agent: {valid: false, message: "", touched: false, label:"Agent"},
    authorised_person: {valid: false, message: "", touched: false, label:"Authorised Person"},
    beneficial_owner: {valid: false, message: "", touched: false, label:"Beneficial Owner"},
    proposed_company_abbreviation: {valid: false, message: "", touched: false, label:"Proposed Company Abbreviation"},
    client_user: {valid: false, message: "", touched: false, label:""},
    company_other_address: {valid: false, message: "", touched: false, label:"Other Addresses"},
    company_address_service: {valid: false, message: "", touched: false, label:"Company Address Service"},
    trading_activity: {valid: false, message: "", touched: false, label:"Main Trading Activity"}
  },
  share_types: [],
  registered_address: [],
  employees: [],
  agents: [],
  clients: [],
  individual_nominees: [],
  corporate_nominees: [],
  shareholder_types: [],
  corporate_members: [],
  individual_members: [],
  authorised_share_capital: [],
  member_types: [],
  new_user: {
    email: '',
    lastName: '',
    firstName: ''
  },
  organisation_details: {
    uma_user: '',
    proposed_company_name: '',
    agent: '',
    authorised_person: '',
    beneficial_owner: '',
    proposed_company_abbreviation: '',
    company_type: 'corporate_shareholder',
    client_user: '',
    company_other_address: '',
    company_address_service: '',
    trading_activity: ''
  }
}

export default function organisation_details(state = initialState, action) {
  let corporate_members = state.corporate_members;
  let individual_members = state.individual_members;
  let authorised_share_capital = state.authorised_share_capital;
  let new_user = state.new_user;
  let errors = state.errors;

  switch (action.type) {
    case CREATE_ORGANISATION_DETAILS_BLUR_VALUE_PER_SHARES:
      errors.authorised_share_capital[action.payload.index].valuePerShare = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_TYPE_OF_SHARES:
      errors.authorised_share_capital[action.payload.index].typeOfShare = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_CLASS_OF_SHARES:
      errors.authorised_share_capital[action.payload.index].classOfShare = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_NUMBER_OF_SHARES:
      errors.authorised_share_capital[action.payload.index].numberOfShares = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_COMPANY_NAME:
      errors.individual_members[action.payload.index].companyName = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_COMPANY_NAME:
      errors.corporate_members[action.payload.index].companyName = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_NOMINEE:
      errors.corporate_members[action.payload.index].nominee = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_CORPORATE_MEMBER_TYPES:
      errors.corporate_members[action.payload.index].types = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_TYPES:
      errors.individual_members[action.payload.index].types = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_BLUR_INDIVIDUAL_MEMBER_NOMINEE:
       errors.individual_members[action.payload.index].nominee = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_SET_AUTHORISED_SHARE_CAPITAL_ERRORS:
      let authorised_errors = [];
      if (action.payload.value) {
        for (let i = 0; i < action.payload.value; i++) {
          authorised_errors.push(share_capital_validation)
        }
      }else {
        authorised_errors = [
          share_capital_validation
        ]
      }
      errors.authorised_share_capital = authorised_errors;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_SET_INDIVIDUAL_MEMBERS_ERRORS:
      let individual_errors = [];
      if (action.payload.value) {
        for (let i = 0; i < action.payload.value; i++) {
          individual_errors.push(
           members_validation
          )
        }
      }else {
        individual_errors = [
          members_validation
        ]
      }
      errors.individual_members = individual_errors;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_SET_CORPORATE_MEMBERS_ERRORS:
      let corporate_errors = [];
      if (action.payload.value) {
        for (let i = 0; i < action.payload.value; i++) {
          corporate_errors.push(
            members_validation
          )
        }
      }else {
        corporate_errors = [
          members_validation
        ]
      }
      errors.corporate_members = corporate_errors;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_CHECK_TRADING_ACTIVITY:
      errors.trading_activity = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_CHECK_OTHER_ADDRESSES:
      errors.company_other_address = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_CHECK_ADDRESS_SERVICE:
      errors.company_address_service = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_CHECK_BENEFICAL_OWNER:
      errors.beneficial_owner = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_CHECK_AGENT:
      errors.agent = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_CHECK_AUTHORISED_PERSON:
      errors.authorised_person = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_CHECK_PROPOSED_COMPANY_ABBREVIATION:
      errors.proposed_company_abbreviation = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_CHECK_PROPOSED_COMPANY_NAME:
      errors.proposed_company_name = action.payload.valid;
      return {
        ...state,
        errors: errors
      }
    case CREATE_ORGANISATION_DETAILS_SET_INITIAL_DATA:
      return {
        ...state,
        organisation_details: action.payload.organisation_details,
        individual_members: action.payload.individual_members,
        authorised_share_capital: action.payload.authorised_share_capital,
        corporate_members: action.payload.corporate_members
      }
    case CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_CLICK_INVITE:
      new_user = {
        email: '',
        lastName: '',
        firstName: ''
      };
      return {
        ...state,
        new_user: new_user,
        clients: [...state.clients, action.payload.client]
      }
    case CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_LAST_NAME:
      new_user.lastName = action.payload.value;
      return {
        ...state,
        new_user: new_user
      }
    case CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_FIRST_NAME:
      new_user.firstName = action.payload.value;
      return {
        ...state,
        new_user: new_user
      }
    case CREATE_ORGANISATION_DETAILS_EDIT_NEW_USER_EMAIL:
      new_user.email = action.payload.value;
      return {
        ...state,
        new_user: new_user
      }
    case CREATE_ORGANISATION_DETAILS_PER_SHARE:
      authorised_share_capital[action.payload.index].valuePerShare = action.payload.value;
      return {
        ...state,
        authorised_share_capital: authorised_share_capital
      }
    case CREATE_ORGANISATION_DETAILS_NAME_OF_CHARES:
      authorised_share_capital[action.payload.index].classOfShare = action.payload.value;
      return {
        ...state,
        authorised_share_capital: authorised_share_capital
      }
    case CREATE_ORGANISATION_DETAILS_NUMBER_OF_CHARES:
      authorised_share_capital[action.payload.index].numberOfShares = action.payload.value;
      return {
        ...state,
        authorised_share_capital: authorised_share_capital
      }
    case CREATE_ORGANISATION_DETAILS_DELETE_AUTHORISED_SHARE_CAPITAL:
      authorised_share_capital.splice(action.payload.index, action.payload.index)
      errors.authorised_share_capital.splice(action.payload.index, action.payload.index)
      return {
        ...state,
        errors: errors,
        authorised_share_capital: authorised_share_capital
      }
    case CREATE_ORGANISATION_DETAILS_CHANGESHARE_TYPE:
      authorised_share_capital[action.payload.index].typeOfShare = action.payload.value;
      return {
        ...state,
        authorised_share_capital: authorised_share_capital
      }
    case CREATE_ORGANISATION_DETAILS_ADD_SHARE_CAPITAL:
      authorised_share_capital.push(
        {
          numberOfShares: '',
          typeOfShare: '',
          classOfShare: '',
          valuePerShare: '',
        }
      );
      errors.authorised_share_capital.push(
        share_capital_validation
      )
      return {
        ...state,
        errors: errors,
        authorised_share_capital: authorised_share_capital
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_TRADING_ACTIVITY:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          trading_activity: action.payload.value,
        }
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_OTHER_ADDRESS:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          company_other_address: action.payload.value,
        }
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_ADDRESS_SERVICE:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          company_address_service: action.payload.value,
        }
      }
    case CREATE_ORGANISATION_DETAILS_DELETE_INDIVIDUAL_MEMBER:
      individual_members.splice(action.payload.index, action.payload.index)
      errors.individual_members.splice(action.payload.index, action.payload.index)
      return {
        ...state,
        errors: errors,
        individual_members: individual_members
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_MEMBER_SHAREHOLDER:
      individual_members[action.payload.value].types[action.payload.index] = !individual_members[action.payload.value].types[action.payload.index];
      return {
        ...state,
        individual_members: individual_members
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_NOMINEE_NAME:
      individual_members[action.payload.index].companyName = action.payload.value;
      return {
        ...state,
        individual_members: individual_members
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_INDIVIDUAL_NOMINEE:
      individual_members[action.payload.index].nominee = action.payload.value;
      return {
        ...state,
        individual_members: individual_members
      }
    case CREATE_ORGANISATION_DETAILS_ADD_INDIVIDUAL_MEMBER:
      individual_members.push(
        {
          nominee: '',
          companyName: '',
          types: {
            individual_director: false,
            individual_shareholder: false,
            secretary: false,
            bank_signatory: false,
            beneficiary: false,
            settlor: false,
            protector: false,
            administrator: false,
          },
          position: 'individual'
        }
      );
      errors.individual_members.push(
       members_validation
      );
      return {
        ...state,
        errors: errors,
        individual_members: individual_members
      }
    case CREATE_ORGANISATION_DETAILS_DELETE_CORPORATE_MEMBER:
      errors.corporate_members.splice(action.payload.index, action.payload.index)
      corporate_members.splice(action.payload.index, action.payload.index)
      return {
        ...state,
        errors: errors,
        corporate_members: corporate_members
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_SHAREHOLDER:
      corporate_members[action.payload.value].types[action.payload.index] = !corporate_members[action.payload.value].types[action.payload.index];
      return {
        ...state,
        corporate_members: corporate_members
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_COMPANY_NAME:
      corporate_members[action.payload.index].companyName = action.payload.value;
      return {
        ...state,
        corporate_members: corporate_members
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_CORPORATE_MEMBER_TYPE:
      corporate_members[action.payload.index].nominee = action.payload.value;
      return {
        ...state,
        corporate_members: corporate_members
      }
    case CREATE_ORGANISATION_DETAILS_CLICK_ADD_CORPORATE_MEMBER:
      let list = state.corporate_members;
      list.push(
        {
          nominee: '',
          companyName: '',
          types: {
            corporate_director: false,
            corporate_shareholder: false
          },
          position: 'corporate'
        }
      );
      errors.corporate_members.push(
        members_validation
      );
      return {
        ...state,
        errors: errors,
        corporate_members: list
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_CLIENT_USER:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          client_user: action.payload.value,
        }
      }
    case CREATE_ORGANISATION_DETAILS_CHANGE_COMPANY_TYPE:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          company_type: action.payload.name,
        }
      }
    case CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_ABBREVIATION_CHANGE:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          proposed_company_abbreviation: action.payload.name,
        }
      }
    case CREATE_ORGANISATION_DETAILS_BENEFICIAL_OWNER_CHANGE:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          beneficial_owner: action.payload.name,
        }
      }
    case CREATE_ORGANISATION_DETAILS_AUTHORISED_PERSON_CHANGE:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          authorised_person: action.payload.name,
        }
      }
    case CREATE_ORGANISATION_DETAILS_AGENT_CHANGE:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          agent: action.payload.agent,
        }
      }
    case CREATE_ORGANISATION_DETAILS_PROPOSED_COMPANY_CHANGE:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          proposed_company_name: action.payload.name,
        }
      }
    case CREATE_ORGANISATION_DETAILS_UMA_CHANGE:
      return {
        ...state,
        organisation_details: {
          ...state.organisation_details,
          uma_user: action.payload.uma_user,
        }
      }
    case GET_INITIAL_SELECT_EMPLOYEES:
      return {
        ...state,
        clients: action.payload.clients,
        employees: action.payload.employees,
        agents: action.payload.agents,
        individual_nominees: action.payload.individual_nominees,
        corporate_nominees: action.payload.corporate_nominees,
        shareholder_types: action.payload.shareholder_types,
        share_types: action.payload.share_types,
        registered_address: action.payload.registered_address,
        member_types: action.payload.member_types
      }
    default:
      return state
  }
}
