import React, { useState } from 'react'

function State8() {
    const [val, setVal] = useState([
        {name: 'Manthan', age: 23},
        {name: 'Vikrant', age: 29},
        {name: 'Aviraj', age: 27}
    ]);

  return (
    <div className='px-3 mt-3'>
        {val.map((item, index)=>
        <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
        </div>)}
        <button onClick={()=> setVal(()=> val.map(item=> item.name === 'Vikrant' ? ({name:'Vikrant', age: 30}) : item))} 
        className='px-3 bg-blue-600 text-white rounded-full'>
            Update
        </button>
    </div>
  )
}

export default State8;