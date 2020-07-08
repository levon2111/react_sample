import React from "react";
import pure from "recompose/pure";

function EmployeesList({
                     employees,
               }) {
  return (
    <div>
      <input type="text" name="search_name" placeholder="Search User"/>
      <button type="button">Add Employee</button>
      <table>
        <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Sections</th>
          <th>No. of clients</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {employees}
        </tbody>

      </table>

    </div>
  )
}

export default pure(EmployeesList)
