import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";

function NewCompanyMenu({
                          template,
                          activeItem,
                          onClickOrganisationDetails,
                          onClickPersonalDetails,
                          onClickContactDetails,
                          onClickActivitiesInformation,
                        }) {
  return (
    <aside className="wrapper">
      <div className="container withShadow">
        <div className="steps">
          <ul className="clearAfter">
            <li className={activeItem === 'organisation_details' ? "active" : ''} onClick={onClickOrganisationDetails}>
              <span className="stepName">organization details</span>
              <div className="stepNumber">
                <i className="icon icon-step-icon"></i>
                <span>1</span>
              </div>
            </li>
            <li className={activeItem === 'personal_details' ? "active" : ''} onClick={onClickPersonalDetails}>
              <span className="stepName">personal details</span>
              <div className="stepNumber">
                <i className="icon icon-step-icon"></i>
                <span>2</span>
              </div>
            </li>
            <li className={activeItem === 'contact_details' ? "active" : ''} onClick={onClickContactDetails}>
              <span className="stepName">contact details</span>
              <div className="stepNumber">
                <i className="icon icon-step-icon"></i>
                <span>3</span>
              </div>
            </li>
            <li className={activeItem === 'activities_information' ? "active" : ''}
                onClick={onClickActivitiesInformation}>
              <span className="stepName">activities information</span>
              <div className="stepNumber">
                <i className="icon icon-step-icon"></i>
                <span>4</span>
              </div>
            </li>
          </ul>
        </div>
        {template}
      </div>
    </aside>
  )
}

NewCompanyMenu.propTypes = {
  onClickOrganisationDetails: PropTypes.func.isRequired,
  onClickPersonalDetails: PropTypes.func.isRequired,
  onClickContactDetails: PropTypes.func.isRequired,
  onClickActivitiesInformation: PropTypes.func.isRequired
}

export default pure(NewCompanyMenu)

