import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { useSearchParams } from 'react-router-dom'

const AllUsers = () => {

  const {allUsers, userName, setAllUsers}=useAppContext()

  if (userName && !allUsers.includes(userName)) {
    setAllUsers([...allUsers, userName]);
  }

  return (
    <div className='flex gap-4 mt-16 ml-6 flex-wrap'>
      {
        allUsers.map((user, index)=>(
          <div key={index} className='flex flex-col gap-2 bg-gray-100 p-6 rounded-3xl min-w-50 max-w-50 max-h-45 items-center'>
            <img src="/user.png" alt="user" 
            className='w-6 h-6'/>
            <p className='text-gray-700 text-center text-sm'>{user}</p>
            <button className='border border-gray-300 px-4 py-2 text-sm rounded cursor-pointer'>Follow</button>
          </div>
        ))
      }
    </div>
  )
}

export default AllUsers
