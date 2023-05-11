import React, { useState } from "react";

export const AddStudent = (props) => {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [uniName, setuniName] = useState("");
  const [sem, setsem] = useState("");
  const [roll, setroll] = useState("");

  function submitData(e) {
    e.preventDefault()
    var students = {
      id: id,
      name: name,
      gender: gender,
      uniName: uniName,
      sem: sem,
      roll: roll,
    };
    
    props.saveStudent(students)
  }
  return (
    <div>
      ADD STUDENT
      <form
        onSubmit={(e) => {
          submitData(e);
        }}
      >
        <label htmlFor="id">ID: </label>
        <input
          type="number"
          onChange={(e) => {
            setid(e.target.value);
          }}
        />
        <hr></hr>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <hr></hr>
        MALE :{" "}
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        />
        <hr></hr>
        FEMALE :{" "}
        <input
          type="radio"
          name="gender"
          value="FeMale"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        />
        <hr></hr>
        <label htmlFor="sem">SEMESTER </label>
        <input
          type="number"
          name="sem"
          onChange={(e) => {
            setsem(e.target.value);
          }}
        />
        <hr></hr>
        <label htmlFor="uni">UNIVERSITY NAME </label>
        <input
          type="text"
          name="uniName"
          onChange={(e) => {
            setuniName(e.target.value);
          }}
        />
        <hr></hr>
        <label htmlFor="roll">roll </label>
        <input
          type="number"
          name="roll"
          onChange={(e) => {
            setroll(e.target.value);
          }}
        />
        <hr></hr>
        <input type="submit" value="ADD STUDNET"></input>
      </form>
    </div>
  );
};
