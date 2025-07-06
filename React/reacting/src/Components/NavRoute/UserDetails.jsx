import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserDetails() {

    const { name } = useParams();                                                             // get name(parameter) from URL.

    const navigate = useNavigate();                                                         // useNavigate() function to navigate to another page.


    const goBackHandler = () => {

        navigate("/NavRoute/user");       // provide the path to navigate to.
        // navigate(-1);                     navigate to previous page. 
    }

  return (
    <div className='w-[50%] p-3 flex m-auto flex-col'>
        <h1 className='text-4xl mb-3 text-red-300'>User Details</h1>
        <h1 className='text-2xl text-red-200 mb-2'>{ name }</h1>
        <button onClick={goBackHandler} className='w-32 h-10 bg-zinc-400 text-white '>Go Back</button>
    </div>
  )
}

export default UserDetails;