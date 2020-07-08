import React from "react";
import Select from "react-select";

export class CorporateMember extends React.Component {
  render() {
    const classGroup = this.props.flag ? "groupNumber mt15" : "groupNumber";
    let company_input = '';
    if (this.props.data.nominee === '') {
      company_input =
        <div className={(this.props.error.companyName.valid || !this.props.error.companyName.touched) ? "field" : "field errorField"}>
          <label className="fieldName">company name</label>
          <input type="text" placeholder="enter company name"
                 onChange={this.props.onChangeCorporateMemberCompanyName.bind(this, this.props.index)}
                 onBlur={this.props.onBlurCorporateMemberCompanyName.bind(this, this.props.index)}
                 value={this.props.data.company_name} />
          <span className="errorText">{this.props.error.companyName.message}</span>
        </div>
    }
    let nomineeClick = this.props.onChangeCorporateMemberNominee.bind(this, this.props.index);
    let deleteButton;
    if(this.props.index !== 0){
      deleteButton = <button type="button" className="cancelForm"
                             onClick={this.props.deleteCorporateMember.bind(this, this.props.index)}><i
        className="icon icon-remove"></i></button>
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
          {company_input}
          <div className="clear"></div>
          <div className="checkGroup">
            <div className="checkStyle">
              <label>
                <input type="checkbox"
                       onClick={this.props.onChangeCorporateMemberShareholder.bind(this, 'corporate_director', this.props.index)} checked={this.props.data.types['corporate_director']}/>
                <span className="checkIcon">
													<i className="icon icon-check"></i>
												</span>
                <span className="label">Corporate Director</span>
              </label>
              <div className={(this.props.error.types.valid || !this.props.error.types.touched) ? "select" : "select errorField ml25"}>
                <span className="errorText">{this.props.error.types.message}</span>
              </div>
            </div>
            <div className="checkStyle">
              <label>
                <input type="checkbox"
                       onClick={this.props.onChangeCorporateMemberShareholder.bind(this, 'corporate_shareholder', this.props.index)} checked={this.props.data.types['corporate_shareholder']}/>
                <span className="checkIcon">
													<i className="icon icon-check"></i>
												</span>
                <span className="label">Corporate Shareholders</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
