import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to={"/adminpanel"}>Admin Page</Link></li>
          <li><Link to={"/adminpanel/add"}>Add Page</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default AdminNavbar