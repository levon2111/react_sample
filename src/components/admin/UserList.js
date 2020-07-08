import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";

function UserList({
                    list,
                    user,
                    users,
                    onEmailChange,
                    onFirstNameChange,
                    onLastNameChange,
                    onClickSection,
                    onClickInvite,
                    onClickAddUser,
                    onClickEdit
                  }) {
  return (
    <div>
      <div className="App-intro">
        {list}
      </div>
      <form>
        <div className="logCont">
          <div>
            <h3>Admin screen 1</h3>
            <div className="formRow">
              <input type="text"
                     onChange={onEmailChange}
                     value={user.email}
                     className="formControl sizeM floatlabel"
                     placeholder="Email address"
              />
            </div>
            <div className="formRow">
              <input type="text"
                     className="formControl sizeM floatlabel"
                     onChange={onFirstNameChange}
                     value={user.first_name}
                     placeholder="First Name"
              />
            </div>
            <div className="formRow">
              <input type="text"
                     onChange={onLastNameChange}
                     value={user.last_name}
                     className="formControl sizeM floatlabel"
                     placeholder="Last Name"
              />
            </div>
            <div className="formRow">
              Sections <br/>
              <input type="checkbox" value="new_company"
                     onClick={onClickSection}

              />New Company <br/>
              <input type="checkbox" value="audit" onClick={onClickSection}/>Audit<br/>
              <input type="checkbox" value="payroll"  onClick={onClickSection}/>Payroll<br/>
              <input type="checkbox" value="accounting"  onClick={onClickSection}/>Accounting<br/>
              <input type="checkbox" value="recurring"  onClick={onClickSection}/>Recurring<br/>
              <input type="checkbox" value="mlro"  onClick={onClickSection}/>MLRO<br/>
            </div>
            <input type="button"
                   onClick={onClickAddUser}
                   className="btn btnPrime sizeM btnBlock"
                   value="Add Another"
            />
            <input type="button"
                   onClick={onClickInvite}
                   className="btn btnPrime sizeM btnBlock"
                   value="Send Invitations"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

UserList.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
}

export default pure(UserList)
