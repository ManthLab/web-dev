

// import - export.

function Cart() {

}

export default Cart;            // Exporting a function. 


export function Navbar() {

}

export function Sidebar() {

}


// In another file.
  
import Cart from './script';                      // Import the function.

import {Navbar, Sidebar} from './script';        // Import the function.
