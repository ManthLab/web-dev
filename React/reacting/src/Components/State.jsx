import React, { useState } from 'react'

function State() {
    const [score,setScore] = useState(100);
    console.log(score);

    let changeHandler = () => setScore(50);
  return (
    <div className='w-full h-screen text-xl flex items-center justify-center flex-col'>
        <div>{score}</div>
        <button onDoubleClick={changeHandler}  onClick={() => {setScore(300)}} 
         className='px-2 mt-2 bg-blue-400 text-white rounded-full'>
            Change
        </button>
    </div>   
  )
}

export default State;