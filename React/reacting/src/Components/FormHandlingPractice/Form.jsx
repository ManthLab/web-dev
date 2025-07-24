import React from 'react'
import {useForm} from 'react-hook-form';

function Form({handleFormSubmitData}) {

  const {register, handleSubmit, reset} = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  }

  return (
    <div className='mt-10 flex gap-5 justify-center'>
        <form className='flex gap-5' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} className='border-2 rounded-md outline-none text-base' type='text' placeholder='name'></input>
            <input {...register('email')}className='border-2 rounded-md outline-none text-base' type='text' placeholder='email'></input>
            {/* <input className='border-2 rounded-md outline-none text-base' type='text' placeholder='Description'></input> */}
            <input {...register('image')}className='border-2 rounded-md outline-none text-base' type='url' placeholder='image-url'></input>
            <input className='px-2 text-sm rounded-lg bg-[#1b263b] text-white mb-2 border-2 cursor-pointer' type='submit'></input>
        </form>
    </div>
  )
}

export default Form;