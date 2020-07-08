import React from "react";
import pure from "recompose/pure";
import {Link} from "react-router";

function AdminMenu({
                     onClickMenuItem,
                     active,
                     logout,
                   }) {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <li className={active === 'messages' ? 'active' : ''}>
          <a href="#">
            <i className="icon icon-message"></i>
            <span>Messages</span>
          </a>
        </li>
        <li className={active === 'to_do' ? 'active' : ''}>
          <a href="#">
            <i className="icon icon-to-do"></i>
            <span>To do</span>
          </a>
        </li>
        <li className={active === 'audit' ? 'active' : ''}>
          <a href="#">
            <i className="icon icon-audit"></i>
            <span>audit</span>
          </a>
        </li>
        <li className={active === 'accounting' ? 'active' : ''}>
          <a href="#">
            <i className="icon icon-accounting"></i>
            <span>accounting</span>
          </a>
        </li>
        <li className={active === 'payroll' ? 'active' : ''}>
          <a href="#">
            <i className="icon icon-peyroll"></i>
            <span>peyroll</span>
          </a>
        </li>
        <li className={active === 'admin' ? 'active' : ''}>
          <Link to="/admin/new-company" onClick={onClickMenuItem.bind(this, 'admin')}>
            <i className="icon icon-add-company"></i>
            <span>ADD COMPANY</span>
          </Link>
        </li>
        <li className={active === 'settings' ? 'active' : ''}>
          <Link to="/settings/client-user" onClick={onClickMenuItem.bind(this, 'settings')}>
            <i className="icon icon-settings"></i>
            <span>SETTINGS</span>
          </Link>
        </li>
        <li>
          <a href="#">
            <i className="icon icon-database"></i>
            <span>database</span>
          </a>
        </li>
        <li className="borderTop">
          <a onClick={logout}>
            <i className="icon icon-logout"></i>
            <span>log out</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}

// AdminMenu.propTypes = {
//   onClickOrganisationDetails: PropTypes.func.isRequired,
//   onClickPersonalDetails: PropTypes.func.isRequired,
//   onClickContactDetails: PropTypes.func.isRequired,
//   onClickActivitiesInformation: PropTypes.func.isRequired
// }

export default pure(AdminMenu)

