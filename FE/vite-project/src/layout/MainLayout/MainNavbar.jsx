import React from 'react'
import { Link } from 'react-router-dom'
import "./MainNavbar.scss"

function MainNavbar() {
  return (
    <header>
      <nav className='main_nav'>
        <div className='eatwell'>EATWELL</div>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li>ABOUT</li>
          <li>OFFER</li>
          <li>MENU</li>
          <li>NEWS</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
        <div className='basket_wishlist'>
          <Link to={"/basket"}><i class="fa-solid fa-cart-shopping"></i></Link>
          <Link to={"/wishlist"}><i class="fa-solid fa-heart"></i></Link>
        </div>
        <div className='dropdown'><i class="fa-solid fa-bars"></i></div>
      </nav>
    </header>
  )
}

export default MainNavbar