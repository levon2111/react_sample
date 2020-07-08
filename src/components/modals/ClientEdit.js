import React, {Component} from "react";

export class ClientEdit extends Component {
  render() {
    return (
      <div>
        <form>
          <input defaultValue={this.props.data.email} onChange={this.props.onEditEmail} placeholder='Email address'/>
          <input defaultValue={this.props.data.firstName} onChange={this.props.onEditFirstName}
                 placeholder='First name'/>
          <input defaultValue={this.props.data.lastName} onChange={this.props.onEditLastName} placeholder='Last name'/>
          <input defaultValue={this.props.data.client ? this.props.data.client.name : ''} onChange={this.props.onEditCompany}
                 placeholder='Company Name'/>
          <button type="button" onClick={this.props.onClickEditUser}>Edit</button>
        </form>
      </div>
    );
  }
}
