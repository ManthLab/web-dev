import React from 'react'
import Carding from './Carding';

function Cards({users, handleRemove}) {
  return (
    <div className='p-4 rounded-md w-full h-[20vw] gap-7 flex flex-wrap justify-center items-center overflow-auto'>
        {users.map((item, index)=> {
          return <Carding handleRemove={handleRemove} id={index} user={item} key={index} />
        } )}
        
    </div>
  )
}

export default Cards;