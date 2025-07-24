import React from 'react'

function Card() {

  const data = [
    {image:"https://images.unsplash.com/photo-1633174524778-61a18ee54490?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
     name:"Amazon Basics", 
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur.",
     inStock : true},

    {image:"https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
     name:"Books", 
     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit illo.",
     inStock : false},

    {image:"https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
     name:"Fashion", 
     description:"Lorem ipsum dolor sit amet,beatae magni facilis consequuntur quia. ",
     inStock : false},
  ]
  return (
    <div className='w-full h-screen px-4 gap-5 bg-zinc-200 flex items-center justify-center'>
    {data.map((elem, index) => (
        <div key={index} className='w-52 bg-zinc-100 rounded-lg overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
          <img 
          className='w-full h-full object-cover'
          src={elem.image}/>
        </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>
              {elem.name}
            </h2>
            <p className='text-xs mt-2'>
              {elem.description}
            </p>
            <button className={`px-2 py-0.5 text-zinc-100 text-xs ${elem.inStock ?  "bg-blue-600" : "bg-red-600"} rounded-sm mt-3`}>
              {elem.inStock ? "In Stock" : "Out Of Stock"}
            </button>
            </div>
        </div>
    ))
    }
    </div>
  )
  }

export default Card;