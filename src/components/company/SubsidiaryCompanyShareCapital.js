import * as React from "react";
import Select from "react-select";

export class SubsidiaryCompanyShareCapital extends React.Component {
  render() {
    let groupName = this.props.shareIndex === 0 ? "groupNumber first" : "groupNumber";
    let deleteButton = this.props.shareIndex === 0 ? "" :
      <button type="button" className="cancelForm" onClick={this.props.deleteShareCapital.bind(this, this.props.index, this.props.shareIndex)}><i className="icon icon-remove"></i></button>

    return (
      <div>
        <div className={groupName}>
          <span>{this.props.shareIndex + 1 }</span>
          {deleteButton}
        </div>
        <div className="fieldGroup threeColumn pr60 pl60">
          <div className={(this.props.error.numberOfShares.valid || !this.props.error.numberOfShares.touched) ? "field" : "field errorField"}>
            <label className="fieldName">number of shares</label>
            <input type="text" placeholder="input number"
                   onBlur={this.props.onBlurNumberOfShares.bind(this, this.props.index, this.props.shareIndex)}
                   onChange={this.props.changeNumberOfShares.bind(this, this.props.index, this.props.shareIndex)} value={this.props.data.numberOfShares} />
            <span className="errorText">{this.props.error.numberOfShares.message}</span>
          </div>
          <div className="field select">
            <label className="fieldName">type of share</label>
            <Select
              name="form-field-name"
              value={this.props.data.typeOfShare}
              options={this.props.shareTypeOptions}
              onChange={this.props.onChangeShareType.bind(this, this.props.index, this.props.shareIndex)}
              clearable={false}
              placeholder="type of share"
            />
            <span className="errorText">{this.props.error.typeOfShare.message}</span>
          </div>
          <div className={(this.props.error.classOfShare.valid || !this.props.error.classOfShare.touched) ? "field" : "field errorField"}>
            <label className="fieldName">className of share</label>
            <input type="text" placeholder="input letter"
                   onBlur={this.props.blurClassOfShare.bind(this, this.props.index, this.props.shareIndex)}
                   onChange={this.props.changeClassNameOfShares.bind(this, this.props.index, this.props.shareIndex)}
                   value={this.props.data.classOfShare}/>
            <span className="errorText">{this.props.error.classOfShare.message}</span>
          </div>
          <div className={(this.props.error.valuePerShare.valid || !this.props.error.valuePerShare.touched) ? "field" : "field errorField"}>
            <label className="fieldName">value per share</label>
            <input type="text" placeholder="input number"
                   onBlur={this.props.blurValuePerShare.bind(this, this.props.index, this.props.shareIndex)}
                   onChange={this.props.changeValuePerShares.bind(this, this.props.index, this.props.shareIndex)}
                   value={this.props.data.valuePerShare} />
            <span className="errorText">{this.props.error.valuePerShare.message}</span>
          </div>
          <div className={(this.props.error.paidUp.valid || !this.props.error.paidUp.touched) ? "field" : "field errorField"}>
            <label className="fieldName">% paid up</label>
            <input type="text" placeholder="input number"
                   onBlur={this.props.blurPaidUp.bind(this, this.props.index, this.props.shareIndex)}
                   onChange={this.props.changePaidUp.bind(this, this.props.index, this.props.shareIndex)}
                   value={this.props.data.paidUp} />
            <span className="errorText">{this.props.error.paidUp.message}</span>
          </div>
        </div>
      </div>
    )
  }
}
