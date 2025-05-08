import React from 'react'
import TopBar from "../components/shared/TopBar"
import LeftSideBar from "../components/shared/LeftSideBar"
import { Outlet } from 'react-router-dom'
import BottomBar from '../components/shared/BottomBar'

const RootLayout = () => {
  return (
    <div className='sm:flex w-full'>
      <TopBar/>
      <LeftSideBar/>

      <section className='flex flex-1 h-full'>
        <Outlet/>
      </section>

      <BottomBar/>
    </div>
  )
}

export default RootLayout
