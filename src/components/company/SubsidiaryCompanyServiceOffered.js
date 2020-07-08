import * as React from "react";

export class SubsidiaryCompanyServiceOffered extends React.Component{
  render(){
    let groupName = this.props.index === 0 ? "groupNumber first" : "groupNumber";
    let deleteButton = this.props.index === 0 ? "" :
      <button type="button" className="cancelForm" onClick={this.props.deleteCompanyService.bind(this, this.props.index)}><i className="icon icon-remove"></i></button>
    return(
      <div>
        <div className={groupName}>
          <span>{this.props.index + 1 }</span>
          {deleteButton}
        </div>
        <div className="fieldGroup threeColumn">
          <div className={(this.props.errors.name.valid || !this.props.errors.name.touched ) ? "field" : "field errorField"}>
            <label className="fieldName">product/services offerred</label>
            <input type="text" placeholder="product/services offerred"
                   onChange={this.props.onChangeCompanyServiceName.bind(this, this.props.index)}
                   onBlur={this.props.checkCompanyServiceName.bind(this, this.props.index)}
                   value={this.props.data.name}
            />
            <span className="errorText">{this.props.errors.name['message']}</span>
          </div>
        </div>
      </div>
    )
  }
}
