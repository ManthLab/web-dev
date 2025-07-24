import React, { useState } from 'react'
import Cards from './Cards';
import Form from './Form';

function Practice() {

  const [users,setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  }

  const handleRemove = (id) => {
    setUsers(users.filter((item, index) => index != id));
  }

  return (
    <div className='p-8 w-full h-screen bg-[#778da9] flex items-center justify-center flex-col gap-10'>
        <Cards users={users} handleRemove={handleRemove}/> 
        <Form handleFormSubmitData={handleFormSubmitData}/>
    </div>
  )
}

export default Practice;