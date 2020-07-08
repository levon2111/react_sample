import React from "react";
import {connect} from "react-redux";
import NotificationSystem from "react-notification-system";

class NotificationContainer extends React.Component {

  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  componentWillReceiveProps(newProps) {
    const {message, level, children} = newProps.notification;
    this.notificationSystem.addNotification({
      message,
      level,
      children
    });
  }

  render() {
    return (
      <NotificationSystem ref="notificationSystem" allowHTML={true} />
    );
  }
}

function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}

export default connect(
  mapStateToProps
)(NotificationContainer);
