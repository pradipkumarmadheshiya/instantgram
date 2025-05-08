import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logo } from '../../assets'
import { LogOut } from 'lucide-react'
import { sidebarLinks } from '../../constants'

const LeftSideBar = () => {

  const {userName, setUserLogged}= useAppContext()
  const navigate= useNavigate()

  return (
    <nav className='hidden sm:block min-w-60 max-w-70'>
      <div className='flex flex-col justify-between border-r border-gray-400 h-screen p-4'>

        <div className='flex flex-col gap-6'>
        <div>
          <Link to={"/"}
          className='flex gap-1 items-center'>
            <img src={logo} alt="logo" 
            className='rounded w-5 h-5'/>
            <p>Instantgram</p>
          </Link>
        </div>

        <div className='flex items-center gap-2'>
          <img src="/user.png" alt="user"  className='w-6 h-6'/>
          <p>{userName}</p>
        </div>

        <ul>
          {
            sidebarLinks.map((link, index)=>{
              return(
                <li key={index} className='my-2'>
                  <NavLink to={link.route}
                    className={({isActive})=>isActive ? "text-primary" :"hover:text-primary"}>
                    <p className='flex items-center gap-2'>
                      <img src={link.imgURL} alt={link.label} 
                      className='w-4 h-4'/>
                      {link.label}
                    </p>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        </div>

        <div onClick={()=>{navigate("/sign-in"); setUserLogged(false)}}
          className='flex gap-2 cursor-pointer items-center'>
          <LogOut className='w-5 h-5'/>
          Logout
        </div>
      </div>
    </nav>
  )
}

export default LeftSideBar
