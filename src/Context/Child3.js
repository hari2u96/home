import React, { useContext } from 'react'
import { Context } from '../Context/Cont'

function Child3() {
    let value = useContext(Context)
  return (
    <div>
        
       {value}
        
        </div>
  )
}

export default Child3