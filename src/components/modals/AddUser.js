import React, {Component} from "react";

export class AddUser extends Component {
  render() {
    return (
      <div className="popup">
        <h2 className="popupTilte">Add new user</h2>
        <div className="popupBody">
          <form>
            <div className="fieldGroup twoColumn">
              <div className="field">
                <label className="fieldName"><i className="icon icon-email"></i>Email address</label>
                <input type="text" placeholder="email address" onChange={this.props.onEditEmail} />
              </div>
              <div className="field">
                <label className="fieldName"><i className="icon icon-user"></i>Last name</label>
                <input type="text" placeholder="last name" onChange={this.props.onEditFirstName}/>
              </div>
              <div className="clear"></div>
              <div className="field">
                <label className="fieldName"><i className="icon icon-user"></i>first name</label>
                <input type="text" placeholder="first name" onChange={this.props.onEditLastName}/>
              </div>
            </div>
          </form>
        </div>
        <div className="popupMeta">
          <button type="button" className="btn blue leftIcon" onClick={this.props.onClickInvite}><i className="icon icon-send"></i>Send Invitation</button>
        </div>
      </div>
    );
  }
}
