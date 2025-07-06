import React, { useState } from 'react'
import Navbar from './Navbar'
import CardMusic from './CardMusic'

function Data() {

    const data = [
        {image:'https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FucGF0aSUyMEJhcHBhfGVufDB8fDB8fHww', name:'Morya Morya', artist:'Ajay-Atul', added:false},
        {image:'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29sb3JzfGVufDB8fDB8fHww', name:'Jeev Rangla', artist:'Shreya Ghoshal', added:false},
        {image:'https://images.unsplash.com/photo-1722030736304-5f07165707b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFuZGhhcnB1cnxlbnwwfHwwfHx8MA%3D%3D', name:'Mauli Mauli', artist:'Ajay-Atul', added:false},
        {image:'https://images.unsplash.com/photo-1610085927744-7217728267a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FuZXNofGVufDB8fDB8fHww', name:'Shree Ganeshay Dheemahi', artist:'Shankar Mahadevan', added:false},
        {image:'https://images.unsplash.com/photo-1613666623136-cbdf2d459e77?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name:'Jai Shivaji (Title Track)', artist:'Kailash Kher', added:false},
        {image:'https://images.unsplash.com/photo-1687577562669-eb563546ee99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFuZGhhcnB1cnxlbnwwfHwwfHx8MA%3D%3D', name:'Tuch Majhi Aai Devaa', artist:'Avadhoot Gupte', added:false},
        {image:'https://images.unsplash.com/photo-1445375011782-2384686778a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG11c2ljfGVufDB8fDB8fHww', name:'In Dino', artist:'Pritam Chakraborty', added:false},
        {image:'https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG11c2ljfGVufDB8fDB8fHww', name:'Chehra', artist:'Adnan Sami', added:false}
    ]

    const [songData, setSongData] = useState(data);

    const handleClick = (index)=> {
      setSongData((prev)=>{
        return prev.map((item, itemindex)=>{
          if(itemindex === index) return {...item, added: !item.added}
          return item;
        })
        }
      )
    }
    
  return (
    <div className='w-full h-screen px-12 py-5 bg-zinc-300 '>
        <Navbar count={songData} />
        <div className='gap-7 mt-5 flex flex-wrap'>
            {songData.map((obj, index)=> 
            <CardMusic values={obj} handleClick={handleClick} index={index} key={index}
            />)}
        </div>
        
    </div>
  )
}

export default Data;