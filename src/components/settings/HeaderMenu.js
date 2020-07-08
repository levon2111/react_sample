import React from "react";
import pure from "recompose/pure";
import {Link} from "react-router";

function HeaderMenu({active, onChangeHeaderMenu}) {
	return (
    <ul className="tab-links dark">
      <li className={active === 'users'? 'active': ''}>
        <Link to="/settings/client-user" onClick={onChangeHeaderMenu.bind(this, 'users')}>
          users
        </Link>
      </li>
      <li className={active === 'companies_in_progress'? 'active': ''}>
        <Link to="/settings/companies-in-progress" onClick={onChangeHeaderMenu.bind(this, 'companies_in_progress')}>
          companies in progress
        </Link>
      </li>
      <li className={active === 'tasks'? 'active': ''}>
        <Link to="/settings/client-user" onClick={onChangeHeaderMenu.bind(this, 'tasks')}>
          tasks
        </Link>
      </li>
      <li className={active === 'forms'? 'active': ''}>
        <Link to="/settings/client-user" onClick={onChangeHeaderMenu.bind(this, 'forms')}>
          forms
        </Link>
      </li>
    </ul>
  )
}

export default pure(HeaderMenu)
