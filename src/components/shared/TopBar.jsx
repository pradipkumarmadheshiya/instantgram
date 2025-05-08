import React from 'react'
import { logo } from '../../assets'
import { LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const TopBar = () => {

  const {setUserLogged}= useAppContext()

  return (
    <div className='sm:hidden sticky top-0 z-50 w-screen bg-white'>
      <div className='flex justify-between px-6 py-4 border-b border-gray-300'>

        <Link to={"/"}
        className='flex gap-1 items-center justify-center'>
          <img src={logo} alt="logo" 
          className='rounded w-5 h-5'/>
          <p>Instantgram</p>
        </Link>

        <div className='flex gap-3'>
          <Link to={"/sign-in"} onClick={()=>setUserLogged(false)}>
            <LogOut className='w-5 opacity-80 hover:opacity-100'/>
          </Link>
          <Link to={"/#"}>
            <img src="/user.png" alt="user"  className='w-6 h-6'/>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default TopBar
