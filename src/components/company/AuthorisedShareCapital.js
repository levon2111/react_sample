import React from "react";
import Select from "react-select";

export class AuthorisedShareCapital extends React.Component {
  render() {
    const classGroup = this.props.flag ? "groupNumber mt15" : "groupNumber";
    let deleteButton;
    if(this.props.index !== 0){
      deleteButton = <button type="button" className="cancelForm" onClick={this.props.deleteAuthorisedShareCapital.bind(this, this.props.index)}><i className="icon icon-remove"></i></button>
    }
    return (
      <div>
        <div className={classGroup}>
          <span>{this.props.index + 1 }</span>
          {deleteButton}
        </div>
        <div className="fieldGroup fourColumn">
          <div className={(this.props.error.numberOfShares.valid || !this.props.error.numberOfShares.touched) ? "field" : "field errorField"}>
            <label className="fieldName">number of shares</label>
            <input type="text" placeholder="input number"
                   onBlur={this.props.onBlurNumberOfShares.bind(this, this.props.index)}
                   onChange={this.props.changeNumberOfShares.bind(this, this.props.index)} value={this.props.data.numberOfShares} />
            <span className="errorText">{this.props.error.numberOfShares.message}</span>
          </div>
          <div className={(this.props.error.typeOfShare.valid || !this.props.error.typeOfShare.touched) ? "field select" : "field select errorField"}>
            <label className="fieldName">type of share</label>
            <Select
              name="form-field-name"
              value={this.props.data.typeOfShare}
              options={this.props.shareTypeOptions}
              onChange={this.props.onChangeShareType.bind(this, this.props.index)}
              clearable={false}
              placeholder="type of share"
            />
            <span className="errorText">{this.props.error.typeOfShare.message}</span>
          </div>
          <div className={(this.props.error.classOfShare.valid || !this.props.error.classOfShare.touched) ? "field" : "field errorField"}>
            <label className="fieldName">className of share</label>
            <input type="text" placeholder="input letter"
                   onBlur={this.props.blurClassOfShare.bind(this, this.props.index)}
                   onChange={this.props.changeClassNameOfShares.bind(this, this.props.index)}
                   value={this.props.data.classOfShare}/>
            <span className="errorText">{this.props.error.classOfShare.message}</span>
          </div>
          <div className={(this.props.error.valuePerShare.valid || !this.props.error.valuePerShare.touched) ? "field" : "field errorField"}>
            <label className="fieldName">value per share</label>
            <input type="text" placeholder="input number"
                   onBlur={this.props.blurValuePerShare.bind(this, this.props.index)}
                   onChange={this.props.changeValuePerShares.bind(this, this.props.index)}
                   value={this.props.data.valuePerShare} />
            <span className="errorText">{this.props.error.valuePerShare.message}</span>
          </div>
        </div>
      </div>
    );
  }
}
