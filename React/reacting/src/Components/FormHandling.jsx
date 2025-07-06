
// useRef :

import React, { useRef } from 'react'

function FormHandling() {
    const name = useRef(null);
    const age = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name.current.value, age.current.value);
    }
  return (
    <div>
        <form className='p-3' onClick={handleSubmit}>
            <input ref={name} className='border-2 ' type='text' placeholder='name'></input><br></br>
            <input ref={age} className='border-2 mt-2' type='age' placeholder='age'></input><br></br>
            <input className='border-2 mt-2' type='submit' value='Submit'></input>
        </form>
    </div>
  )
}

export default FormHandling;