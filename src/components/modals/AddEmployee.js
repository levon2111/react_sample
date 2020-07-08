import React, {Component} from "react";
import Select from 'react-select';

export class AddEmployee extends Component {
  render() {
    return (
      <div className="popup">
        <h2 className="popupTilte">Add new Employee</h2>
        <div className="popupBody">
          <form>
            <div className="fieldGroup twoColumn">
              <div className="field">
                <label className="fieldName"><i className="icon icon-email"></i>Email address</label>
                <input type="text" placeholder="email address" />
              </div>
              <div className="field">
                <label className="fieldName"><i className="icon icon-user"></i>first name</label>
                <input type="text" placeholder="first name"/>
              </div>
              <div className="clear"></div>
              <div className="field">
                <label className="fieldName"><i className="icon icon-user"></i>Last name</label>
                <input type="text" placeholder="last name" />
              </div>
              <div className="field select">
                <label className="fieldName">sections</label>
                <Select
                  multi
                  name="form-field-name"
                  value={this.props.data.sections}
                  options={this.props.sectionOptions}
                  onChange={this.props.onChangeSections}
                  clearable={false}
                  placeholder="select sections"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="popupMeta">
          <button type="button" className="btn blue leftIcon"><i className="icon icon-send"></i>Send Invitation</button>
        </div>
      </div>
    );
  }
}
