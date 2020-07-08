import React from "react";
import pure from "recompose/pure";
import Select from 'react-select';
import ReactTooltip from 'react-tooltip'


const placeholder = <span>Select User</span>;

function OrganisationDetails({
                               errors,
                               abbreviationOptions,
                               goToPersonalDetails,
                               checkTradingActivity,
                               checkAuthorisedPerson,
                               checkBeneficialOwner,
                               checkCompanyAbbreviation,
                               checkCompanyName,
                               openAddUserModal,
                               addShareCapital,
                               authorised_share_capital_components,
                               onChangeTradingActivity,
                               onChangeAddressService,
                               other_address_input,
                               individual_members_components,
                               addIndividualMember,
                               corporate_members_components,
                               addCorporateMember,
                               clients,
                               company_types,
                               organisation_details,
                               onChangeUMAUser,
                               onChangeProposedCompanyName,
                               onChangeAgent,
                               onChangeAuthorisedPerson,
                               onChnageBeneficialOwner,
                               onChangeProposedCompanyAbbreviation,
                               userOptions,
                               agentOptions,
                               addressOptions,
                               onChangeCompanyType,
                               onChangeClientUser,
                               onClickSaveOrganization
                             }) {
  return (
    <div className="addForm">
      <form action="">
        <div className="formGroup">
          <div className="fieldGroup threeColumn pb0">
            <div className={(errors.uma_user.valid || !errors.uma_user.touched ) ? "field select" : "field select errorField"}>
              <label className="fieldName">User</label>
              <Select
                name="form-field-name"
                value={organisation_details.uma_user}
                options={userOptions}
                onChange={onChangeUMAUser}
                clearable={false}
                placeholder={placeholder}
              />
              <span className="errorText">{errors.uma_user['message']}</span>
            </div>
            <div className={(errors.proposed_company_name.valid || !errors.proposed_company_name.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">proposed company name</label>
              <input type="text" placeholder="enter company name" onBlur={checkCompanyName} onChange={onChangeProposedCompanyName} value={organisation_details.proposed_company_name}/>
              <span className="errorText">{errors.proposed_company_name['message']}</span>
            </div>
            <div className={(errors.proposed_company_abbreviation.valid || !errors.proposed_company_abbreviation.touched ) ? "field select" : "field select errorField"}>
              <label className="fieldName">proposed company abbreviation</label>
              <Select
                name="form-field-name"
                value={organisation_details.proposed_company_abbreviation}
                options={abbreviationOptions}
                onChange={onChangeProposedCompanyAbbreviation}
                onBlur={checkCompanyAbbreviation}
                clearable={false}
                placeholder="Select company Abbreviation"
              />
            </div>
          </div>
          <div className="fieldGroup threeColumn pt0">
            <div className="field select">
              <label className="fieldName">company type</label>
              <Select
                name="form-field-name"
                value={organisation_details.company_type}
                options={company_types}
                onChange={onChangeCompanyType}
                clearable={false}
                placeholder="select company type"
              />
            </div>
            <div  className={(errors.client_user.valid || !errors.client_user.touched ) ? "field select" : "field select errorField"}>
              <label className="fieldName">client user</label>
              <Select
                name="form-field-name"
                value={organisation_details.client_user}
                options={clients}
                onChange={onChangeClientUser}
                clearable={false}
                placeholder="Select user"
              />
              <span className="errorText">{errors.client_user['message']}</span>
              <div className="addBtn">
                <ReactTooltip place="bottom" className="green" type="light" effect="solid" />
                <button type="button" className="circleBtn green popup-modal  btnBg" data-tip="add new user" onClick={openAddUserModal}></button>
              </div>
            </div>
          </div>
        </div>
        <div className="formGroup">
          <div className="formHeading">
            <p>person/entity requesting a new company</p>
          </div>
          <div className="fieldGroup threeColumn">
            <div className={(errors.agent.valid || !errors.agent.touched ) ? "field select" : "field select errorField"}>
              <label className="fieldName">Agent</label>
              <Select
                name="form-field-name"
                value={organisation_details.agent}
                options={agentOptions}
                onChange={onChangeAgent}
                clearable={false}
                placeholder="select agent name"
              />
              <span className="errorText">{errors.agent['message']}</span>
            </div>
            <div className={(errors.authorised_person.valid || !errors.authorised_person.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">authorized person</label>
              <input type="text" placeholder="enter name" onBlur={checkAuthorisedPerson} onChange={onChangeAuthorisedPerson} value={organisation_details.authorised_person}/>
              <span className="errorText">{errors.authorised_person['message']}</span>
            </div>
            <div className={(errors.beneficial_owner.valid || !errors.beneficial_owner.touched ) ? "field" : "field errorField"}>
              <label className="fieldName">ultimate benefical owner</label>
              <input type="text" placeholder="enter name" onBlur={checkBeneficialOwner} onChange={onChnageBeneficialOwner} value={organisation_details.beneficial_owner}/>
              <span className="errorText">{errors.beneficial_owner['message']}</span>
            </div>
          </div>
        </div>

        <div className="formGroup">
          <div className="formHeading">
            <p><strong>corporate</strong> members</p>
          </div>
          <div className="groupsNumbersLine">
            {corporate_members_components}
          </div>
          <div className="addNewGroup">
            <div className="btnSpace">
              <button type="button" className="circleBtn green tooltip btnBg" data-tip="replicate above row" onClick={addCorporateMember}></button>
            </div>
          </div>
        </div>

        <div className="formGroup">
          <div className="formHeading">
            <p><strong>individual</strong> members</p>
          </div>
          <div className="groupsNumbersLine">
            {individual_members_components}
          </div>
          <div className="addNewGroup">
            <div className="btnSpace">
              <button type="button" onClick={addIndividualMember} className="circleBtn green tooltip btnBg" data-tip="replicate above row"></button>
            </div>
          </div>
        </div>
        <div className="formGroup">
          <div className="formHeading">
            <p>Registered adress</p>
          </div>
          <div className="fieldGroup twoColumn">
            <div className="column">
              {other_address_input}
              <div className="clear"></div>
              <div className={(errors.company_address_service.valid || !errors.company_address_service.touched ) ? "field select" : "field select errorField"}>
                <label className="fieldName">company address service</label>
                <Select
                  name="form-field-name"
                  value={organisation_details.company_address_service}
                  options={addressOptions}
                  onChange={onChangeAddressService}
                  clearable={false}
                  placeholder="Select company address"
                />
                <span className="errorText">{errors.company_address_service['message']}</span>
              </div>
            </div>
            <div className="column">
              <div className={(errors.trading_activity.valid || !errors.trading_activity.touched ) ? "field" : "field errorField"}>
                <label className="fieldName">Main trading activity</label>
                <textarea
                  className="mt15"
                  placeholder="Main trading activity description as to be shown on the company's memorandum"
                  onChange={onChangeTradingActivity}
                  value={organisation_details.trading_activity}
                  onBlur={checkTradingActivity}
                ></textarea>
                <span className="errorText">{errors.trading_activity['message']}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="formGroup">
          <div className="formHeading">
            <p>authorized share capital</p>
          </div>
          <div className="groupsNumbersLine">
            {authorised_share_capital_components}
          </div>

          <div className="addNewGroup">
            <div className="btnSpace">
              <button type="button" className="circleBtn green  btnBg" data-tip="replicate above row" onClick={addShareCapital}></button>
            </div>
          </div>

        </div>

        <div className="formMeta clearAfter">
          <ul className="clearAfter">
            <li>
              <button className="btn green leftIcon" type="button" onClick={onClickSaveOrganization}><i className="icon icon-save"></i>Save in Draft</button>
            </li>
            <li>
              <button type="button" onClick={goToPersonalDetails} className="btn blue rightIcon ml15">Next Step<i className="icon icon-next"></i></button>
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

export default pure(OrganisationDetails)

