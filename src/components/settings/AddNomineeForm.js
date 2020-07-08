import React from "react";
import Select from "react-select";

export class AddNomineeForm extends React.Component {
  render() {
    return (
      <div className="threeColumn">
        <div className={(this.props.error.name.valid || !this.props.error.name.touched ) ? "field" : "field errorField"}>
          <label className="fieldName">name</label>
          <input type="text" onBlur={this.props.checkNomineeName} onChange={this.props.onChangeNomineeName}
                 value={this.props.data.name}
                 placeholder="enter nominee name"/>
          <span className="errorText">{this.props.error.name['message']}</span>
        </div>
        <div  className={(this.props.error.agreement.valid || !this.props.error.agreement.touched ) ? "field" : "field errorField"}>
          <label className="fieldName">nominee agreement</label>
          <label className="fileField">
            <input type="file" id="agreement" onBlur={this.props.checkNomineeAgreement} onChange={this.props.onChangeNomineeAgreement} />
            <input type="text" placeholder="upload" value={this.props.data.agreementOriginalName}/>
            <span className="icon icon-upload blue"></span>
          </label>
          <span className="errorText">{this.props.error.agreement['message']}</span>
        </div>
        <div className="field select">
          <label className="fieldName">type</label>
          <Select
            value={this.props.data.nomineeType}
            options={this.props.options}
            onChange={this.props.onChangeNomineeType}
            clearable={false}
            placeholder="placeholder"
          />
        </div>
        {/*<div className="field">*/}
          {/*<label className="fieldName">due deligance</label>*/}
          {/*<div className="pt20 ">*/}
            {/*<a href="#" className="underline blue">Fill in details</a>*/}
          {/*</div>*/}

        {/*</div>*/}
      </div>
    );
  }
}
