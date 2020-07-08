import React from "react";
import Select from "react-select";

export class IndividualMember extends React.Component {
  render() {
    const classGroup = this.props.flag ? "groupNumber mt15" : "groupNumber";
    let name_input = '';
    if (this.props.data.nominee === '') {
      name_input =
        <div className={(this.props.error.companyName.valid || !this.props.error.companyName.touched) ? "field" : "field errorField"}>
          <label className="fieldName">name surname</label>
          <input type="text" placeholder="Name Surname"
                 onChange={this.props.onChangeIndividualMemberName.bind(this, this.props.index)}
                 value={this.props.data.name}
                 onBlur={this.props.onBlurIndividualMemberName.bind(this, this.props.index)}
          />
          <span className="errorText">{this.props.error.companyName.message}</span>
        </div>
    }

    let checkboxes = '';
    if (this.props.company_type === 'trustee') {
      checkboxes =
        <div>
          <div className="checkStyle">
            <label>
              <input type="checkbox" onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'beneficiary', this.props.index)} checked={this.props.data.types['beneficiary']}/>
              <span className="checkIcon"><i className="icon icon-check"></i></span>
              <span className="label">Individual Beneficiary</span>
            </label>
          </div>
          <div className="checkStyle">
            <label>
              <input type="checkbox" onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'settlor', this.props.index)} checked={this.props.data.types['settlor']}/>
              <span className="checkIcon"><i className="icon icon-check"></i></span>
              <span className="label">Individual Settlor</span>
            </label>
          </div>
          <div className="checkStyle">
            <label>
              <input type="checkbox" onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'protector', this.props.index)} checked={this.props.data.types['protector']}/>
              <span className="checkIcon"><i className="icon icon-check"></i></span>
              <span className="label">Individual Protector</span>
            </label>
          </div>
        </div>
    } else if (this.props.company_type === 'foundation') {
      checkboxes =
        <div>
          <div className="checkStyle">
            <label>
              <input type="checkbox" onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'administrator', this.props.index)} checked={this.props.data.types['administrator']}/>
              <span className="checkIcon"><i className="icon icon-check"></i></span>
              <span className="label">Individual Administrator</span>
            </label>
          </div>
          <div className="checkStyle">
            <label>
              <input type="checkbox" onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'beneficiary', this.props.index)} checked={this.props.data.types['beneficiary']}/>
              <span className="checkIcon"><i className="icon icon-check"></i></span>
              <span className="label">Individual Beneficiary</span>
            </label>
          </div>
        </div>
    }else{
      checkboxes = ''
    }
    let nomineeClick = this.props.onChangeIndividualMemberNominee.bind(this, this.props.index);

    let deleteButton = '';
    if(this.props.index !== 0){
      deleteButton = <button type="button" onClick={this.props.deleteIndividualMember.bind(this, this.props.index)} className="cancelForm"><i className="icon icon-remove"></i></button>
    }
    return (
      <div>
        <div className={classGroup}>
          <span>{this.props.index + 1 }</span>
          {deleteButton}
        </div>
        <div className="fieldGroup threeColumn">
          <div className={(this.props.error.nominee.valid || !this.props.error.nominee.touched) ? "field select" : "field select errorField"}>
            <label className="fieldName">nominee services</label>
            <Select
              name="form-field-name"
              value={this.props.data.nominee}
              options={this.props.nominee}
              onChange={nomineeClick}
              clearable={false}
              placeholder="select nominee services"
            />
            <span className="errorText">{this.props.error.nominee.message}</span>
          </div>
          {name_input}
          <div className="clear"></div>
          <div className="checkGroup">
            <div className="checkStyle">
              <label>
                <input type="checkbox"  onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'individual_shareholder', this.props.index)} checked={this.props.data.types['individual_shareholder']}/>
                <span className="checkIcon">
													<i className="icon icon-check"></i>
												</span>
                <span className="label">Individual Shareholder</span>
              </label>
              <div className={(this.props.error.types.valid || !this.props.error.types.touched) ? "select" : "select errorField ml25"}>
                <span className="errorText">{this.props.error.types.message}</span>
              </div>
            </div>
            <div className="checkStyle">
              <label>
                <input type="checkbox" onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'individual_director', this.props.index)} checked={this.props.data.types['individual_director']}/>
                <span className="checkIcon">
													<i className="icon icon-check"></i>
												</span>
                <span className="label">Individual Director</span>
              </label>
            </div>
            <div className="checkStyle">
              <label>
                <input type="checkbox" onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'secretary', this.props.index)} checked={this.props.data.types['secretary']}/>
                <span className="checkIcon">
													<i className="icon icon-check"></i>
												</span>
                <span className="label">Individual Company Secretary</span>
              </label>
            </div>
            <div className="checkStyle">
              <label>
                <input type="checkbox" onClick={this.props.onChangeIndividualMemberShareholder.bind(this, 'bank_signatory', this.props.index)} checked={this.props.data.types['bank_signatory']}/>
                <span className="checkIcon">
													<i className="icon icon-check"></i>
												</span>
                <span className="label">Individual Bank Signatory</span>
              </label>
            </div>
            {checkboxes}
          </div>
        </div>
      </div>
    );
  }
}
