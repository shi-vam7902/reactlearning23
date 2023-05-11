import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemoFInal = () => {
    const [users, setusers] = useState([])
    const getdata= async()=>{
        const res = await axios.get("http://localhost:3002/user/user")
        // console.log(res.data);

        setusers(res.data)
        console.log("setting users ....");
        
    }

    return (
    <div>
        <button onClick={getdata}>Get DATA</button>
    </div>
  )
}
