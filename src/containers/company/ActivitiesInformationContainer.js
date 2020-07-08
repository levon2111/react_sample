import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ActivitiesInformation} from "../../components";
import * as ActivitiesInformationActions from "../../actions/create_new_company/ActivitiesInformationActions";
import {createSelector, createStructuredSelector} from "reselect";
import {client} from "../../apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types"; import Validators from "../../services/Validators"; import SubsidiaryCompanyContainer from "./SubsidiaryCompanyContainer";
import {NumberSuppliers} from "../../components/company/NumberSuppliers";
import {SubsidiaryCompanyServiceOffered} from "../../components/company/SubsidiaryCompanyServiceOffered"; import {ForecastedSales} from "../../components/company/ForecastedSales"; import {ForecastedPurchases} from "../../components/company/ForecastedPurchases";

class ActivitiesInformationContainer extends React.Component {

  static propTypes = {
    set_initial_data: PropTypes.func.isRequired,
    chnageLocation: PropTypes.func.isRequired,
    changeCurrency: PropTypes.func.isRequired,
    blurOperatingIndustry: PropTypes.func.isRequired,
    changeAverageValue: PropTypes.func.isRequired,
    changeIndustryOperating: PropTypes.func.isRequired,
    blurAverageValue: PropTypes.func.isRequired,
    changeAverageNumber: PropTypes.func.isRequired,
    blurAverageNumber: PropTypes.func.isRequired,
    changeSourceFundsStart: PropTypes.func.isRequired,
    blurSourceFundsStart: PropTypes.func.isRequired,
    changeInitialFunds: PropTypes.func.isRequired,
    blurInitialFunds: PropTypes.func.isRequired,
    changeCompanyActivities: PropTypes.func.isRequired,
    blurCompanyActivities: PropTypes.func.isRequired,
    addSubsidiaryCompany: PropTypes.func.isRequired,
    onClickAddMainSuppliers: PropTypes.func.isRequired,
    onClickDeleteMainSupplier: PropTypes.func.isRequired,
    onChangeMainSupplierName: PropTypes.func.isRequired,
    blurMainSupplierName: PropTypes.func.isRequired,
    onChangeMainSupplierLink: PropTypes.func.isRequired,
    blurMainSupplierLink: PropTypes.func.isRequired,
    changeMainSupplierAverageValue: PropTypes.func.isRequired,
    onBlurMainSupplierAverageValue: PropTypes.func.isRequired,
    changeMainSupplierAverageNumber: PropTypes.func.isRequired,
    onBlurMainSupplierAverageNumber: PropTypes.func.isRequired,
    onClickAddCompanyOfferedService: PropTypes.func.isRequired,
    onClickDeleteCompanyService: PropTypes.func.isRequired,
    changeCompanyServiceName: PropTypes.func.isRequired,
    blurCompanyServiceName: PropTypes.func.isRequired,
    onClickAddSalesMainSupplier: PropTypes.func.isRequired,
    onClickDeleteSalesAreMainSupplier: PropTypes.func.isRequired,
    blurSalesAreMainSupplierLink: PropTypes.func.isRequired,
    onChangeSalesAreMainSupplierLink: PropTypes.func.isRequired,
    onChangeSalesAreMainSupplierName: PropTypes.func.isRequired,
    blurSalesAreMainSupplierName: PropTypes.func.isRequired,
    onClickBB: PropTypes.func.isRequired,
    onClickBC: PropTypes.func.isRequired,
    changeSalesInMalta: PropTypes.func.isRequired,
    blurSalesInMalta: PropTypes.func.isRequired,
    changeSalesWithinEU: PropTypes.func.isRequired,
    blurSalesWithin: PropTypes.func.isRequired,
    changeSalesOutsideEU: PropTypes.func.isRequired,
    blurSalesOutsideEU: PropTypes.func.isRequired,
    changeSalesAverageValue: PropTypes.func.isRequired,
    blurSalesAverageValue: PropTypes.func.isRequired,
    changeSalesAverageNumber: PropTypes.func.isRequired,
    blurSalesAverageNumber: PropTypes.func.isRequired,
    changeForecastedPurchasesInMalta: PropTypes.func.isRequired,
    blurForecastedPurchasesInMalta: PropTypes.func.isRequired,
    changeForecastedPurchasesWithinEU: PropTypes.func.isRequired,
    blurForecastedPurchasesWithinEU: PropTypes.func.isRequired,
    changeForecastedPurchasesOutsideEU: PropTypes.func.isRequired,
    blurForecastedPurchasesOutsideEU: PropTypes.func.isRequired,
  };

  componentDidMount() {
    client.query({
      query: gql`
        query{
          countries{
            id
            value
            key
            text
          }
        }
      `
    }).then(({data}) => {
      let countries = data.countries;
      client.query({
        query:gql`
          query{
            currencies{
              id
              currencies
            }
          }
        `
      }).then(({data}) => {
        let currencies = data.currencies
        client.query({
          query: gql`
                    query {
                      shareTypes{
                        id
                        name
                      }
                    }
                  `
        }).then(({data}) => {
          let share_types = data.shareTypes
          this.props.set_initial_data(countries, currencies,share_types)
        }).catch((err) => {
          console.log(err)
        })

      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  onChnageLocation = (event) => {
    this.props.chnageLocation(event.value)
  };
  onChangeCurrency = (event) => {
    this.props.changeCurrency(event.value)
  };
  onChangeIndustryOperating = (event) => {
    this.props.changeIndustryOperating(event.target.value)
  };
  checkIndustryOperating = (event) => {
    let valid = Validators.required(event.target.value,"Industry Operating")
    this.props.blurOperatingIndustry(valid)
  };
  onChangeAverageValue =(event) => {
    this.props.changeAverageValue(event.target.value)
  };
  checkAverageValue = (event) => {
    let valid = Validators.required(event.target.value,"Average Value")
    this.props.blurAverageValue(valid)
  };
  onChangeAverageNumber = (event) => {
    this.props.changeAverageNumber(event.target.value)
  };
  checkAverageNumber = (event) => {
    let valid = Validators.required(event.target.value,"Average Number")
    this.props.blurAverageNumber(valid)
  };
  onChangeSourceFundsStart = (event) => {
    this.props.changeSourceFundsStart(event.target.value)
  };
  checkSourceFundsStart = (event) => {
    let valid = Validators.required(event.target.value,"Source Funds")
    this.props.blurSourceFundsStart(valid)
  };
  onChangeInitialFunds = (event) => {
    this.props.changeInitialFunds(event.target.value)
  };
  checkInitialFunds = (event) => {
    let valid = Validators.required(event.target.value,"Initial Funds")
    this.props.blurInitialFunds(valid)
  };
  onChangeCompanyActivities = (event) => {
    this.props.changeCompanyActivities(event.target.value)
  };
  checkCompanyActivities = (event) => {
    let valid = Validators.required(event.target.value,"Company Activities")
    this.props.blurCompanyActivities(valid)
  };
  onClickAddSubsidiaryCompany = () => {
    this.props.addSubsidiaryCompany()
  };
  addMainSupplier = () => {
    this.props.onClickAddMainSuppliers()
  }
  deleteMainSupplier = (index, event) => {
    this.props.onClickDeleteMainSupplier(index)
  };
  changeMainSupplierName = (index, event) => {
    this.props.onChangeMainSupplierName(index, event.target.value)
  };
  onBlurMainSupplierName = (index, event) => {
    let valid = Validators.required(event.target.value,"Customer Name")
    this.props.blurMainSupplierName(index, valid)
  };
  changeMainSupplierLink = (index, event) => {
    this.props.onChangeMainSupplierLink(index, event.target.value)
  };
  onBlurMainSupplierLink = (index, event) => {
    let valid = Validators.required(event.target.value,"Website Link")
    this.props.blurMainSupplierLink(index, valid)
  };
  onChangeMainSupplierAverageValue = (event) => {
    this.props.changeMainSupplierAverageValue(event.target.value)
  };
  blurMainSupplierAverageValue = (event) => {
    let valid = Validators.required(event.target.value,"Average Value")
    this.props.onBlurMainSupplierAverageValue(valid)
  };
  blurMainSupplierAverageNumber = (event) => {
    let valid = Validators.required(event.target.value,"Average Number")
    this.props.onBlurMainSupplierAverageNumber(valid)
  };
  onChangeMainSupplierAverageNumber = (event) => {
    this.props.changeMainSupplierAverageNumber(event.target.value)
  };
  addCompanyOfferedService = () => {
    this.props.onClickAddCompanyOfferedService()
  };
  deleteCompanyService = (index, event) => {
    this.props.onClickDeleteCompanyService(index)
  };
  onChangeCompanyServiceName = (index, event) => {
    this.props.changeCompanyServiceName(index, event.target.value)
  };
  checkCompanyServiceName = (index, event) => {
    let valid = Validators.required(event.target.value, "Service Offered")
    this.props.blurCompanyServiceName(index, valid)
  };
  addSalesMainSupplier = () => {
    this.props.onClickAddSalesMainSupplier()
  };
  deleteSalesAreMainSupplier =(index,event) => {
    this.props.onClickDeleteSalesAreMainSupplier(index)
  };
  onBlurSalesAreMainSupplierLink = (index, event) => {
    let valid = Validators.required(event.target.value, "Website Link")
    this.props.blurSalesAreMainSupplierLink(index, valid)
  };
  changeSalesAreMainSupplierLink = (index, event) => {
    this.props.onChangeSalesAreMainSupplierLink(index, event.target.value)
  };
  changeSalesAreMainSupplierName = (index, event) => {
    this.props.onChangeSalesAreMainSupplierName(index, event.target.value)
  };
  onBlurSalesAreMainSupplierName = (index, event) => {
    let valid = Validators.required(event.target.value, "Customer Name")
    this.props.blurSalesAreMainSupplierName(index, valid)
  };
  changeSalesBB = (event) => {
    this.props.onClickBB()
  };
  changeSalesBC = (event) => {
    this.props.onClickBC()
  };
  onChangeSalesInMalta = (event) => {
    this.props.changeSalesInMalta(event.target.value)
  };
  checkSalesInMalta = (event) => {
    let valid =  Validators.required(event.target.value, "Sales In Malta");
    this.props.blurSalesInMalta(valid)
  };
  checkSalesOutsideEU = (event) => {
    let valid =  Validators.required(event.target.value, "Sales Outside the EU");
    this.props.blurSalesOutsideEU(valid)
  };
  checkSalesAverageValue = (event) => {
    let valid =  Validators.required(event.target.value, "Average Value");
    this.props.blurSalesAverageValue(valid)
  };
  checkSalesWithinEU = (event) => {
    let valid =  Validators.required(event.target.value, "Sales Within EU");
    this.props.blurSalesWithin(valid)
  };
  checkSalesAverageNumber = (event) => {
    let valid =  Validators.required(event.target.value, "Average Number");
    this.props.blurSalesAverageNumber(valid)
  };
  onChangeSalesWithinEU = (event) =>{
    this.props.changeSalesWithinEU(event.target.value)
  };
  onChangeSalesOutsideEU = (event) =>{
    this.props.changeSalesOutsideEU(event.target.value)
  };
  onChangeSalesAverageValue = (event) =>{
    this.props.changeSalesAverageValue(event.target.value)
  };
  onChangeSalesAverageNumber = (event) =>{
    this.props.changeSalesAverageNumber(event.target.value)
  };
  onChangeForecastedPurchasesInMalta = (event) => {
   this.props.changeForecastedPurchasesInMalta(event.target.value)
  }
  onChangeForecastedPurchasesWithinEU = (event) => {
   this.props.changeForecastedPurchasesWithinEU(event.target.value)
  }
  onChangeForecastedPurchasesOutsideEU = (event) => {
   this.props.changeForecastedPurchasesOutsideEU(event.target.value)
  }

  checkForecastedPurchasesInMalta = (event) => {
    let valid = Validators.required(event.target.value,"purchases/ expenses in malta");
    this.props.blurForecastedPurchasesInMalta(valid)
  }

  checkForecastedPurchasesOutsideEU = (event) => {
    let valid = Validators.required(event.target.value,"purchases/ expenses");
    this.props.blurForecastedPurchasesOutsideEU(valid)
  }

  checkForecastedPurchasesWithinEU = (event) => {
    let valid = Validators.required(event.target.value,"purchases/ espenses within eu");
    this.props.blurForecastedPurchasesWithinEU(valid)
  }

  render() {
    let currencies_options = [];
    for (let i = 0; i < this.props.activities_information.currencies.length; i++){
      currencies_options.push({value: this.props.activities_information.currencies[i].id, label: this.props.activities_information.currencies[i].currencies})
    }
    let countries_options = [];
    for (let i = 0; i < this.props.activities_information.countries.length; i++){
      countries_options.push({value: this.props.activities_information.countries[i].id, label: this.props.activities_information.countries[i].text})
    }
    let number_of_main_suppliers_component = [];
    let main_suppliers = this.props.activities_information.number_of_main_suppliers.numbers;
    if (main_suppliers.length) {
      for (let i = 0; i < main_suppliers.length; i++) {
        if (main_suppliers[i]) {
          number_of_main_suppliers_component.push(
            <NumberSuppliers
              error={this.props.activities_information.errors.number_of_main_suppliers.numbers[i]}
              key={i}
              deleteMainSupplier={this.deleteMainSupplier}
              onBlurMainSupplierLink={this.onBlurMainSupplierLink}
              changeMainSupplierLink={this.changeMainSupplierLink}
              changeMainSupplierName={this.changeMainSupplierName}
              onBlurMainSupplierName={this.onBlurMainSupplierName}
              data={main_suppliers[i]}
              flag={false}
              index={i}
            />
          )
        }
      }
    } else {
      this.addMainSupplier(true);
      number_of_main_suppliers_component.push(
        <NumberSuppliers
          error={this.props.activities_information.errors.number_of_main_suppliers.numbers[0]}
          data={main_suppliers[0]}
          deleteMainSupplier={this.deleteMainSupplier}
          changeMainSupplierLink={this.changeMainSupplierLink}
          onBlurMainSupplierLink={this.onBlurMainSupplierLink}
          changeMainSupplierName={this.changeMainSupplierName}
          onBlurMainSupplierName={this.onBlurMainSupplierName}
          key={999999}
          flag={true}
          index={0}
        />
      )
    }
    let sales_number_of_main_suppliers_component = [];
    let sales_main_suppliers = this.props.activities_information.sales_are.customers;
    if (sales_main_suppliers.length) {
      for (let i = 0; i < sales_main_suppliers.length; i++) {
        if (sales_main_suppliers[i]) {
          sales_number_of_main_suppliers_component.push(
            <NumberSuppliers
              error={this.props.activities_information.errors.sales_are.customers[i]}
              key={i}
              deleteMainSupplier={this.deleteSalesAreMainSupplier}
              onBlurMainSupplierLink={this.onBlurSalesAreMainSupplierLink}
              changeMainSupplierLink={this.changeSalesAreMainSupplierLink}
              changeMainSupplierName={this.changeSalesAreMainSupplierName}
              onBlurMainSupplierName={this.onBlurSalesAreMainSupplierName}
              data={sales_main_suppliers[i]}
              flag={false}
              index={i}
            />
          )
        }
      }
    } else {
      this.addSalesMainSupplier(true);
      sales_number_of_main_suppliers_component.push(
        <NumberSuppliers
          error={this.props.activities_information.errors.sales_are.customers[0]}
          data={sales_main_suppliers[0]}
          deleteMainSupplier={this.deleteSalesAreMainSupplier}
          changeMainSupplierLink={this.changeSalesAreMainSupplierLink}
          onBlurMainSupplierLink={this.onBlurSalesAreMainSupplierLink}
          changeMainSupplierName={this.changeSalesAreMainSupplierName}
          onBlurMainSupplierName={this.onBlurSalesAreMainSupplierName}
          key={999999}
          flag={true}
          index={0}
        />
      )
    }
    let company_services_offered_component = [];
    let company_services_offered = this.props.activities_information.company_services_offered;
    if (company_services_offered.length) {
      for (let i = 0; i < company_services_offered.length; i++) {
        if (company_services_offered[i]) {
          company_services_offered_component.push(
            <SubsidiaryCompanyServiceOffered
              errors={this.props.activities_information.errors.company_services_offered[i]}
              key={i}
              data={company_services_offered[i]}
              deleteCompanyService={this.deleteCompanyService}
              onChangeCompanyServiceName={this.onChangeCompanyServiceName}
              checkCompanyServiceName={this.checkCompanyServiceName}
              flag={false}
              index={i}
            />
          )
        }
      }
    } else {
      this.addCompanyOfferedService(true);
      company_services_offered_component.push(
        <SubsidiaryCompanyServiceOffered
          onChangeCompanyServiceName={this.onChangeCompanyServiceName}
          checkCompanyServiceName={this.checkCompanyServiceName}
          deleteCompanyService={this.deleteCompanyService}
          errors={this.props.activities_information.errors.company_services_offered[0]}
          data={company_services_offered[0]}
          key={999999}
          flag={true}
          index={0}
        />
      )
    }

    let forecasted_sales =
      <ForecastedSales
        errors={this.props.activities_information.errors.forecasted_sales}
        data={this.props.activities_information.forecasted_sales}
        onChangeSalesInMalta={this.onChangeSalesInMalta}
        checkSalesInMalta={this.checkSalesInMalta}
        onChangeSalesWithinEU={this.onChangeSalesWithinEU}
        checkSalesWithinEU={this.checkSalesWithinEU}
        onChangeSalesOutsideEU={this.onChangeSalesOutsideEU}
        checkSalesOutsideEU={this.checkSalesOutsideEU}
        onChangeSalesAverageValue={this.onChangeSalesAverageValue}
        checkSalesAverageValue={this.checkSalesAverageValue}
        onChangeSalesAverageNumber={this.onChangeSalesAverageNumber}
        checkSalesAverageNumber={this.checkSalesAverageNumber}
      />

    let forecasted_urchases =
      <ForecastedPurchases
        errors={this.props.activities_information.errors.forecasted_purchases}
        data={this.props.activities_information.forecasted_purchases}
        onChangeForecastedPurchasesInMalta={this.onChangeForecastedPurchasesInMalta}
        checkForecastedPurchasesInMalta={this.checkForecastedPurchasesInMalta}
        onChangeForecastedPurchasesWithinEU={this.onChangeForecastedPurchasesWithinEU}
        checkForecastedPurchasesWithinEU={this.checkForecastedPurchasesWithinEU}
        onChangeForecastedPurchasesOutsideEU={this.onChangeForecastedPurchasesOutsideEU}
        checkForecastedPurchasesOutsideEU={this.checkForecastedPurchasesOutsideEU}
      />
    return (
      <ActivitiesInformation
        sales_are={this.props.activities_information.sales_are}
        forecasted_sales={forecasted_sales}
        forecasted_urchases={forecasted_urchases}
        addSalesAreCustomer={this.addSalesMainSupplier}
        changeSalesBC={this.changeSalesBC}
        changeSalesBB={this.changeSalesBB}
        sales_number_of_main_suppliers_component={sales_number_of_main_suppliers_component}
        company_services_offered_component={company_services_offered_component}
        blurMainSupplierAverageNumber={this.blurMainSupplierAverageNumber}
        addCompanyOfferedService={this.addCompanyOfferedService}
        onChangeMainSupplierAverageNumber={this.onChangeMainSupplierAverageNumber}
        onChangeMainSupplierAverageValue={this.onChangeMainSupplierAverageValue}
        blurMainSupplierAverageValue={this.blurMainSupplierAverageValue}
        addMainSupplier={this.addMainSupplier}
        errors={this.props.activities_information.errors}
        checkIndustryOperating={this.checkIndustryOperating}
        number_of_main_suppliers_component={number_of_main_suppliers_component}
        onClickAddSubsidiaryCompany={this.onClickAddSubsidiaryCompany}
        subsidiary_companies={<SubsidiaryCompanyContainer />}
        checkCompanyActivities={this.checkCompanyActivities}
        onChangeCompanyActivities={this.onChangeCompanyActivities}
        checkInitialFunds={this.checkInitialFunds}
        onChangeInitialFunds={this.onChangeInitialFunds}
        checkSourceFundsStart={this.checkSourceFundsStart}
        onChangeSourceFundsStart={this.onChangeSourceFundsStart}
        checkAverageNumber={this.checkAverageNumber}
        checkAverageValue={this.checkAverageValue}
        onChangeAverageNumber={this.onChangeAverageNumber}
        onChangeAverageValue={this.onChangeAverageValue}
        onChangeIndustryOperating={this.onChangeIndustryOperating}
        onChangeCurrency={this.onChangeCurrency}
        onChnageLocation={this.onChnageLocation}
        data={this.props.activities_information}
        countries_options={countries_options}
        currencies_options={currencies_options}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  activities_information: createSelector(
    (state) => state.activities_information,
    (ActivitiesInformationState) => ActivitiesInformationState
  ),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActivitiesInformationActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivitiesInformationContainer)
