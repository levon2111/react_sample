import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";

function Login({
                 data,
                 onClickLogin,
                 onUsernameChange,
                 onPasswordChange,
                 onBlurEmail,
                 error,
               }) {
  return (
    <aside className="wrapper">
      <div className="container withShadow">
        <div className="formGroup">
          <div className="formHeading">
            <p><strong>Login</strong></p>
          </div>
          <div className="p70">
            <div className="formGroup rightAbs">
              <div className="twoColumn">
                <div className={(error.email.valid || !error.email.touched) ? "field" : "field errorField"}>
                  <label className="fieldName">Username</label>
                  <input type="text" placeholder="enter username"
                         onChange={onUsernameChange}
                         onBlur={onBlurEmail}
                         value={data.email}
                  />
                  <span className="errorText">{error.email.message}</span>
                </div>
                <div className="field">
                  <label className="fieldName">Password</label>
                  <input type="password" placeholder="enter password" onChange={onPasswordChange} />
                </div>
              </div>
              <div className="field absArea">
                <button onClick={onClickLogin} type="button" className="btn blue rightIcon ml15">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

Login.propTypes = {
  onClickLogin: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
}

export default pure(Login)
