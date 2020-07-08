import React from "react";
import pure from "recompose/pure";
import {Link} from "react-router";
import ReactPaginate from "react-paginate";
import HeaderMenuContainer from "../../containers/settings/HeaderMenuContainer";


function UserAgent({
                     agent,
                     agents,
                     agreementChange,
                     diligenceChange,
                     onClickAddAgent,
                     onChangeAgentName,
                     onBlurName,
                     onBlurDiligence,
                     onBlurAgreement,
                     error,
                     handlePageClick
                   }) {
  return (
    <aside className="wrapper">

      <div className="container">
        <HeaderMenuContainer/>
        <div className="fullTab mt45">
          <ul className="tab-links light ">
            <li>
              <Link to="/settings/employee">
                <span>employess</span>
              </Link>
            </li>
            <li className="active">
              <Link to="/settings/agent">
                <span>agents</span>
              </Link>
            </li>
            <li>
              <Link to="/settings/nominee">
                <span>nominees</span>
              </Link>
            </li>
            <li>
              <Link to="/settings/client-user">
                <span>client users</span>
              </Link>
            </li>
            <li>
              <Link to="/settings/audit">
                <span>audit client contact person</span>
              </Link>
            </li>
          </ul>
          <div className="tabContent  pl35 pr30 pt55 pb30">
            <form action="">
              <div className="formGroup rightAbs">
                <div className="threeColumn">
                  <div className={(error.name.valid || !error.name.touched ) ? "field" : "field errorField"}>
                    <label className="fieldName">name</label>
                    <input type="text" placeholder="enter agent name"
                           onChange={onChangeAgentName}
                           onBlur={onBlurName}
                    />
                    <span className="errorText">{error.name['message']}</span>
                  </div>
                  <div
                    className={(error.agentAgreement.valid || !error.agentAgreement.touched ) ? "field" : "field errorField"}>
                    <label className="fieldName">agent agreement</label>
                    <label className="fileField">
                      <input type="file" id="agreement"
                             onChange={agreementChange}
                             onBlur={onBlurAgreement}
                      />
                      <input type="text" value={agent.agreementName} placeholder="upload"/>
                      <span className="icon icon-upload blue"></span>
                    </label>
                    <span className="errorText">{error.agentAgreement['message']}</span>
                  </div>
                  <div
                    className={(error.dueDiligence.valid || !error.dueDiligence.touched ) ? "field" : "field errorField"}>
                    <label className="fieldName">due deligence</label>
                    <label className="fileField">
                      <input type="file" id="dilegence"
                             onChange={diligenceChange}
                             onBlur={onBlurDiligence}
                      />
                      <input type="text" value={agent.diligenceName} placeholder="upload"/>
                      <span className="icon icon-upload blue"></span>
                    </label>
                    <span className="errorText">{error.dueDiligence['message']}</span>
                  </div>
                </div>
                <div className="absArea">
                  <button type="button" className="btn blue leftIcon pl30 pr30" onClick={onClickAddAgent}><span
                    className="icon icon-addUser"></span>Add Agent
                  </button>
                </div>
              </div>

            </form>
            <div className="tableHeading pb30 pt50">
              <h3>agents list</h3>
            </div>
            <table className="tableStyle agentTable tableFix">
              <thead>
              <tr className="bold">
                <th>Name</th>
                <th>Agent Agreement</th>
                <th>Agent due deligence</th>
                <th className="thSettings"><span className="icon-ic-settings"></span></th>
              </tr>
              </thead>
              <tbody>
              {agents}
              </tbody>
            </table>
            {/*<div className="paginationStyle pt30">*/}
              {/*<ReactPaginate previousLabel={<span className="icon icon-dropdown"></span>}*/}
                             {/*nextLabel={<span className="icon icon-dropdown"></span>}*/}
                             {/*breakLabel={<a href="">...</a>}*/}
                             {/*breakClassName={"break-me"}*/}
                             {/*pageCount={55}*/}
                             {/*marginPagesDisplayed={1}*/}
                             {/*pageRangeDisplayed={5}*/}
                             {/*onPageChange={handlePageClick}*/}
                             {/*containerClassName={"pagination"}*/}
                             {/*subContainerClassName={"pages pagination"}*/}
                             {/*activeClassName={"active"}*/}
              {/*/>*/}
            {/*</div>*/}
          </div>
        </div>


      </div>

    </aside>
  )
}

export default pure(UserAgent)

