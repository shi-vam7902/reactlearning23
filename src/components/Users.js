import React from 'react'

export const Users = (props) => {
  return (
    <div>
        {props.p}

         <p>{props.userData.name}</p>
         <p>{props.userData.age}</p>
        
         <button >Click for alert 1 </button>
        

    </div>
  )
}
