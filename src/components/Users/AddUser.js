import React, { useState } from "react";

export const AddUser = (props) => {
 
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");

  const submitData = (e) => {
    e.preventDefault()

    var userData={
        id:id,
        name:name,
        email:email,
        age:age,
        gender:gender
    }
    props.saveUser(userData)
};
  return (
    <div className="container">
      <h1>Add Student</h1>
      <div>
        <form onSubmit={(e) => {submitData(e)}}>
          <div class="form-group">
            <label htmlFor="id" for="exampleInputEmail1">
              Id
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Id"
              onChange={(e) => {
                setid(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputPassword1"
              placeholder="Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Age"
              onChange={(e) => {
                setage(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value="FeMale"
              htmlFor="female"
              onChange={(e) => {
                setgender(e.target.value);
              }}
            />
            <label class="form-check-label" for="exampleRadios1">
              Female
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              value="FeMale"
              htmlFor="female"
              onChange={(e) => {
                setgender(e.target.value);
              }}
            />
            <label class="form-check-label" for="exampleRadios1">
              Male
            </label>
          </div>
          <hr />
          <button type="submit" class="btn btn-success">
            Submit
          </button>
          <hr />
        </form>
      </div>
    </div>
  );
};
