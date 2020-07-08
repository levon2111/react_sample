import React from "react";
import pure from "recompose/pure";
import Select from "react-select";
import ReactTooltip from 'react-tooltip';
import ReactPaginate from "react-paginate";
import HeaderMenuContainer from "../../containers/settings/HeaderMenuContainer";


function CompaniesInProgress({
                               onChangeUMAUser,
                               userOptions,
                               handlePageClick
                             }) {
  return (
    <aside className="wrapper">

      <div className="container">
        <HeaderMenuContainer/>
        <div className="fullTab mt45">
          <div className="tabContent  pl35 pr30 pb30">
            <div>
              <div className="tableHeading pb30 pt35">
                <h3>companies in progress not yet allocated list</h3>
              </div>
              <table className="tableStyle agentTable tableFix">
                <thead>
                <tr className="bold">
                  <th className="thSize-1">No.</th>
                  <th>Company Application No.</th>
                  <th>Employee</th>
                  <th className="thSettingsLg"><span className="icon-ic-settings"></span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>001</td>
                  <td>
                    <div className="field select selectStyle2">
                      <Select
                        value=""
                        options={userOptions}
                        onChange={onChangeUMAUser}
                        clearable={false}
                        placeholder="placeholder"
                      />
                    </div>
                  </td>
                  <td>
                    <ul className="clearAfter iconCell">
                      <li>
                        <ReactTooltip place="bottom" className="blue" type="light" effect="solid" id="blue"/>
                        <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-allocate blue"></span></a>
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
                  <td>2</td>
                  <td>002</td>
                  <td>
                    <div className="field select selectStyle2">
                      <Select
                        value=""
                        options={userOptions}
                        onChange={onChangeUMAUser}
                        clearable={false}
                        placeholder="placeholder"
                      />
                    </div>
                  </td>
                  <td>
                    <ul className="clearAfter iconCell">
                      <li>
                        <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-allocate blue"></span></a>
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
                  <td>3</td>
                  <td>003</td>
                  <td>
                    <div className="field select selectStyle2">
                      <Select
                        value=""
                        options={userOptions}
                        onChange={onChangeUMAUser}
                        clearable={false}
                        placeholder="placeholder"
                      />
                    </div>
                  </td>
                  <td>
                    <ul className="clearAfter iconCell">
                      <li>
                        <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-allocate blue"></span></a>
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
                  <td>4</td>
                  <td>004</td>
                  <td>
                    <div className="field select selectStyle2">
                      <Select
                        value=""
                        options={userOptions}
                        onChange={onChangeUMAUser}
                        clearable={false}
                        placeholder="placeholder"
                      />
                    </div>
                  </td>
                  <td>
                    <ul className="clearAfter iconCell">
                      <li>
                        <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-allocate blue"></span></a>
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
                  <td>5</td>
                  <td>005</td>
                  <td>
                    <div className="field select selectStyle2">
                      <Select
                        value=""
                        options={userOptions}
                        onChange={onChangeUMAUser}
                        clearable={false}
                        placeholder="placeholder"
                      />
                    </div>
                  </td>
                  <td>
                    <ul className="clearAfter iconCell">
                      <li>
                        <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-allocate blue"></span></a>
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
                  <td>6</td>
                  <td>006</td>
                  <td>
                    <div className="field select selectStyle2">
                      <Select
                        value=""
                        options={userOptions}
                        onChange={onChangeUMAUser}
                        clearable={false}
                        placeholder="placeholder"
                      />
                    </div>
                  </td>
                  <td>
                    <ul className="clearAfter iconCell">
                      <li>
                        <a href="#"  data-tip="vew access control" data-for="blue"><span className="icon-allocate blue"></span></a>
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
            <div className="pt20">
              <div className="tableHeading pb30 pt35">
                <h3>companies in progress allocated list</h3>
              </div>
              <table className="tableStyle agentTable tableFix">
                <thead>
                <tr className="bold">
                  <th className="thSize-1">No.</th>
                  <th>Company Application No.</th>
                  <th>Employee</th>
                  <th className="thSettings"><span className="icon-ic-settings"></span></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>001</td>
                  <td>Doedum</td>
                  <td>
                    <ul className="clearAfter iconCell">
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
                  <td>2</td>
                  <td>002</td>
                  <td>Nazeli</td>
                  <td>
                    <ul className="clearAfter iconCell">
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
                  <td>3</td>
                  <td>003</td>
                  <td>John</td>
                  <td>
                    <ul className="clearAfter iconCell">
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
                  <td>4</td>
                  <td>004</td>
                  <td>Emily</td>
                  <td>
                    <ul className="clearAfter iconCell">
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
  )
}

export default pure(CompaniesInProgress)

