import React, { useState } from 'react'

function Props1({values}) {
  const {name, image, position} = values;                                          // Another method to Pass props to the component.

  const [val, setVal] = useState(false);
  return (
    <div className='w-62 h-39 bg-zinc-300'>
      <div className='w-full h-full bg-blue-400 rounded-t-md overflow-hidden object-cover'>
        <img src={image}></img>
      </div>
      <div className='p-2 w-full h-20 bg-white rounded-b-md overflow-hidden relative'>
        <div className='font-semibold'>{name}</div>
        <div className='text-sm'>{position}</div>
        <div className='absolute bottom-2 right-2 '>
          <button onClick={()=> setVal(()=>!val)} className={`px-2 mt-3 ${val === false ? "text-white" : "text-blue-700 bg-zinc-300"} bg-blue-500 rounded `}>
            {val === false ? "Add Friend" : "Requested"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Props1;