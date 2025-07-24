import React, { useState } from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";

function Create() {
    const [val, setval] = useState(false);
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='relative w-110 h-62 bg-zinc-500 rounded-md flex overflow-hidden'>   
            <img className={`shrink-0 transition-transform duration-500 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`} 
            src='https://images.unsplash.com/photo-1573950940509-d924ee3fd345?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
            
            <img className={`shrink-0 transition-transform duration-500 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} w-full h-full object-cover`}  
            src='https://images.unsplash.com/photo-1699064321414-91dcb16ac292?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img> 
            
            <span onClick={()=> setval(()=>!val)} 
            className='w-10 h-10 absolute bottom-0.5 rounded-full bg-[#dadada7b] flex justify-center items-center left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <IoArrowForwardOutline /> 
            </span>
        </div>
    </div>
  )
}

export default Create;