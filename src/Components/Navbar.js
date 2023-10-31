import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="bg-[#171C2A] py-4">
    <div class="navBar">
      <a href="index.html">
        <img src="./images/logo.png" alt="LWS" class="max-w-[140px]" />
      </a>

      <div class="flex gap-4">
        <Link to="/" class="navHome" id="lws-home"> Home </Link>
        <Link to="/cart" class="navCart" id="lws-cart">
          <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
          <span id="lws-totalCart">0</span>
        </Link>
      </div>
    </div>
  </nav>
  )
}

export default Navbar