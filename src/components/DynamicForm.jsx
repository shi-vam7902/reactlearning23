import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const DynamicForm = () => {
  const [formdata, setformdata] = useState([
    {
      label: "Name",
      fieldName: "name",
      fieldType: "text",
      placeholder: "Enter The Name",
    },
    {
      label: "Email",
      fieldName: "email",
      fieldType: "email",
      placeholder: "Enter The Email",
    },
    {
      label: "Password",
      fieldName: "password",
      fieldType: "password",
      placeholder: "Enter Your Password",
    },
  ]);
  const [register, handleSubmit] = useForm();
  const submit = (formdata) => {
    console.log(formdata);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        {formdata?.map((form) => {
          return (
            <div>
              <input
                type={form.fieldType}
                placeholder={form.placeholder}
                {...register(form.fieldName)}
              ></input>
              <input type="submit" value="Submit"></input>
            </div>
          );
        })}
      </form>
    </div>
  );
};
