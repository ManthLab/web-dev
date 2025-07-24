import React, { useState } from 'react'

function State2() {

    const [set, update] = useState(false);
  return (
    <div  className='w-full h-screen text-xl flex items-center justify-center flex-col'>
        <h1>{set.toString()}</h1>
       <button  onClick={() => {update(!set)}}  
         className='px-2 mt-2 bg-blue-400 text-white rounded-full'>
            Change
        </button>
    </div>
  )
}

export default State2;