import React from "react";
import { browserHistory } from 'react-router'

function Header({auth, user}) {
  const public_path = process.env.PUBLIC_URL;
  let redirectTo = () => {
    browserHistory.push("/settings/client-user")
  }
  return (
      <header className="clearAfter">
        <div className="logoSide">
          <a onClick={redirectTo}><img src={public_path + "/styles/img/logo.png"} alt="logo" /></a>
        </div>
        { auth ?
          <div className="rightBlock">
            <div className="menu">
              <ul className="clearAfter">
                <li><a href="#">Create task</a></li>
                <li><a href="#">Upload <span className="icon icon-upload blue ml5"></span></a></li>
                <li>
                  <div className="field mt5 withIcon">
                    <input type="text" placeholder="Search"/>
                    <button className="inlineBtn"><span className="icon icon icon-search"></span></button>
                  </div>
                </li>
                <li><a href="#">Sort by <span className="icon icon-dropdown size-11 ml5 blue"></span></a></li>
              </ul>
            </div>
            <div className="userInfo">
              <a href="#">
                <span className="icon icon-user"></span>
                <span className="blue medium">{user.firstName}</span>
              </a>
            </div>
          </div>
          : ''
        }
      </header>
)
}

export default Header
