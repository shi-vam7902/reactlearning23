import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ApiDemo1 = () => {
  const [user, setuser] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:3002/user/user");
    // console.log(res.data.data);
    console.log(res.status);
    setuser(res.data.data)
  };// getting

  // const deleteUser=async()=>{
  //   id = req.params().id
  //   const res = await axios.delete("http://localhost:3002/user/user"+id)
  //   console.log(res.data);
  // }

  return (
    <div>
      <h3>Listing Users</h3>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
      <table class="table" border={23}>
        <thead>
          <tr>
            <td>Id</td>
            <td>FirstName</td>
            <td>lastName</td>
            <td>Gender</td>
            <td>Phone No</td>
            <td>Password</td>
            <td>Action</td>
            <td>Action</td>
          </tr>
        </thead>

        {user?.map((u) => {
          return (
            <tr>
              <td>{u._id}</td>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.gender}</td>
              <td>{u.phoneNo}</td>
              <td>{u.password}</td>
              <td><button type="button" class="btn btn-danger" onClick={}>DELETE</button></td>
              <td><button type="button" class="btn btn-warning">EDIT</button></td>
            </tr>
          );
        })}
      </table>
      <button onClick={getData}>List User</button>
      <Link to={"/adduser"}>
        <button>Add User</button>
      </Link>
      <Link to={"/adduser"}><button>Add User</button></Link>
    </div>
  );
};
