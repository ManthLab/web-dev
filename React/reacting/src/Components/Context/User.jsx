import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/ContextAPI';

function User() {

  const {users, setUsers} = useContext(UserContext);                             // useContext hook to access the state from the ContextAPI


  return (
    <div className='w-1/2 mt-5 '>
        <h1 className='text-3xl mb-3'>User List</h1>
        <div className='text-xl'>
          {users.map((item) => ( <Link key={item.id} to={'/Context/user/${item.id}'} className='bg-red-200 p-2 mb-3 w-auto'>{item.username}</Link>))}
          
        </div>
    </div>
  )
}

export default User;