import React from "react";

export class SubsidiaryCompany extends React.Component {
  render() {
    let groupName = this.props.index === 0 ? "groupNumber first" : "groupNumber";
    let deleteButton = this.props.index === 0 ? "" :
      <button type="button" className="cancelForm" onClick={this.props.deleteSubsidiaryCompany.bind(this, this.props.index)}><i className="icon icon-remove"></i></button>

    return (
      <div>
        <div className={groupName}>
          <span>{this.props.index + 1 }</span>
          {deleteButton}
        </div>
        <div className="fieldGroup threeColumn">
          <div className={(this.props.errors.name.valid || !this.props.errors.name.touched ) ? "field" : "field errorField"}>
            <label className="fieldName">company name</label>
            <input type="text" placeholder="sales in malta"
                   onChange={this.props.onChangeCompanyName.bind(this, this.props.index)}
                   onBlur={this.props.checkCompanyName.bind(this, this.props.index)}
                   value={this.props.data.name}
            />
            <span className="errorText">{this.props.errors.name['message']}</span>
          </div>
          <div className={(this.props.errors.registration_number.valid || !this.props.errors.registration_number.touched ) ? "field" : "field errorField"}>
            <label className="fieldName">company registration number</label>
            <input type="text" placeholder="sales within eu"
                   onChange={this.props.onChangeRegistrartionNumber.bind(this, this.props.index)}
                   onBlur={this.props.checkRegistrationNumber.bind(this, this.props.index)}
                   value={this.props.data.registration_number}
            />
            <span className="errorText">{this.props.errors.registration_number['message']}</span>
          </div>
          <div className={(this.props.errors.domicile.valid || !this.props.errors.domicile.touched ) ? "field" : "field errorField"}>
            <label className="fieldName">company domicile</label>
            <input type="text" placeholder="company domicile"
                   onChange={this.props.onChangeDomicile.bind(this, this.props.index)}
                   onBlur={this.props.checkDomicile.bind(this, this.props.index)}
                   value={this.props.data.domicile}
            />
            <span className="errorText">{this.props.errors.domicile['message']}</span>
          </div>
          <div className={(this.props.errors.address.valid || !this.props.errors.address.touched ) ? "field" : "field errorField"}>
            <label className="fieldName">company address</label>
            <input type="text" placeholder="average value"
                   onChange={this.props.onChangeAddress.bind(this, this.props.index)}
                   onBlur={this.props.checkAddress.bind(this, this.props.index)}
                   value={this.props.data.address}
            />
            <span className="errorText">{this.props.errors.address['message']}</span>
          </div>
          <div className={(this.props.errors.activity.valid || !this.props.errors.activity.touched ) ? "field" : "field errorField"}>
            <label className="fieldName">company activity</label>
            <input type="text" placeholder="average number"
                   onChange={this.props.onChangeActivity.bind(this, this.props.index)}
                   onBlur={this.props.checkActivity.bind(this, this.props.index)}
                   value={this.props.data.activity}
            />
            <span className="errorText">{this.props.errors.activity['message']}</span>
          </div>
        </div>

        <div className="formGroup ml25 mr25 mb50 smallGroup">
          <p className="smallTitle borderLgAfter center ml60 mr60">issued share capital of the subsidiary company</p>
          {this.props.subsidiary_company_share_capital_components}
          <div className="addNewGroup pb0">
            <div className="btnSpace small">
              <button type="button" onClick={this.props.addShareCapitalClick.bind(this, this.props.index)} className="circleBtn green tooltip btnBg smallBtn"
                      data-tip="replicate above row"></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

