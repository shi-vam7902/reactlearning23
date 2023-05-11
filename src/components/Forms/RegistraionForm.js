import React from 'react'
import { useForm } from 'react-hook-form'

export const RegistraionForm = () => {
    const {register,handleSubmit} = useForm()

    return (
    <div><h1>RegistraionForm</h1 > 
    <form onSubmit={handleSubmit}>
        <div>
            <label>FirstName</label>
            <input type='text' {...register("fname")}/><br></br>
            <label>LastName</label>
            <input type='text' {...register("lname")}/><br></br>
            <label>email</label>
            <input type='text' {...register("email")}/><br></br>
            <label>Gender</label><br></br>
            Male: <input type="radio"   {...register("male")}></input>
            Female: <input type="radio" {...register("female")}></input><br></br>
            <input type='submit' value="Submit"></input>
        </div>

    </form>
    </div>
  )
}
