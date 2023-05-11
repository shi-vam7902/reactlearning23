import React, { useState } from "react";
import { UserList } from "./UserList";
import { AddUser } from "./AddUser";

export const Users = () => {
  var users = [
    {
      id: 1,
      name: "Shivam",
      age: 21,
      email: "Shivamshah.glsbca20@gmail.com",
      gender: "Male",
    },
    {
      id: 2,
      name: "Raja",
      age: 20,
      email: "rajababu.com",
      gender: "Male",
    },
    {
      id: 3,
      name: "priya",
      age: 20,
      email: "priya@xn.com",
      gender: "FeMale",
    },
    {
      id: 4,
      name: "Suresh",
      age: 21,
      email: "surya@xn.com",
      gender: "Male",
    },
  ];

  const [userData, setuserData] = useState(users);
  function deleteUser(id) {
    users = userData.filter((u) => {
      return u.id !== id;
    });
    setuserData(users)
  }

  function saveUser(user){
    console.log("add User");
    users = [...userData,user]
    setuserData(users)
    alert("user added SuccessFully")
  }
  return (
    <div>
      User's Component
      <AddUser saveUser={saveUser}/>
      <UserList users={userData} deleteUser={deleteUser}/>
    </div>
  );
};
