import React from 'react'

function Navbar({count}) {
  return (
   <div className=' w-full flex justify-between'>
        <h4 className='px-3 rounded text-lg text-orange-500 font-bold'>Swarify</h4>
        <div className='px-3 flex bg-orange-500 rounded gap-2 text-white'>
            <h3 className=''>Favourites</h3>
            <h3>{count.filter(item => item.added).length}</h3>                               {/* count will be added as item.added gets true. */}
        </div>
    </div>
  )
}

export default Navbar;