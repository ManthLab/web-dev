import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='w-[50%] p-3 flex m-auto flex-col'>
        <h1 className='text-4xl mb-3 text-red-300 '>Home</h1>
        <p className='text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex voluptates reiciendis? Veritatis magni minima corrupti omnis illo nesciunt error vero laborum debitis. Dolor sint asperiores, ea quam ab provident placeat, officiis atque sed sit incidunt cum consequatur molestiae numquam ullam assumenda voluptate dicta eius nemo quaerat beatae. Molestias, inventore!
        </p>
        <button className='w-32 h-10 bg-zinc-400 text-white '>Explore More</button>
    </div>
    
  )
}

export default Home;