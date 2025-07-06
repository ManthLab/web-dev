import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function User() {
  return (
    <div className='w-1/2 p-3  m-auto '>
        <h1 className='text-4xl mb-5 text-red-300 font-semibold'>User</h1>
        
        <div className='flex w-[30%] flex-col'>
          <Link className="p-3 bg-red-200 text-3xl mb-2 hover:bg-red-300" to='/NavRoute/user/manthan'>Manthan</Link>
          <Link className="p-3 bg-red-200 text-3xl mb-2 hover:bg-red-300" to='/NavRoute/user/vikrant'>Vikrant</Link>
          <Link className="p-3 bg-red-200 text-3xl mb-2 hover:bg-red-300" to='/NavRoute/user/aviraj'>Aviraj</Link>
        </div>    
        <hr/>
        <Outlet />
    </div>
  )
}

export default User;