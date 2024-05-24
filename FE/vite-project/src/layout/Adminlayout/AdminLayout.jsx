import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminFooter from './AdminFooter'

function AdminLayout() {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <Outlet></Outlet>
      <AdminFooter></AdminFooter>
    </div>
  )
}

export default AdminLayout