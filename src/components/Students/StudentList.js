import React from "react";

export const StudentList = (props) => {
  return (
    <div>
      <h1>Listing Students</h1>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">FirstName</th>
            <th scope="col">Gender</th>
            <th scope="col">Semester</th>
            <th scope="col">University-Name</th>
            <th scope="col">Roll No</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.studData.map((s) => {
            return (
              <tr>
                <th scope="row">{s.id}</th>
                <td>{s.name}</td>
                <td>{s.gender}</td>
                <td>{s.sem}</td>
                <td>{s.uniName}</td>
                <td>{s.roll}</td>
                <td><button className="btn btn-danger" onClick={()=>{props.deletestud(s.id)}}>REMOVE</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
