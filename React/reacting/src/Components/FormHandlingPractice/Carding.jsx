import React from 'react'

function Carding({user, handleRemove, id}) {
  return (
    <div className='w-50 h-50 bg-[#e0e1dd] rounded-md flex flex-col items-center'>
        <img className='w-[3vw] h-[3vw] mt-3 rounded-full bg-zinc-400 object-cover' 
        src={user.image}></img>
        <h3 className='mt-1 text-center text-sm font-semibold'>{user.name}</h3>
        <h4 className='text-xs opacity-60 mt-0.5 font-semibold'>{user.email}</h4>
        <p className='text-xs font-semibold text-center mt-2 leading-none tracking-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam ullam omnis.</p>
        <button onClick={()=>handleRemove(id)} className='bg-red-600 px-2 rounded-lg text-sm mt-3 text-white cursor-pointer'>Remove</button>
    </div>
  )
}

export default Carding;