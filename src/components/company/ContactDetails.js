import React from "react";
import pure from "recompose/pure";
import ReactTooltip from 'react-tooltip'


function ContactDetails({
                          data,
                          changeBankAccount,
                          changeMasterDebitRequire,
                          debit_cards_components,
                          addDebitCard,
                          debit_card,
                          individual_bank_managers_component,
                          corporate_bank_managers_component,
                          saveInDraft,
                          onChangeStepToPersonal,
                        }) {
  return (
    <div className="addForm">
      <form action="">
        <div className="formGroup">
          <div className="fieldGroup threeColumn pb55">
            <div className="field">
              <label>Will you open a bank account in Malta?</label>
              <div className="radioStyle pt20">
                <label>
                  <input type="radio" name="account" onChange={changeBankAccount} value='yes' checked={data.bank_account === 'yes'} />
                  <span className="radioIcon">
                    <i className="icon icon-radio"></i>
                  </span>
                  <span className="label">Yes</span>
                </label>
                <label>
                  <input type="radio" name="account" onChange={changeBankAccount} value='no' checked={data.bank_account === 'no'} />
                  <span className="radioIcon">
													<i className="icon icon-radio"></i>
												</span>
                  <span className="label">No</span>
                </label>
              </div>
            </div>
            <div className="field">
              <label>Do you require a masterdebit card?</label>
              <div className="radioStyle pt20">
                <label>
                  <input type="radio" name="masterdebit" onChange={changeMasterDebitRequire} value='yes' checked={data.require_master_debit === 'yes'}/>
                  <span className="radioIcon">
													<i className="icon icon-radio"></i>
												</span>
                  <span className="label">Yes</span>
                </label>
                <label>
                  <input type="radio" name="masterdebit"  onChange={changeMasterDebitRequire} value='no' checked={data.require_master_debit === 'no'}/>
                  <span className="radioIcon">
													<i className="icon icon-radio"></i>
												</span>
                  <span className="label">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {debit_card === "yes" ?
          <div className="formGroup">
            <div className="formHeading">
              <p>number of debit cards</p>
            </div>
            <div className="groupsNumbersLine">
              {debit_cards_components}
            </div>
            <div className="addNewGroup">
              <div className="btnSpace">
                <ReactTooltip place="bottom" className="green" type="light" effect="solid" />
                <button type="button" onClick={addDebitCard} className="circleBtn green btnBg" data-tip="replicate above row"></button>
              </div>
            </div>
          </div>
          : ''
        }
        <div className="formGroup">
          <div className="formHeading">
            <p><strong>bank manager details</strong></p>
          </div>
          {corporate_bank_managers_component}
          {individual_bank_managers_component}
          <div className="addNewGroup"></div>
        </div>
        <div className="formMeta clearAfter">
          <ul className="clearAfter">
            <li>
              <button className="btn green leftIcon" type="button" onClick={saveInDraft}><i className="icon icon-save"></i>Save in Draft</button>
            </li>
            <li>
              <button type="button" onClick={onChangeStepToPersonal} className="btn blue rightIcon ml15">Next Step<i className="icon icon-next"></i></button>
            </li>
          </ul>
        </div>
      </form>

    </div>
  )
}

// OrganisationDetails.propTypes = {
//   onClickOrganisationDetails: PropTypes.func.isRequired,
// }

export default pure(ContactDetails)

