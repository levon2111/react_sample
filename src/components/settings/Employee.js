import React from "react";
import pure from "recompose/pure";
import {Link} from "react-router";
import ReactTooltip from "react-tooltip";
import ReactPaginate from "react-paginate";
import HeaderMenuContainer from "../../containers/settings/HeaderMenuContainer";


function Employee({
                    onClickAddEmployee,
                    handlePageClick
                  }) {
  return (
    <div>
      <aside className="wrapper">

        <div className="container">
          <HeaderMenuContainer/>
          <div className="fullTab mt45">
            <ul className="tab-links light ">
              <li className="active">
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
            <div className="tabContent pt15 pb30">
              <form action="">
                <div className="formGroup">
                  <div className="groupsNumbersLine">
                    <div>
                      <div className="groupNumber"></div>
                      <div className="fieldGroup fourColumn p35">
                        <div className="field">
                          <label className="fieldName">email address</label>
                          <input type="email" placeholder="email address" />
                          <span className="errorText"></span>
                        </div>
                        <div className="field">
                          <label className="fieldName">first name</label>
                          <input type="text" placeholder="first name" />
                          <span className="errorText"></span>
                        </div>
                        <div className="field">
                          <label className="fieldName">last name</label>
                          <input type="text" placeholder="last name" />
                          <span className="errorText"></span>
                        </div>
                        <div className="field">
                          <label className="fieldName">sections</label>
                          <input type="text" placeholder="select sections" />
                          <span className="errorText"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="addNewGroup">
                    <div className="btnSpace">
                      <ReactTooltip place="bottom" className="green" type="light" effect="solid" id="green"/>
                      <div className="__react_component_tooltip place-top type-dark " data-id="tooltip"></div>
                      <button type="button" className="circleBtn green btnBg" data-tip="replicate above row"  data-for="green"></button>
                    </div>
                  </div>
                </div>
                  <div className="pl35 pr35 pb30">
                    <button type="button" className="btn blue leftIcon"><span className="icon icon-send"></span>Send Invitation</button>
                  </div>
                <div className="addNewGroup greyLine pb35"></div>
                <div className=" pl35 ">
                  <div className="field withIcon lgField ">
                    <input type="text" placeholder="SEARCH USER" />
                    <button className="inlineBtn"><span className="icon icon-search"></span></button>
                  </div>
                </div>
              </form>
              <div className="pl35 pr35">
                <table className="tableStyle employeeTable mt25">
                  <thead>
                  <tr className="bold">
                    <th>Code</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Section</th>
                    <th>No. of clients</th>
                    <th className="thStatus">Status</th>
                    <th className="thSettingsLg"><span className="icon-ic-settings"></span></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>001</td>
                    <td>Johnson</td>
                    <td>Doedum</td>
                    <td className="blockCell tLeft">
                      <span>New Company</span>
                      <span>Peyroll</span>
                      <span>New Company</span>
                    </td>
                    <td className="bold blockCell">
                      <span>15</span>
                      <span>20</span>
                      <span>15</span>
                    </td>
                    <td className="iconCell">
                      <span className="icon-ic_pending"></span>
                    </td>
                    <td>
                      <ul className="clearAfter iconCell">
                        <li>
                          <ReactTooltip place="bottom" className="blue" type="light" effect="solid" id="blue"/>
                          <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-ic_view_all_clients blue"></span></a>
                        </li>
                        <li>
                          <a href="#"  data-tip="amend sections" data-for="blue"><span className="icon-ic_edit blue"></span></a>
                        </li>
                        <li>
                          <a href="#"  data-tip="view all clients" data-for="blue"><span className="icon-ic_delete blue"></span></a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>002</td>
                    <td>Johnson</td>
                    <td>Doedum</td>
                    <td className="blockCell tLeft">
                      <span>New Company</span>
                      <span>Peyroll</span>
                      <span>New Company</span>
                    </td>
                    <td className="bold blockCell">
                      <span>15</span>
                      <span>20</span>
                      <span>15</span>
                    </td>
                    <td className="iconCell">
                      <span className="icon-accepted"></span>
                    </td>
                    <td>
                      <ul className="clearAfter iconCell">
                        <li>
                          <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-ic_view_all_clients blue"></span></a>
                        </li>
                        <li>
                          <a href="#"  data-tip="amend sections" data-for="blue"><span className="icon-ic_edit blue"></span></a>
                        </li>
                        <li>
                          <a href="#"  data-tip="view all clients" data-for="blue"><span className="icon-ic_delete blue"></span></a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>Johnson</td>
                    <td>Doedum</td>
                    <td className="blockCell tLeft">
                      <span>New Company very long title</span>
                      <span>Peyroll</span>
                      <span>New Company</span>
                    </td>
                    <td className="bold blockCell">
                      <span>15</span>
                      <span>20</span>
                      <span>15</span>
                    </td>
                    <td className="iconCell">
                      <span className="icon-accepted"></span>
                    </td>
                    <td>
                      <ul className="clearAfter iconCell">
                        <li>
                          <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-ic_view_all_clients blue"></span></a>
                        </li>
                        <li>
                          <a href="#"  data-tip="amend sections" data-for="blue"><span className="icon-ic_edit blue"></span></a>
                        </li>
                        <li>
                          <a href="#"  data-tip="view all clients" data-for="blue"><span className="icon-ic_delete blue"></span></a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>001</td>
                    <td>Johnson</td>
                    <td>Doedum</td>
                    <td className="blockCell tLeft">
                      <span>New Company</span>
                      <span>Peyroll</span>
                      <span>New Company</span>
                    </td>
                    <td className="bold blockCell">
                      <span>15</span>
                      <span>20</span>
                      <span>15</span>
                    </td>
                    <td className="iconCell">
                      <span className="icon-ic_pending"></span>
                    </td>
                    <td>
                      <ul className="clearAfter iconCell">
                        <li>
                          <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-ic_view_all_clients blue"></span></a>
                        </li>
                        <li>
                          <a href="#"  data-tip="amend sections" data-for="blue"><span className="icon-ic_edit blue"></span></a>
                        </li>
                        <li>
                          <a href="#"  data-tip="view all clients" data-for="blue"><span className="icon-ic_delete blue"></span></a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

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

    </div>
  )
}

export default pure(Employee)
