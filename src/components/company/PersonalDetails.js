import React from "react";
import pure from "recompose/pure";


function PersonalDetails({individual, corporate, chnageMenuItem, onClickCorporateFillInDetails, onClickIndividualFillInDetails}) {
  let corporate_template = [];
  for(let i =0; i< corporate.length; i++){
    corporate_template.push(
      <div className="field bottomAbs" key={i}>
        <p className="smallTitle borderAfter">{corporate[i].nominee}</p>
        <p className="pt15 pb15 medium textArea">{corporate[i].types}</p>
        <div className="absArea">
          <button type="button" onClick={onClickCorporateFillInDetails.bind(this,corporate[i])} className="btn blue">Fill In details</button>
        </div>
      </div>
    )
  }
  let individual_template = [];
  for(let j = 0; j < individual.length; j++){
    individual_template.push(
      <div className="field bottomAbs" key={j}>
        <p className="smallTitle borderAfter">{individual[j].nominee}</p>
        <p className="pt15 pb15 medium textArea">{individual[j].types}</p>
        <div className="absArea">
          <button type="button" onClick={onClickIndividualFillInDetails} className="btn blue">Fill In details</button>
        </div>
      </div>
    )
  }


  return (
    <div className="addForm pt25">
      <form action="">
        <div className="formGroup">
          <div className="formHeading">
            <p><strong>corporate</strong> members</p>
          </div>
          <div className="flex threePart flexWrap">
            {corporate_template}
          </div>
        </div>
        <div className="formGroup">
          <div className="formHeading">
            <p><strong>individual</strong> members</p>
          </div>
          <div className="flex threePart flexWrap">
            {individual_template}
          </div>
          <div className="addNewGroup"></div>
        </div>
        <div className="formMeta clearAfter">
          <ul className="clearAfter">
            <li>
              <button className="btn green leftIcon" type="button"><i className="icon icon-save"></i>Save in Draft</button>
            </li>
            <li>
              <button type="button" onClick={chnageMenuItem} className="btn blue rightIcon ml15">Next Step<i className="icon icon-next"></i></button>
            </li>
          </ul>
        </div>
      </form>

    </div>
  )
}

export default pure(PersonalDetails)

