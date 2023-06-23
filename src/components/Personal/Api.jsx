import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export const Api = () => {
  const [users, setusers] = useState([]);
  const getUserData = async () => {
    const res = await axios.get("http://localhost:3002/user/user");
    if (res.status === 204) {
      toast.success("data Retrieved....", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setusers(res.data.data)
    
  };
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* <h1>List User</h1> */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">Action</th>
            {/* <th scope="col">action</th> */}
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.firstName}</td>
                {/* <td>{user.email}</td> */}
                <td>
                  <button
                    // onClick={() => {
                    //   // deleteUser(user._id);
                    // }}
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                  &nbsp; &nbsp;
                  <Link to={`/edituser/${user._id}`} className="btn btn-info">
                    EDIT
                  </Link>
                
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            value={name}
            placeholder="Enter name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            value={email}
            placeholder="Enter email"
          />
        </div>
      </form> */}
      {/* <button onClick={addUser} className="btn btn-success"> */}
      {/* </button> */}
      <button className='btn btn-primary' onClick={getUserData}>Get Data</button>
    </div>
  );
};
