import React, { useState } from 'react'

function State5() {

    const [val, setVal] = useState([1,2,3,4,5,6]);

  return (
    <div className='px-3 mt-2'>
{val.map(item=><h1>{item}</h1>)}                   
    <button onClick={()=>setVal(() => val.filter((item, index )=> index != val.length - 1))}              // index : 0,1,2,3,4,5
    className='px-3 bg-blue-600 text-white rounded-full'>                                            {/* val.length-1 : 6-1 = 5 */}
        Update            
    </button>                                                                                            
    </div>                                                                                                // filter will return an array whose index(5) doesn't != matches with it's length-1(5).             
  )
}

export default State5;