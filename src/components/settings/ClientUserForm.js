
import React from "react";

export class ClientUserForm extends React.Component {
  render() {
    const classGroup = this.props.flag ? "groupNumber mt15" : "groupNumber";
    let deleteButton;
    if(this.props.index !== 0){
      deleteButton = <button type="button" onClick={this.props.deleteClientUser.bind(this, this.props.index)} className="cancelForm"><i className="icon icon-remove"></i></button>
    }
    return (
      <div>
        <div className={classGroup}>
          {deleteButton}
        </div>
        <div className="fieldGroup fourColumn p35">
          <div className={(this.props.error.email.valid || !this.props.error.email.touched) ? "field" : "field errorField"}>
            <label className="fieldName">email address</label>
            <input type="email" placeholder="email address"
                   onChange={this.props.onChangeEmail.bind(this, this.props.index)}
                   onBlur={this.props.onBlurClientEmail.bind(this, this.props.index)}
            />
            <span className="errorText">{this.props.error.email.message}</span>
          </div>
          <div
            className={(this.props.error.firstName.valid || !this.props.error.firstName.touched) ? "field" : "field errorField"}>
            <label className="fieldName">first name</label>
            <input type="text" placeholder="first name"
                   onChange={this.props.onChangeFirstName.bind(this, this.props.index)}
                   onBlur={this.props.onBlurClientFirstName.bind(this, this.props.index)}
            />
            <span className="errorText">{this.props.error.firstName.message}</span>
          </div>
          <div className={(this.props.error.lastName.valid || !this.props.error.lastName.touched) ? "field" : "field errorField"}>
            <label className="fieldName">last name</label>
            <input type="text" placeholder="last name"
                   onChange={this.props.onChangeLastName.bind(this, this.props.index)}
                   onBlur={this.props.onBlurClientLastName.bind(this, this.props.index)}
            />
            <span className="errorText">{this.props.error.lastName.message}</span>
          </div>
          <div className={(this.props.error.company.valid || !this.props.error.company.touched) ? "field" : "field errorField"}>
            <label className="fieldName">company</label>
            <input type="text" placeholder="company name"
                   onChange={this.props.onChangeCompany.bind(this, this.props.index)}
                   onBlur={this.props.onBlurClientCompanyName.bind(this, this.props.index)}
            />
            <span className="errorText">{this.props.error.company.message}</span>
          </div>
        </div>
      </div>

    )
  }
}


