
import React from "react";
import Select from "react-select";

export class DebitCard extends React.Component {
  render() {
    const classGroup = this.props.flag ? "groupNumber first" : "groupNumber";
    let deleteButton = '';
    if(this.props.index !== 0){
      deleteButton = <button type="button" onClick={this.props.deleteDebitCard.bind(this, this.props.index)} className="cancelForm"><i className="icon icon-remove"></i></button>
    }
    let nameInput = this.props.data.member ? '' :
      <div className={(this.props.error.name.valid || !this.props.error.name.touched) ? "field" : "field errorField"}>
        <label className="fieldName">name surname</label>
        <input type="text" placeholder="name surname"
               onChange={this.props.onChangeName.bind(this, this.props.index)}
               onBlur={this.props.onBlurName.bind(this, this.props.index)}
               value={this.props.data.name}
        />
        <span className="errorText">{this.props.error.name.message}</span>
      </div>
    return (
      <div>
        <div className={classGroup}>
          <span>{this.props.index +1}</span>
          {deleteButton}
        </div>
        <div className="fieldGroup threeColumn">
          <div className="field select">
            <label className="fieldName">already registered member</label>
            <Select
              value={this.props.data.member}
              options={this.props.individual_members}
              onChange={this.props.onChangeIndividualMember.bind(this,this.props.index)}
              clearable={false}
              placeholder="already registered member"
            />
          </div>
          {nameInput}
          <div className={(this.props.error.address.valid || !this.props.error.address.touched) ? "field" : "field errorField"}>
            <label className="fieldName">address</label>
            <input type="text" placeholder="address"
                   onChange={this.props.onChangeAddress.bind(this, this.props.index)}
                   onBlur={this.props.onBlurAddress.bind(this, this.props.index)}
                   value={this.props.data.address}
            />
            <span className="errorText">{this.props.error.address.message}</span>
          </div>
        </div>
      </div>
    )
  }
}


