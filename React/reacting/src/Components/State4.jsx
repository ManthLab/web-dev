import React, { useState } from 'react'

function State4() {
   /*  const prac = [{name: 'Manthan', age: 23},
                  {name: 'Harshita', age: 22}]; */

    const [val, setVal] = useState({name: 'Manthan', isBanned: false});
  return (
    <div className='w-full h-screen px-3 flex justify-center items-center flex-col'>
    <h1>Name: {val.name}</h1>
    <h1>Banned: {val.isBanned.toString()}</h1>

    <button onClick={()=> {setVal({...val, isBanned : !val.isBanned})}} className={`px-2 text-white ${val.isBanned ? "bg-blue-600" : "bg-red-600"} rounded-full`}>
        Click me
    </button>
    </div>
  )
}

export default State4;