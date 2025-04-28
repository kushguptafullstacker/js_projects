import React from 'react'
import { useState } from 'react'

const [counter , setcounter]=useState(0)

const  increment=(prev)=>{
    setcounter(counter+11)
}

function counter() {
  return (
    
    <div>counter
        <button onClick={handlesubmit}></button>
        <h1>`counter is {counter}`</h1>
    </div>
  )
}

export default counter