import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/NavRoute/Home'
import User from '../Components/NavRoute/User'
import About from '../Components/NavRoute/About'
import UserDetails from '../Components/NavRoute/UserDetails'

function Routing() {
  return (
    <Routes>
    
            <Route path= "" element={<Home />} />

            <Route path= "user" element={<User />}>
               <Route path= "user/manthan/:name" element={<UserDetails />} />          {/* :name, to get the name(parameter) from the url ( UserDetails is child route of user route ) */}
            </ Route>
            
            <Route path= "about" element={<About />} />
                            

        </Routes >
  )
}

export default Routing;