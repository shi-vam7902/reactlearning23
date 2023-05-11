import React, { useState } from "react";
import * as mdb from 'mdb-react-ui-kit'; // lib
import { Input } from 'mdb-react-ui-kit'; // module
import axios from "axios";
import { useForm } from "react-hook-form";

export const ApiAddUser = () => {
    const [postdata, setpostdata] = useState([])
    const {register,handleSubmit} = useForm()
    const addUser = async()=>{
        // data = {...register}
        const res = axios.post("http://localhost:3002/user/user")
        
    }
  return (
    <div >
        <form onSubmit={handleSubmit(addUser)}>
        <div>
            <label>FirstName: </label>
            <input type='text' {...register("fname")}/><br></br>
            <label>LastName: </label>
            <input type='text' {...register("lname")}/><br></br>
            <label>email: </label>
            <input type='text' {...register("email")}/><br></br>
            <label>Gender: </label><br></br>
            Male: <input type="radio"   {...register("male")}></input>
            Female: <input type="radio" {...register("female")}></input><br></br>
            <input type='submit' value="Submit"></input>
        </div>
        </form>
    </div>
  );
};
