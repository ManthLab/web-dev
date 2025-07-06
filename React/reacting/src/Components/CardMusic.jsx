import React, { useState } from 'react'

function CardMusic({values, handleClick, index}) {

    const {image, name, artist, added} = values;

  return (
        <div className='p-4 mt-5 w-65 bg-white rounded-md flex relative pb-7'>
            <div className='w-15 h-15 rounded'>
                <img className='w-full h-full object-cover rounded-lg overflow-hidden' src={image}></img>
            </div>
            <div className='px-2'>
                <h4 className='text-md font-semibold'>{name}</h4>
                <h4 className='text-xs'>{artist}</h4>
            </div>
            <button onClick={()=>handleClick(index)} className={`px-3 py-1 whitespace-nowrap ${added === false ? "bg-orange-500" : "bg-[#29AB87]"} rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 text-sm  text-white`}>{added === true ? "Added":"Add to Favourites"}</button>
        </div>
  )
}

export default CardMusic;