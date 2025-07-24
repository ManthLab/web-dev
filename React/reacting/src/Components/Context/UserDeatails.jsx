import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../utils/ContextAPI';

const UserDeatails = () => {

  const { id } = useParams();

  const { users } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div>
      <h1>
        {users[id].username}
      </h1>

      <h3>
        {users[id].city}
      </h3>

      <button onClick={() => navigate(-1)}></button>
    </div>
  )
}

export default UserDeatails;