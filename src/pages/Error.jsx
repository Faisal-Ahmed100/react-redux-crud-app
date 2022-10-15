import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-3'>
      <h1 className='text-8xl font-bold'>404</h1>
      <p className='text-2xl font-medium'>Page not found!</p>
      <Link className='px-3 py-2 border' to='/'>Back</Link>
    </div>
  )
}

export default Error
