import React from 'react'

function Props({title, price, text, color}) {
  return (
    <div className='w-72 h-30 bg-zinc-400 flex justify-center items-center flex-col m-2 text-lg rounded'>
    <div>
        <h1>Product Title: {title}</h1>
        <h1>Product Price: {price}</h1>
    </div>
    <button className={`px-2 ${color} mt-2 rounded text-white text-sm`}>{text}</button>
    </div>
  )
}

export default Props;