

import React, { createContext, useState } from 'react';

export const UserContext = createContext();                                            // 1. Create a context  
                                                                   

    const ContextAPI = (props) =>{
        const [users, setUsers] = useState([
        { id: 1, name: 'Manthan Pawar', age: 23 },
        { id: 2, name: 'Vikrant Pawar', age: 28 },
        { id: 3, name: 'Aviraj Pawar', age: 26 }
    ])

  return  <UserContext.Provider value={{users, setUsers}}>                                        {/* 2. Wrap with context provider */}
    {props.children}                                                                              {/* 3. Pass the context to the children components */}
    </ UserContext.Provider>             
                                                                                                 
}

export default ContextAPI;