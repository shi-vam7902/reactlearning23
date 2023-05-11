import React, { useState } from 'react'
import { set } from 'react-hook-form'

export const StorageDemo = () => {
    const [uid, setuid] = useState('')
    function storeData()
    {
        localStorage.setItem("id","12345")
        sessionStorage.setItem("id","sessionStorage")
    }
    function retrieveData()
    {
        localStorage.getItem("id")
        sessionStorage.getItem('id')
        setuid(uid)
        setuid(uid)
    }
    function deleteData()
    {
        localStorage.removeItem("id")
        // localStorage.clear()
        sessionStorage.clear()
    }
  return (
    <div>
        <h1>
            Storage demo
        </h1>
        <button onClick={()=>{storeData()}}>STORE</button>
        <button onClick={()=>{retrieveData()}}>Print</button>
       
        {
            uid
        }
         <button onClick={()=>{deleteData()}}>Delete</button>
    </div>
  )
}
