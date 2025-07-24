import React from 'react'

function EventHandling() {
  const song = [
    {name: "In Dino", Description:"One of my favourite song. Lorem, ipsum dolor sit amet consectetur."},
    {name: "Mann Mera", Description:"Also one of my favourite song. Lorem, ipsum dolor sit amet consectetur."},
  ]

    const handleonClick = () => {alert("Downloading...")}                                                          // EventHandler created.


  return (
    <div className='w-full h-screen gap-3 bg-zinc-300 flex items-center justify-center flex-col'>
      {song.map((item, index) => (
      <div key={index} className='w-80 h-32 px-3 py-2 font-semibold text-xl bg-zinc-100 rounded-md'>
        {item.name}
        <p className='text-sm font-light mt-1'>{item.Description}</p>
        <button onClick={handleonClick} className=' px-2 mt-5 bg-gray-950 text-white rounded-sm text-sm'>Download</button>   {/* EventHandler evoked */}    
      </div>
      ))}
    </div>
  )
}

export default EventHandling;