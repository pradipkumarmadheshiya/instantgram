import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl'>404</h1>
      <p>Page Not Found</p>
      <Link to={"/"}>
        <button className='cursor-pointer border rounded hover:bg-gray-100 py-2 px-3 mt-2 text-sm'>Home</button>
      </Link>
    </div>
  )
}

export default NotFound
