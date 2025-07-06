import React from 'react'
import {useForm } from 'react-hook-form'

function Reacthook() {

    const {register, handleSubmit} = useForm();                                    // register and handleSubmit are the two main functions of useForm hook.

  return (
    <div>
        <form onSubmit={handleSubmit(data => console.log(data))}>                   {/* data from form */} 
        <input {...register('name')} type='text' placeholder='name'></input>        {/* register('name') is used to register the input field with the name 'name' */}
        <input {...register('email')}type='text' placeholder='email'></input>
        <input type='submit'></input>
        </form>
    </div>
  )
}

export default Reacthook;