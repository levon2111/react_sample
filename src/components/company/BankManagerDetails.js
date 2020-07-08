import React from "react";

export class BankManagerDetails extends React.Component {
  render() {
    return (
        <div>
          {/*<div className={(this.props.error.numberOfShares.valid || !this.props.error.numberOfShares.touched) ? "field" : "field errorField"}>*/}
          {/*<label className="fieldName">number of shares</label>*/}
          {/*<input type="text" placeholder="input number"*/}
          {/*onBlur={this.props.onBlurNumberOfShares.bind(this, this.props.index)}*/}
          {/*onChange={this.props.changeNumberOfShares.bind(this, this.props.index)} value={this.props.data.numberOfShares} />*/}
          {/*<span className="errorText">{this.props.error.numberOfShares.message}</span>*/}
          {/*</div>*/}
          <p className="smallTitle borderLgAfter pl70">{this.props.data.nominee}</p>
          <div className="fieldGroup threeColumn">
            <div className={(this.props.error.surname.valid || !this.props.error.surname.touched) ? "field" : "field errorField"}>
              <label className="fieldName">name surname</label>
              <input type="text" placeholder="name surname"
                   onChange={this.props.changeSurname.bind(this, this.props.index, this.props.type)}
                   value={this.props.data.surname}
                   onBlur={this.props.onBlurSurname.bind(this, this.props.index, this.props.type)}
              />
              <span className="errorText">{this.props.error.surname.message}</span>
            </div>
            <div className={(this.props.error.bankName.valid || !this.props.error.bankName.touched) ? "field" : "field errorField"}>
              <label className="fieldName">bank name</label>
              <input type="text" placeholder="bank name"
                   onChange={this.props.changeBankName.bind(this, this.props.index, this.props.type)}
                   value={this.props.data.bankName}
                   onBlur={this.props.onBlurBankName.bind(this, this.props.index, this.props.type)}
              />
              <span className="errorText">{this.props.error.bankName.message}</span>
            </div>
            <div className={(this.props.error.email.valid || !this.props.error.email.touched) ? "field" : "field errorField"}>
              <label className="fieldName">email</label>
              <input type="email" placeholder="email"
                 onChange={this.props.changeEmail.bind(this, this.props.index, this.props.type)}
                 value={this.props.data.email}
                 onBlur={this.props.onBlurEmail.bind(this, this.props.index, this.props.type)}
              />
              <span className="errorText">{this.props.error.email.message}</span>
            </div>
            <div className={(this.props.error.phone.valid || !this.props.error.phone.touched) ? "field" : "field errorField"}>
              <label className="fieldName">phone</label>
              <input type="text" placeholder="phone"
                 onChange={this.props.changePhone.bind(this, this.props.index, this.props.type)}
                 value={this.props.data.email}
                 onBlur={this.props.onBlurPhone.bind(this, this.props.index, this.props.type)}
              />
              <span className="errorText">{this.props.error.phone.message}</span>
            </div>
          </div>
        </div>
    );
  }
}
