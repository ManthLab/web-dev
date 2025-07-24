import React, { useState } from 'react'

function State7() {
    const [val, setVal] = useState([1,2,3,4,5,6]);

  return (
    <div className='px-3 mt-3'>
        {val.map((item, index)=><h1>{item}</h1>)}
        <button onClick={()=> setVal([...val, 7])} className='px-3 bg-blue-600 text-white rounded-full'>Add</button>
    </div>
  )
}

export default State7;