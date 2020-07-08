import { combineReducers } from 'redux'
import counter from './counter'
import auth from './auth'
import user_list from './user_list'
import notification from './notificationReducer';
import employees_list from "./settings/employees_list";
import agents_list from "./settings/agents";
import settings_header_menu from "./settings/settings_header_menu";
import nominees_list from "./settings/nominees_list";
import clients_list from "./clients";
import new_company_menu from "./create_new_company/new_company_menu";
import organisation_details from "./create_new_company/organisation_details";
import personal_details from "./create_new_company/personal_details";
import contact_details from "./create_new_company/contact_details";
import fill_in_details from "./create_new_company/fill_in_details";
import activities_information from "./create_new_company/activities_information";
import audit_clients_contact_person_list from "./settings/audit_clients_contact_person_list";
import admin_menu from "./admin_menu";
import individual_fill_in_details from "./create_new_company/individual_fill_in_details";
import corporate_fill_in_details from "./create_new_company/corporate_fill_in_details";
import {routerReducer} from 'react-router-redux';

import {reducer as modalReducer} from 'react-redux-modal'

const rootReducer = combineReducers({
  corporate_fill_in_details,
  activities_information,
  organisation_details,
  contact_details,
  settings_header_menu,
  personal_details,
  admin_menu,
  nominees_list,
  audit_clients_contact_person_list,
  routing: routerReducer,
  modals: modalReducer,
  employees_list,
  fill_in_details,
  individual_fill_in_details,
  new_company_menu,
  agents_list,
  counter,
  clients_list,
  auth,
  user_list,
  notification,
})

export default rootReducer
