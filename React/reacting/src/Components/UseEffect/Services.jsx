
/* import axios from 'axios'; */

import React, { useEffect, useState } from 'react';
import axios from '../../utils/Axios';                                      // Import Axios instance i.e, OutSouced 

function Services() {

    const [first, setFirst] = useState("A Normal Data");

    const [second, setSecond] = useState("A Large Data");

    useEffect(() => {                                                          // This is the hook that will be called when the component mounts(created).
        console.log("Services are created..!");

        return () => {
            console.log("Services are destroyed..!");
        }
    },[])                                                                     // empty dependency array [] : means it will run only once when the component mounts (create).
  // ,[second]                                                                                    [second] : means it will run whenever the second state changes.


    const getUsers = () => {
        /* const api = ('https://fakestoreapi.com/users'); */

        axios.get('/users')                                                  // If axios is outsourced or imported from one common file / component.                           
             .then((users) => {
                console.log(users);})
             .catch((err) => console.error(err));
    }

    useEffect(() => {
      getUsers();                                                           
    })

  return (
    <div className='px-3'>
        <h1>{ first }</h1>
        <button onClick={()=> setFirst("Normal Data is been changed")} className='flex bg-red-200 rounded px-2 mb-5'>Change the Normal data</button>

        <h1>{ second }</h1>
        <button onClick={()=> setSecond("Large Data is been changed")} className='flex bg-blue-200 rounded px-2'>Change the Large data</button>
    </div>
  )
}

export default Services;