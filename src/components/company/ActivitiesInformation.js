import React from "react";
import pure from "recompose/pure";
import Select from "react-select";
import ReactTooltip from 'react-tooltip'

function ActivitiesInformation({
                                 onClickAddSubsidiaryCompany,
                                 subsidiary_companies,
                                 currencies_options,
                                 countries_options,
                                 data,
                                 onChnageLocation,
                                 onChangeCurrency,
                                 errors,
                                 onChangeIndustryOperating,
                                 checkIndustryOperating,
                                 onChangeAverageValue,
                                 checkAverageValue,
                                 onChangeAverageNumber,
                                 checkAverageNumber,
                                 onChangeSourceFundsStart,
                                 checkSourceFundsStart,
                                 onChangeInitialFunds,
                                 checkInitialFunds,
                                 onChangeCompanyActivities,
                                 checkCompanyActivities,
                                 number_of_main_suppliers_component,
                                 addMainSupplier,
                                 onChangeMainSupplierAverageValue,
                                 blurMainSupplierAverageValue,
                                 onChangeMainSupplierAverageNumber,
                                 blurMainSupplierAverageNumber,
                                 company_services_offered_component,
                                 addCompanyOfferedService,
                                 sales_number_of_main_suppliers_component,
                                 addSalesAreCustomer,
                                 sales_are,
                                 changeSalesBB,
                                 changeSalesBC,
                                 forecasted_sales,
                                 forecasted_urchases,
                               }) {
  return (
    <div className="addForm">
      <form>
        <div className="formGroup">
          <div className="fieldGroup threeColumn pt20 pb0">
            <div className={(errors.industry_operating.valid || !errors.industry_operating.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">industry operating in</label>
              <input type="text" placeholder="industry operating in"
                     onBlur={checkIndustryOperating}
                     onChange={onChangeIndustryOperating}
                     value={data.industry_operating}
              />
              <span className="errorText">{errors.industry_operating['message']}</span>
            </div>
            <div className={(errors.location_of_income_generated_assets.valid || !errors.location_of_income_generated_assets.touched) ? "field select" : "field select errorField"}>
              <label className="fieldName">location of income generated assets</label>
              <Select
                value={data.location_of_income_generated_assets}
                options={countries_options}
                onChange={onChnageLocation}
                clearable={false}
                placeholder="choose country"
              />
              <span className="errorText">{errors.location_of_income_generated_assets['message']}</span>
            </div>
            <div className={(errors.currency_of_trading.valid || !errors.currency_of_trading.touched) ? "field select" : "field select errorField"}>
              <label className="fieldName">currency of trading</label>
              <Select
                value={data.currency_of_trading}
                options={currencies_options}
                onChange={onChangeCurrency}
                clearable={false}
                placeholder="choose currency"
              />
              <span className="errorText">{errors.currency_of_trading['message']}</span>
            </div>
          </div>
          <div className="fieldGroup threeColumn pt15 pb15">
            <div className={(errors.average_value_of_purchase.valid || !errors.average_value_of_purchase.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">average value of purchase /expenses</label>
              <input type="text" placeholder="average value"
                     onBlur={checkAverageValue}
                     onChange={onChangeAverageValue}
                     value={data.average_value_of_purchase}
              />
              <span className="errorText">{errors.average_value_of_purchase['message']}</span>
            </div>
            <div className={(errors.average_number_of_monthly.valid || !errors.average_number_of_monthly.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">average number of monthly purchase/expenses</label>
              <input type="text" placeholder="average value"
                 onBlur={checkAverageNumber}
                 onChange={onChangeAverageNumber}
                 value={data.average_number_of_monthly}
              />
              <span className="errorText">{errors.average_number_of_monthly['message']}</span>
            </div>
            <div className={(errors.source_of_funds_to_start.valid || !errors.source_of_funds_to_start.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">source of funds to start the business</label>
              <input type="text" placeholder="source of fund"
                     onBlur={checkSourceFundsStart}
                     onChange={onChangeSourceFundsStart}
                     value={data.source_of_funds_to_start}
              />
              <span className="errorText">{errors.source_of_funds_to_start['message']}</span>
            </div>
          </div>
          <div className="pl50 pr50 pb35 clearAfter">
            <div className="threeColumn left30">
              <div className={(errors.initial_funds.valid || !errors.initial_funds.touched ) ? "field fieldFull" : "field fieldFull errorField"}>
                <label className="fieldName">initial funds</label>
                <input type="text" placeholder="initial funds"
                       onBlur={checkInitialFunds}
                       onChange={onChangeInitialFunds}
                       value={data.initial_funds}
                />
                <span className="errorText">{errors.initial_funds['message']}</span>
              </div>
            </div>
            <div className="right65">
              <div className="column">
                <div className={(errors.company_activities.valid || !errors.company_activities.touched ) ? "field" : "field errorField"}>
                  <label className="fieldName">company activities</label>
                  <textarea className="mt15 maxW535" placeholder="Principal activity of the company"
                            onBlur={checkCompanyActivities}
                            onChange={onChangeCompanyActivities}
                            value={data.company_activities}
                  ></textarea>
                  <span className="errorText">{errors.company_activities['message']}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="formGroup">
          <div className="formHeading">
            <p>subsidiary companies</p>
          </div>
          {subsidiary_companies}
          <div className="addNewGroup">
            <div className="btnSpace">
              <ReactTooltip place="bottom" className="green" type="light" effect="solid" />
              <button type="button" onClick={onClickAddSubsidiaryCompany} className="circleBtn green tooltip btnBg" data-tip="replicate above row" ></button>
            </div>
          </div>
        </div>
        <div className="formGroup">
          <div className="formHeading">
            <p>number of main suppliers</p>
          </div>
          {number_of_main_suppliers_component}
          <div className="addNewGroup pb35">
            <div className="btnSpace">
              <button type="button" onClick={addMainSupplier} className="circleBtn green tooltip btnBg" data-tip="replicate above row" ></button>
            </div>
          </div>
        </div>
        <div className="formGroup">
          <div className="formHeading">
            <p>revenue & expenditure</p>
          </div>
          <div>
            {company_services_offered_component}
          </div>
          <div className="addNewGroup">
            <div className="btnSpace">
              <button type="button" onClick={addCompanyOfferedService} className="circleBtn green tooltip btnBg" data-tip="replicate above row" ></button>
            </div>
          </div>
        </div>
        <div className="formGroup">
          <div className="formHeading">
            <p>sales are</p>
          </div>
          <div className="field">
            <div className="checkGroup center pt25 pb35">
              <div className="checkStyle">
                <label>
                  <input type="checkbox" onClick={changeSalesBB} checked={sales_are.b2b} />
                  <span className="checkIcon"><i className="icon icon-check"></i></span>
                  <span className="label">B2B</span>
                </label>
              </div>
              <div className="checkStyle">
                <label>
                  <input type="checkbox" onClick={changeSalesBC} checked={sales_are.b2c}/>
                  <span className="checkIcon"><i className="icon icon-check"></i></span>
                  <span className="label">B2C</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className="smallTitle borderLgAfter center">number of main customers</p>
            {sales_number_of_main_suppliers_component}
            <div className="addNewGroup">
              <div className="btnSpace">
                <button type="button" onClick={addSalesAreCustomer} className="circleBtn green tooltip btnBg" data-tip="replicate above row" ></button>
              </div>
            </div>
          </div>
        </div>
        {forecasted_sales}
        {forecasted_urchases}
        <div className="addNewGroup"></div>
        <div className="formMeta clearAfter">
          <ul className="clearAfter">
            <li>
              <button className="btn green leftIcon" type="button"><i className="icon icon-save"></i>Save in Draft</button>
            </li>
            <li>
              <button className="btn blue leftIcon ml15"><i className="icon icon-check checkLg"></i>Aprove Company</button>
            </li>
          </ul>
        </div>
      </form>

    </div>
  )
}

export default pure(ActivitiesInformation)

