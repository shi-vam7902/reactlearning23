import React from 'react'
import { Users } from './Users'

export const Content = (props) => {
    var user = {
        name:"Shivam Shah",
        age:"20",
    }
    const test=()=>{
        alert("button called")
    }
  return (

    <div>Content loaded
        users loading ....
        <button onClick={test}>Click for alert  </button>
        <Users  p = {props.test} userData={user} fun={test}/>

    </div>
  )
}
