import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const AuthLayout = () => {

  const {userLogged}=useAppContext()

  return (
    <>
      {
        userLogged ? <Navigate to={"/"}/> : <Outlet/>
      }
    </>
  )
}

export default AuthLayout
