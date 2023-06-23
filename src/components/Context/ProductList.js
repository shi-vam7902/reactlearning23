import React, { useContext } from 'react'
import { AppContext } from './context'

export const ProductList = () => {

    var {products, productDispater} = useContext(AppContext)
    
    return (

    <div>
         <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <button onClick={()=>{productDispatcher(product.id,"DELETE_PRODUCT")}}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
