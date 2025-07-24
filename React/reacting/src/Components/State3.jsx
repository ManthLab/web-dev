import React, { useState } from 'react'

function State3() {
    const [val, setVal] = useState(21);
  return (
    <div className='w-full h-screen text-xl flex items-center justify-center flex-col'>
        <div>{val}</div>
        <button onClick={() => setVal(prev=>prev*3)} 
         className='px-2 mt-2 bg-blue-400 text-white rounded-full'>
            Update
        </button>
    </div>   
  )
}

export default State3;