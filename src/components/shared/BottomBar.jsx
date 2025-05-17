import React from 'react'
import { bottombarLinks } from '../../constants'
import { NavLink } from 'react-router-dom'

const BottomBar = () => {
  return (
    <section className='flex w-full fixed z-50 bottom-0 rounded-t-[12px] px-4 py-3 sm:hidden border-t border-gray-400 bg-white'>
      <ul className='flex justify-around items-center w-full'>
        {
          bottombarLinks.map((link, index)=>{
            return(
              <li key={index} className='my-1'>
                <NavLink to={link.route}
                  className={({isActive})=>isActive ? "" :"opacity-60 hover:opacity-100"}>
                  <img src={link.imgURL} alt={link.label} 
                    className='w-6 h-6'/>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default BottomBar