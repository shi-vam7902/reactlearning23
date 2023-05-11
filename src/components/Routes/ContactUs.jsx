import React from "react";
import { Link, useParams } from "react-router-dom";

export const ContactUs = () => {
  var id = useParams().id
  var employees = [
    {
      id: 1,
      name: "Shivam",
    },
    {
      id: 2,
      name: "ram",
    },
  ];
  return (
    <div>
      ContactUs
      {/* <h2>{id}</h2> */}
      <ul>
        {employees.map((e) => {
          return <li>
          <Link to={`contactus/${e.id}`}>{e.name}</Link> 
            </li>;
        })}
      </ul>
    </div>
  );
};
