// components/SignupForm.js
import React from 'react'

const SignupForm = ({ toggleForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-center w-full p-10'
    >
      <h3 className='text-green-500 tracking-tighter'>SIGN UP</h3>
      <label className='text-lg font-semibold'>Full Name</label>
      <input type='text' className='h-10 border-2 p-1 rounded-md' required />
      <label className='text-lg font-semibold'>Email</label>
      <input type='email' className='h-10 border-2 p-1 rounded-md' required />
      <label className='text-lg font-semibold'>Password</label>
      <input
        type='password'
        className='h-10 border-2 p-1 rounded-md'
        required
      />
      <button
        type='submit'
        className='w-1/2 h-[30px] my-5 rounded-lg text-center text-[20px] font-bold bg-green-500 text-white'
      >
        SIGN UP
      </button>
      <h5 className='font-semibold'>
        Already have an account?{' '}
        <button onClick={toggleForm} className='text-blue-500'>
          Login here.
        </button>
      </h5>
    </form>
  )
}

export default SignupForm
