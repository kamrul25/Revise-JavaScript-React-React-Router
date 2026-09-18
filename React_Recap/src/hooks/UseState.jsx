import React, { useState } from 'react'

const UseState = () => {
    const [color , setColor] = useState("red");
    const handelColor =(e)=>{
        setColor(e.target.innerText)
        
    }

  return (
    <div>
        <h1>What is color ?</h1>
        < h2>Answer:  {color}</ h2>
        <button type='button' onClick={(e) => handelColor(e)}>Blue</button>
        <button type='button' onClick={(e) => handelColor(e)}>Green</button>
        <button type='button' onClick={(e) => handelColor(e)}>Yellow</button>
        <button type='button' onClick={(e) => handelColor(e)}>Gray</button>

    </div>
  )
}

export default UseState