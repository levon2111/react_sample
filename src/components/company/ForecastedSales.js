import * as React from "react";

export class ForecastedSales extends React.Component{
  render(){
    return(
      <div className="formGroup">
        <div className="formHeading">
          <p>forecasted sales</p>
        </div>
        <div>
          <div className="groupNumber first"></div>
          <div className="fieldGroup threeColumn">
            <div className={(this.props.errors.sales_in_malta.valid || !this.props.errors.sales_in_malta.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">sales in malta</label>
              <input type="text" placeholder="sales in malta"
                      onBlur={this.props.checkSalesInMalta}
                      onChange={this.props.onChangeSalesInMalta}
                      value={this.props.data.sales_in_malta}
              />
              <span className="errorText">{this.props.errors.sales_in_malta['message']}</span>
            </div>
            <div className={(this.props.errors.sales_within_eu.valid || !this.props.errors.sales_within_eu.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">sales within eu</label>
              <input type="text" placeholder="sales within eu"
                     onBlur={this.props.checkSalesWithinEU}
                     onChange={this.props.onChangeSalesWithinEU}
                     value={this.props.data.sales_within_eu}
              />
              <span className="errorText">{this.props.errors.sales_within_eu['message']}</span>
            </div>
            <div className={(this.props.errors.sales_outside_eu.valid || !this.props.errors.sales_outside_eu.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">sales outside the eu</label>
              <input type="text" placeholder="sales outside the eu"
                     onBlur={this.props.checkSalesOutsideEU}
                     onChange={this.props.onChangeSalesOutsideEU}
                     value={this.props.data.sales_outside_eu}
              />
              <span className="errorText">{this.props.errors.sales_outside_eu['message']}</span>
            </div>
            <div className={(this.props.errors.average_value.valid || !this.props.errors.average_value.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">average value of sales transaction</label>
              <input type="text" placeholder="average value"
                     onBlur={this.props.checkSalesAverageValue}
                     onChange={this.props.onChangeSalesAverageValue}
                     value={this.props.data.average_value}
              />
              <span className="errorText">{this.props.errors.average_value['message']}</span>
            </div>
            <div className={(this.props.errors.average_Number.valid || !this.props.errors.average_Number.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">average number of monthly sales transactions</label>
              <input type="text" placeholder="average number"
                     onBlur={this.props.checkSalesAverageNumber}
                     onChange={this.props.onChangeSalesAverageNumber}
                     value={this.props.data.average_Number}
              />
              <span className="errorText">{this.props.errors.average_Number['message']}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
