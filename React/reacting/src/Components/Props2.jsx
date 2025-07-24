import React from 'react'
import Props1 from './Props1'

function Props2() {

    const data = [
        {name:'Manthan', position:'IT', image:'https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=-e79VMWbA19l1W-8tq7-18igGSdLKsYNLkY-tWhReSE='},
        {name:'Vikrant', position:'Finance', image:'https://media.istockphoto.com/id/673537770/photo/portrait-of-a-young-man-of-indian-origin.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lxm0EleHo8y6GNNUos8d0gqL_1S6cwsiaZ4AMJOtGBc='},
        {name:'Aviraj', position:'Marketing', image:'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'},
        {name:'Kartik', position:'HR', image:'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwZXJzb258ZW58MHx8MHx8fDA%3D'},
    ]
  return (
    <>
    <div className='w-full h-screen gap-4 bg-zinc-300 flex justify-center items-center'>
        {data.map((item, index)=>(

            /* <Props1 image={item.image} name={item.name} position={item.position}/> */            // One of the method to pass props.
            
            <Props1 values={item} />                                                               // Another method to pass props.      
        
        ))}
    </div>
    </>
  )
}

export default Props2;