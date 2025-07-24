import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import User from './User';
import Home from './Home';
import UserDeatails from './UserDeatails';

function Context() {
  return (
    <nav>
        <div  className='flex justify-evenly mt-5 text-xl'>

        <Link to='/Context'>Home</Link>
        <Link to='/Context/user'>User</Link>
        <Link to='/Context/about'>About</Link>
        
        </div>

        <Routes>
            <Route path='/' element={<Home />}></Route>
             <Route path='user' element={<User />}></Route>
              <Route path='about' element={<About />}></Route>
              <Route path='userdetails' element={<UserDeatails />}></Route>
        </Routes>

    </nav>
  )
}

export default Context;