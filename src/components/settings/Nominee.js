import React from "react";
import pure from "recompose/pure";
import {Link} from "react-router";
import ReactPaginate from "react-paginate";
import HeaderMenuContainer from "../../containers/settings/HeaderMenuContainer";

function Nominee({
                   nominees,
                   new_nominees_components,
                   handlePageClick,
                   onClickAddNominee,
                 }) {
  const nomineesList = [];
  for(let i = 0; i < nominees.length; i++){
    nomineesList.push(
      <tr key={i}>
        <td>{nominees[i].name}</td>
        <td>{nominees[i].agreementOriginalName}<span className="icon icon-pdf"></span></td>
        <td>{nominees[i].nomineeType}</td>
        <td className="iconCell"><a href="#"><span className="icon-view-details blue"></span></a></td>
        <td className="iconCell">
          <p><span className="icon-ic_inactive mr10"></span>Inactive</p>
        </td>
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
    )
  }


  return (
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
            <li className="active">
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
                {new_nominees_components}
                <div className="btnBlock absArea">
                  <button type="button" onClick={onClickAddNominee} className="btn blue leftIcon pl30 pr30">
                    <span className="icon icon-addUser"></span>
                    Add Nominee
                  </button>
                </div>
              </div>
            </form>
            <div className="tableHeading pb30 pt50">
              <h3>nominee</h3>
            </div>
            <table className="tableStyle nomineeTable">
              <thead>
              <tr className="bold">
                <th>Name</th>
                <th>Agent Agreement</th>
                <th>Type</th>
                <th>Due deligance</th>
                <th>Status</th>
                <th className="thSettings"><span className="icon-ic-settings"></span></th>
              </tr>
              </thead>
              <tbody>
              {nomineesList}
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

export default pure(Nominee)

