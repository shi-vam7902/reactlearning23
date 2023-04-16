import React from 'react'

export const UserList = (props) => {
  return (
    <div>
        
    <h2>Listing Users</h2>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((u) => {
            return (
              <tr>
                <th scope="row">{u.id}</th>
                {/* <th>{u.id}</th> */}
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.email}</td>
                <td>{u.gender}</td>
                <td><button onClick={()=>{props.deleteUser(u.id)}} className="btn btn-danger">DELETE</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  )
}
