import React from 'react'
import Nav from './Nav.jsx';
import Routing from '../../utils/Routing.jsx';
import { Outlet } from 'react-router-dom';

function NavRoute() {
  return (
        <div>

          <Nav />
          <Routing />
      
        </div>
  )
}

export default NavRoute;