import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const AddProduct = () => {
    const [pro, setpro] = useState([])
    const {register,handleSubmit} = useForm()
    const products = [{

    }]
    return (
    <div>AddProduct</div>
  )
}
