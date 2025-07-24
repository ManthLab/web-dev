import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Show from './Show';
import Services from './Services';
import Home from './Home';

function UseEffect() {
  return (
    <>
    <div className='flex gap-10 justify-evenly text-4xl mt-5 mb-10 '>
    <Link to='/UseEffect'>Home</Link>
    <Link to='/UseEffect/services'>Services</Link>
    <Link to='/UseEffect/show'>Show</Link>
    </div>

        <Routes>
            <Route path='' element= {<Home />} />
            <Route path='services' element= {<Services />} />
            <Route path='show' element= {<Show />} />
        </Routes>
    </>
    
  )
}

export default UseEffect;