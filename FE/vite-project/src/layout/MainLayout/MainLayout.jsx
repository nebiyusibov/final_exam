import React from 'react'
import MainNavbar from './MainNavbar'
import { Outlet } from 'react-router-dom'
import MainFooter from './MainFooter'

function MainLayout() {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </div>
  )
}

export default MainLayout