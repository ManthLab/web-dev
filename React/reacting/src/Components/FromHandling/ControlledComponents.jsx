import React, { useState } from 'react'

function ControlledComponents() {
    const [val, setVal] = useState({name: " ", age: " ", email: " "});

    const handleClick = (event) => {
        event.preventDefault();
        console.log(val);
    }
  return (
    <div>
        <form className='p-2' onSubmit={handleClick}>
            <input onChange={(event)=> setVal({...val, name: event.target.value})} className='border-2 mt-2' type='name' placeholder='name'></input><br></br>
            <input onChange={(event)=> setVal({...val, age: event.target.value})} className='border-2 mt-2' type='age' placeholder='age'></input><br></br>
            <input onChange={(event)=> setVal({...val, email: event.target.value})} className='border-2 mt-2' type='email' placeholder='email'></input><br></br>
            <input className='border-2 mt-2' type='submit' value='Submit'></input>
        </form>
    </div>
  )
}

export default ControlledComponents;