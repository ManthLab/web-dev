import React, { useState } from 'react'

function State6() {

    const [val, setVal] = useState([1,2,3,4,5,6]);

  return (
    <div className='px-3 mt-2'>
        {val.map(item=><h1>{item}</h1>)}
        <button onClick={()=> setVal(()=> val.filter((item,index) => index != 2))}           // all the arrays except index 2 will be returned.  0 --> true, 1--> true, 2 --> false(removed)
                onDoubleClick={()=> setVal(()=> val.filter(item => item%2 !== 0))}           // (all the arrays except item % 2 will be returned : 1 3 5) . (if item % 2 == 0, all the item % 2 will be returned : 2 4 6 )                                                                         
        className='px-2 bg-blue-600 rounded-full text-white'>                           
            Update
        </button>
    </div>
  )
}

export default State6;