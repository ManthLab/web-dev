import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (

    <nav className='w-full flex justify-evenly gap-10 text-2xl m-4 '>                                                       {/*  Static */}
    
          <NavLink 
           className={(e) => {
            return [
                e.isActive ? "text-red-300" : "",
                e.isActive ? "font-semibold"  : "",
            ].join(" ");
           }}
           to = "/NavRoute">Home</NavLink>                     {/* As the { route NavRoute.jsx ) is nested in another ( route App.jsx ), so link is followed by the ( /NavRoute ) */} 


          <NavLink
          style={(e) => {
            return {
              color:  e.isActive ? "text-red-300" : "",
              style:  e.isActive ? "font-semibold" : "",
            }
          }}       
          to = "/NavRoute/user">User</NavLink>


          <NavLink to = "/NavRoute/about">
          {(e) => {
            return (
                <span 
                className={[
                    e.isActive ? "text-red-300" : "",
                    e.isActive ? "font-semibold"  : "",
                ]}
                >
                About
                </span>
            )
          }}
          
          About</NavLink>
    
        </nav>
  )
}

export default Nav;