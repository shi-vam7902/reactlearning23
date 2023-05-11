import React, { useState } from "react";
import { StudentList } from "./StudentList";
import { AddStudent } from "./AddStudent";

export const Student = () => {
  var students = [
    {
      id: 1,
      name: "Shivam",
      gender: "Male",
      sem: 6,
      roll: 68,
      uniName: "Gls",
    },
    {
      id: 2,
      name: "Diya",
      gender: "FeMale",
      sem: 6,
      roll: 69,
      uniName: "Gls",
    },
    {
      id: 3,
      name: "Trupti",
      gender: "FeMale",
      sem: 8,
      roll: 70,
      uniName: "GU",
    },
    {
      id: 4,
      name: "raja",
      gender: "Male",
      sem: 6,
      roll: 34,
      uniName: "Gls",
    },
    {
      id: 5,
      name: "Shyam",
      gender: "Male",
      sem: 6,
      roll: 71,
      uniName: "Gls",
    },
  ];
  const [studentdata, setstudentdata] = useState(students);
  function deleteStudent(id) {
    students = studentdata.filter((s) => {
      return s.id !== id;
    });
    console.log(studentdata);
    alert("Student Deleted ")
    setstudentdata(students);
   
  }
  function saveStudent(student){
    students = [...studentdata,student]
    setstudentdata(students)

  }

  return (
    <div>
      Student
      <AddStudent saveStudent={saveStudent}/>
      <StudentList studData={studentdata} deletestud={deleteStudent} />
    </div>
  );
};
