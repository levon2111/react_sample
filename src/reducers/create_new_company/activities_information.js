import {
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SET_INITIAL_DATA,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_LOCATION,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_CURRENCY,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_INDUSTRY_OPERATING,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_INDUSTRY_OPERATING,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_AVERAGE_VALUE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_AVERAGE_VALUE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_AVERAGE_NUMBER,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_AVERAGE_NUMBER,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SOURCE_FUNDS_START,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SOURCE_FUNDS_START,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_INITIAL_FUNDS,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_INITIAL_FUNDS,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_COMPANY_ACTIVITIES,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_COMPANY_ACTIVITIES,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_ADD_SUBSIDIARY_COMPANY,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_NAME,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_NAME,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_REGISTRATION_NUMBER,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_REGISTRATION_NUMBER,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_DOMICILE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_DOMICILE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_ADDRESS,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_ADDRESS,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_ACTIVITY,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_ACTIVITY,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_ADD_SHARE_CAPITAL_TO_SUBSIDIARY_COMPANY,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_NUMBER_OF_SHARES_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_NUMBER_OF_SHARES_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_TYPE_OF_SHARE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_CLASS_OF_SHARES,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_CLASS_OF_SHARE_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_VALUE_PER_SHARE_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_VALUE_PER_SHARE_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_PAID_UP_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_PAID_UP_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_SHARE_CAPITAL,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_SUBSIDIARY_COMPANY,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_ADD_MAIN_SUPLIERS,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_MAIN_SUPLIERS,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_NAME_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_NAME_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_LINK_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_LINK_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_AVERAGE_VALUE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_AVERAGE_VALUE_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_AVERAGE_NUMBER,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_AVERAGE_NUMBER_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_ADD_COMPANY_SERVICES,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_COMPANY_SERVICES,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_COMPANY_SERVICES_NAME_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_COMPANY_SERVICES_NAME_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_ADD_MAIN_SUPPLIER,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_DELETE_MAIN_SUPPLIER,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_MAIN_SUPPLIER_LINK_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_MAIN_SUPPLIER_LINK_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_MAIN_SUPPLIER_NAME_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_MAIN_SUPPLIER_NAME_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_BB,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_BC,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_MALTA_SALES_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_MALTA_SALES_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_WITHIN_SALES_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_WITHIN_SALES_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_OUTSIDE_SALES_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_OUTSIDE_SALES_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_AVERAGE_VALUE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_AVERAGE_VALUE_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_AVERAGE_NUMBER,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_AVERAGE_NUMBER_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_MALTA_CHANGE,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_MALTA_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_WITHIN_EU,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_WITHIN_EU_BLUR,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_OUTSIDE_EU,
  CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_OUTSIDE_EU_BLUR,
} from "../../constants/actionTypes";

const initialState = {
  errors:{
    industry_operating: {valid: false, message: '', touched: false, label: 'Industry operating'},
    location_of_income_generated_assets: {valid: false, message: '', touched: false, label: 'Location'},
    currency_of_trading: {valid: false, message: '', touched: false, label: 'Currency'},
    average_value_of_purchase : {valid: false, message: '', touched: false, label: 'Average Value'},
    average_number_of_monthly: {valid: false, message: '', touched: false, label: 'Average Number'},
    source_of_funds_to_start: {valid: false, message: '', touched: false, label: 'Source Of Funds'},
    initial_funds: {valid: false, message: '', touched: false, label: 'Initial Funds'},
    company_activities: {valid: false, message: '', touched: false, label: 'Company Activities'},
    subsidiary_companies:[],
    number_of_main_suppliers: {
      numbers:[],
      average_value: {valid: false, message: '', touched: false, label: 'Average Value'},
      average_number: {valid: false, message: '', touched: false, label: 'Average Number'}
    },
    company_services_offered:[],
    sales_are: {
      customers: []
    },
    forecasted_purchases:{
      in_malta: {valid: false, message: '', touched: false, label: 'purchases/ expenses in malta'},
      within_eu: {valid: false, message: '', touched: false, label: 'purchases/ espenses within eu'},
      outside_eu: {valid: false, message: '', touched: false, label: 'purchases/ expenses outside the eu'}
    },
    forecasted_sales: {
      sales_in_malta:{valid: false, message: '', touched: false, label: 'Sales In Malta'},
      sales_within_eu:{valid: false, message: '', touched: false, label: 'Sales Within EU'},
      sales_outside_eu:{valid: false, message: '', touched: false, label: 'Sales Outside the EU'},
      average_value:{valid: false, message: '', touched: false, label: 'Average Value'},
      average_Number:{valid: false, message: '', touched: false, label: 'Average Number'},
    }
  },
  countries: [],
  currencies: [],
  share_types: [],
  industry_operating: '',
  location_of_income_generated_assets: 1,
  currency_of_trading: 1,
  average_value_of_purchase : '',
  average_number_of_monthly: '',
  source_of_funds_to_start: '',
  initial_funds: '',
  company_activities: '',
  subsidiary_companies: [],
  number_of_main_suppliers: {
    numbers:[],
    average_value: '',
    average_number: ''
  },
  company_services_offered:[],
  sales_are: {
    b2b: false,
    b2c: false,
    customers: []
  },
  forecasted_sales: {
    sales_in_malta:"",
    sales_within_eu:"",
    sales_outside_eu:"",
    average_value:"",
    average_Number:"",
  },
  forecasted_purchases:{
    in_malta: "",
    within_eu: "",
    outside_eu: ""
  }
}

export default function activities_information(state = initialState, action) {
  let countries = state.countries;
  let currencies = state.currencies;
  let share_types = state.share_types;
  let errors = state.errors;
  let subsidiary_companies = state.subsidiary_companies;
  let number_of_main_suppliers = state.number_of_main_suppliers;
  let company_services_offered = state.company_services_offered;
  let sales_are = state.sales_are;
  let forecasted_sales = state.forecasted_sales;
  let forecasted_purchases = state.forecasted_purchases;
  switch (action.type) {
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_OUTSIDE_EU_BLUR:
      errors.forecasted_purchases.outside_eu = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_OUTSIDE_EU:
      forecasted_purchases.outside_eu = action.payload.value
      return{
        ...state,
        forecasted_purchases:forecasted_purchases
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_WITHIN_EU_BLUR:
      errors.forecasted_purchases.within_eu = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_WITHIN_EU:
      forecasted_purchases.within_eu = action.payload.value
      return{
        ...state,
        forecasted_purchases:forecasted_purchases
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_MALTA_BLUR:
      errors.forecasted_purchases.in_malta = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_PURCHCASES_MALTA_CHANGE:
      forecasted_purchases.in_malta = action.payload.value
      return{
        ...state,
        forecasted_purchases:forecasted_purchases
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_AVERAGE_NUMBER_BLUR:
      errors.forecasted_sales.average_Number = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_AVERAGE_NUMBER:
      forecasted_sales.average_Number = action.payload.value
      return{
        ...state,
        forecasted_sales:forecasted_sales
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_AVERAGE_VALUE_BLUR:
      errors.forecasted_sales.average_value = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_AVERAGE_VALUE:
      forecasted_sales.average_value = action.payload.value
      return{
        ...state,
        forecasted_sales:forecasted_sales
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_OUTSIDE_SALES_BLUR:
      errors.forecasted_sales.sales_outside_eu = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_OUTSIDE_SALES_CHANGE:
      forecasted_sales.sales_outside_eu = action.payload.value
      return{
        ...state,
        forecasted_sales:forecasted_sales
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_WITHIN_SALES_BLUR:
      errors.forecasted_sales.sales_within_eu = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_WITHIN_SALES_CHANGE:
      forecasted_sales.sales_within_eu = action.payload.value
      return{
        ...state,
        forecasted_sales:forecasted_sales
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_MALTA_SALES_BLUR:
      errors.forecasted_sales.sales_in_malta = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_FORECASTED_SALES_MALTA_SALES_CHANGE:
      forecasted_sales.sales_in_malta = action.payload.value
      return{
        ...state,
        forecasted_sales:forecasted_sales
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_BC:
      sales_are.b2c = !sales_are.b2c;
      return{
        ...state,
        sales_are: sales_are
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_BB:
      sales_are.b2b = !sales_are.b2b;
      return{
        ...state,
        sales_are: sales_are
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_MAIN_SUPPLIER_NAME_BLUR:
      errors.sales_are.customers[action.payload.index].name = action.payload.value;
      return{
        ...state,
        errors: errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_MAIN_SUPPLIER_NAME_CHANGE:
      sales_are.customers[action.payload.index].name = action.payload.value;
      return{
        ...state,
        sales_are: sales_are
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_MAIN_SUPPLIER_LINK_CHANGE:
          sales_are.customers[action.payload.index].link = action.payload.value;
          return{
            ...state,
            sales_are: sales_are
          }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_MAIN_SUPPLIER_LINK_BLUR:
      errors.sales_are.customers[action.payload.index].link = action.payload.value;
      return{
        ...state,
        errors: errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_DELETE_MAIN_SUPPLIER:
      sales_are.customers.splice(action.payload.value,action.payload.value);
      return{
        ...state,
        sales_are: sales_are
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SALES_ARE_ADD_MAIN_SUPPLIER:
      sales_are.customers.push({
        name:'',
        link: ''
      });
      errors.sales_are.customers.push({
        name:{valid: false, message: '', touched: false, label: 'Customer Name'},
        link:{valid: false, message: '', touched: false, label: 'Website Link'}
      });
      return{
        ...state,
        errors:errors,
        sales_are:sales_are
      }

    case CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_COMPANY_SERVICES_NAME_BLUR:
      errors.company_services_offered[action.payload.index].name = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_COMPANY_SERVICES_NAME_CHANGE:
      company_services_offered[action.payload.index].name = action.payload.value
      return{
        ...state,
        company_services_offered:company_services_offered
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_COMPANY_SERVICES:
      company_services_offered.splice(action.payload.value,action.payload.value)
      return{
        ...state,
        company_services_offered:company_services_offered
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_ADD_COMPANY_SERVICES:
      company_services_offered.push({
        name: ""
      })
      errors.company_services_offered.push({
        name: {valid: false, message: '', touched: false, label: 'Product Offered'}
      })
      return{
        ...state,
        errors:errors,
        company_services_offered:company_services_offered
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_AVERAGE_NUMBER_BLUR:
      errors.number_of_main_suppliers.average_number = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_AVERAGE_NUMBER:
      number_of_main_suppliers.average_number = action.payload.value
      return{
        ...state,
        number_of_main_suppliers:number_of_main_suppliers
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_AVERAGE_VALUE_BLUR:
      errors.number_of_main_suppliers.average_value = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_AVERAGE_VALUE:
      number_of_main_suppliers.average_value = action.payload.value
      return{
        ...state,
        number_of_main_suppliers:number_of_main_suppliers
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_LINK_BLUR:
      errors.number_of_main_suppliers.numbers[action.payload.index].link = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_LINK_CHANGE:
      number_of_main_suppliers.numbers[action.payload.index].link = action.payload.value
      return{
        ...state,
        number_of_main_suppliers:number_of_main_suppliers
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_NAME_BLUR:
      errors.number_of_main_suppliers.numbers[action.payload.index].name = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_MAIN_SUPLIERS_NAME_CHANGE:
      number_of_main_suppliers.numbers[action.payload.index].name = action.payload.value
      return{
        ...state,
        number_of_main_suppliers:number_of_main_suppliers
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_MAIN_SUPLIERS:
      number_of_main_suppliers.numbers.splice(action.payload.value,action.payload.value)
      errors.number_of_main_suppliers.numbers.splice(action.payload.value,action.payload.value)
      return{
        ...state,
        number_of_main_suppliers:number_of_main_suppliers,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_ADD_MAIN_SUPLIERS:
      number_of_main_suppliers.numbers.push({
        name:'',
        link:''
      })
      errors.number_of_main_suppliers.numbers.push({
        name:{valid: false, message: '', touched: false, label: 'Customer Name'},
        link:{valid: false, message: '', touched: false, label: 'Website Link'}
      })
      return{
        ...state,
        number_of_main_suppliers:number_of_main_suppliers,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_SUBSIDIARY_COMPANY:
      subsidiary_companies.splice(action.payload.x,action.payload.x)
      errors.subsidiary_companies.splice(action.payload.x,action.payload.x)
      return{
        ...state,
        subsidiary_companies: subsidiary_companies,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_DELETE_SHARE_CAPITAL:
      subsidiary_companies[action.payload.x].share_capital.splice(action.payload.y,action.payload.y)
      errors.subsidiary_companies[action.payload.x].share_capital.splice(action.payload.y,action.payload.y)
      return{
        ...state,
        subsidiary_companies: subsidiary_companies,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_PAID_UP_BLUR:
      errors.subsidiary_companies[action.payload.x].share_capital[action.payload.y].paidUp = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_PAID_UP_CHANGE:
      subsidiary_companies[action.payload.x].share_capital[action.payload.y].paidUp = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_VALUE_PER_SHARE_BLUR:
      errors.subsidiary_companies[action.payload.x].share_capital[action.payload.y].valuePerShare = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_VALUE_PER_SHARE_CHANGE:
      subsidiary_companies[action.payload.x].share_capital[action.payload.y].valuePerShare = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_CLASS_OF_SHARE_BLUR:
      errors.subsidiary_companies[action.payload.x].share_capital[action.payload.y].classOfShare = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_CLASS_OF_SHARES:
      subsidiary_companies[action.payload.x].share_capital[action.payload.y].classOfShare = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_TYPE_OF_SHARE:
      subsidiary_companies[action.payload.x].share_capital[action.payload.y].typeOfShare = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_NUMBER_OF_SHARES_BLUR:
      errors.subsidiary_companies[action.payload.x].share_capital[action.payload.y].numberOfShares = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SHARE_CAPITAL_NUMBER_OF_SHARES_CHANGE:
      subsidiary_companies[action.payload.x].share_capital[action.payload.y].numberOfShares = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_ADD_SHARE_CAPITAL_TO_SUBSIDIARY_COMPANY:
      subsidiary_companies[action.payload.index].share_capital.push({
        numberOfShares:"",
        typeOfShare:"",
        classOfShare:"",
        valuePerShare:"",
        paidUp:""
      })
      errors.subsidiary_companies[action.payload.index].share_capital.push({
        numberOfShares:{valid: false, message: '', touched: false, label: 'Number Of Shares'},
        typeOfShare:{valid: false, message: '', touched: false, label: 'Type Of Share'},
        classOfShare:{valid: false, message: '', touched: false, label: 'Class Of Share'},
        valuePerShare:{valid: false, message: '', touched: false, label: 'Value Per Share'},
        paidUp:{valid: false, message: '', touched: false, label: 'Paid Up'}
      })
      return {
        ...state,
        subsidiary_companies:subsidiary_companies,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_ACTIVITY:
      errors.subsidiary_companies[action.payload.index].activity = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_ACTIVITY:
      subsidiary_companies[action.payload.index].activity = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_ADDRESS:
      errors.subsidiary_companies[action.payload.index].address = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_ADDRESS:
      subsidiary_companies[action.payload.index].address = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_DOMICILE:
      errors.subsidiary_companies[action.payload.index].domicile = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_DOMICILE:
      subsidiary_companies[action.payload.index].domicile = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_REGISTRATION_NUMBER:
      errors.subsidiary_companies[action.payload.index].registration_number = action.payload.value
      return{
        ...state,
        errors:errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_REGISTRATION_NUMBER:
      subsidiary_companies[action.payload.index].registration_number = action.payload.value
      return{
        ...state,
        subsidiary_companies: subsidiary_companies
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SUBSIDIARY_COMPANY_NAME:
      errors.subsidiary_companies[action.payload.index].name = action.payload.value
          return{
            ...state,
            errors:errors
          }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SUBSIDIARY_COMPANY_NAME:
      subsidiary_companies[action.payload.index].name = action.payload.value
          return{
            ...state,
            subsidiary_companies: subsidiary_companies
          }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_ADD_SUBSIDIARY_COMPANY:
      subsidiary_companies.push({
        name: '',
        registration_number:'',
        domicile: '',
        address:'',
        activity:'',
        share_capital: []
      })
      errors.subsidiary_companies.push({
        name: {valid: false, message: '', touched: false, label: 'Company Name'},
        registration_number:{valid: false, message: '', touched: false, label: 'Registration Number'},
        domicile: {valid: false, message: '', touched: false, label: 'Domicile'},
        address:{valid: false, message: '', touched: false, label: 'Address'},
        activity:{valid: false, message: '', touched: false, label: 'Activity'},
        share_capital: []
      })
          return{
            ...state,
            errors:errors,
            subsidiary_companies:subsidiary_companies
          }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_COMPANY_ACTIVITIES:
      errors.company_activities = action.payload.value
      return{
        ...state,
        errors: errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_COMPANY_ACTIVITIES:
      return{
        ...state,
        company_activities: action.payload.value
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_INITIAL_FUNDS:
      errors.initial_funds = action.payload.value
      return{
        ...state,
        errors: errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_INITIAL_FUNDS:
      return{
        ...state,
        initial_funds: action.payload.value
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_SOURCE_FUNDS_START:
      errors.source_of_funds_to_start = action.payload.value
      return{
        ...state,
        errors: errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_SOURCE_FUNDS_START:
      return{
        ...state,
        source_of_funds_to_start: action.payload.value
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_AVERAGE_NUMBER:
      errors.average_number_of_monthly = action.payload.value
      return{
        ...state,
        errors: errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_AVERAGE_NUMBER:
      return{
        ...state,
        average_number_of_monthly: action.payload.value
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_AVERAGE_VALUE:
      errors.average_value_of_purchase = action.payload.value
      return{
        ...state,
        errors: errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_AVERAGE_VALUE:
      return{
        ...state,
        average_value_of_purchase: action.payload.value
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_BLUR_INDUSTRY_OPERATING:
      errors.industry_operating = action.payload.value
      return{
        ...state,
        errors: errors
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_INDUSTRY_OPERATING:
      return{
        ...state,
        industry_operating: action.payload.value
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_CURRENCY:
      return {
        ...state,
        currency_of_trading:action.payload.value
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_CHANGE_LOCATION:
      return{
        ...state,
        location_of_income_generated_assets: action.payload.value
      }
    case CREATE_COMPANY_ACTIVITIES_INFORMATION_SET_INITIAL_DATA:
      countries = action.payload.countries;
      currencies = action.payload.currencies;
      share_types = action.payload.share_types;
      return {
        ...state,
        currencies: currencies,
        countries:countries,
        share_types:share_types
      }
    default:
      return state
  }
}
