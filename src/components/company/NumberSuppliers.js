import * as React from "react";

export class NumberSuppliers extends React.Component{
  render(){
    let groupName = this.props.index === 0 ? "groupNumber first" : "groupNumber";
    let deleteButton = this.props.index === 0 ? "" :
      <button type="button" className="cancelForm" onClick={this.props.deleteMainSupplier.bind(this, this.props.index)}><i className="icon icon-remove"></i></button>
    return(
      <div>
        <div className={groupName}>
          <span>{this.props.index + 1 }</span>
          {deleteButton}
        </div>
        <div className="fieldGroup threeColumn">
          <div className={(this.props.error.name.valid || !this.props.error.name.touched) ? "field" : "field errorField"}>
            <label className="fieldName">customer name</label>
            <input type="text" placeholder="customer name"
                   onBlur={this.props.onBlurMainSupplierName.bind(this, this.props.index)}
                   onChange={this.props.changeMainSupplierName.bind(this, this.props.index)}
                   value={this.props.data.name}
            />
            <span className="errorText">{this.props.error.name.message}</span>
          </div>
          <div className={(this.props.error.link.valid || !this.props.error.link.touched) ? "field" : "field errorField"}>
            <label className="fieldName">website link</label>
            <input type="text" placeholder="website link"
                   onBlur={this.props.onBlurMainSupplierLink.bind(this, this.props.index)}
                   onChange={this.props.changeMainSupplierLink.bind(this, this.props.index)}
                   value={this.props.data.link}
            />
            <span className="errorText">{this.props.error.link.message}</span>
          </div>
        </div>
      </div>
    )
  }
}
