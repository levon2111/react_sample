import React from "react";
import pure from "recompose/pure";
import {Link} from "react-router";
import ReactTooltip from 'react-tooltip';
import ReactPaginate from 'react-paginate';
import HeaderMenuContainer from "../../containers/settings/HeaderMenuContainer";

function ClientUser({
                       clients,
                       onClickAddClient,
                       onClickSendInvitation,
                       new_clients_list,
                       handlePageClick
                    }) {
  return (
    <div>
      <aside className="wrapper">
        <div className="container">
          <HeaderMenuContainer />
          <div className="fullTab mt45">
            <ul className="tab-links light ">
              <li>
                <Link to="/settings/employee">
                  <span>employess</span>
                </Link>
              </li>
              <li>
                <Link to="/settings/agent">
                  <span>agents</span>
                </Link>
              </li>
              <li>
                <Link to="/settings/nominee">
                  <span>nominees</span>
                </Link>
              </li>
              <li className="active">
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
            <div className="tabContent  pt15 pb30">
              <form action="">
                <div className="formGroup">
                  <div className="groupsNumbersLine">
                    {new_clients_list}
                  </div>
                  <div className="addNewGroup">
                    <div className="btnSpace">
                      <ReactTooltip place="bottom" className="green" type="light" effect="solid" />
                      <button type="button" className="circleBtn green btnBg" data-tip="replicate above row" onClick={onClickAddClient}></button>
                    </div>
                  </div>
                </div>
                <div className="pl35">
                  <button type="button" className="btn blue leftIcon" onClick={onClickSendInvitation}><span className="icon icon-send"></span>Send Invitation</button>
                </div>
              </form>
              <div className="tableHeading pb30 pt25">
                <h3>client users list</h3>
              </div>
              <div className="pl35 pr35">
                <table className="tableStyle clientTable">
                  <thead>
                  <tr className="bold">
                    <th>Email address</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company Name</th>
                    <th className="thStatus">Status</th>
                    <th className="thSettings"><span className="icon-ic-settings"></span></th>
                  </tr>
                  </thead>
                  <tbody>
                    {clients}
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
        </div>
      </aside>
    </div>

  )
}

export default pure(ClientUser)

