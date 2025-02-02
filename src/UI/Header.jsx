import React from 'react'
import { ImMenu } from 'react-icons/im'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div className='container'>
      <div className="grid navbar-grid">
        <div className="Logo">
          <NavLink to="/">
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <nav>
          {/* main menu bar */}
          <ul className='navbar'>
          <li ><NavLink to="/">Home</NavLink></li>
            <li ><NavLink to="/about">About</NavLink></li>
            <li ><NavLink to="/contact">Contact</NavLink></li>
            <li ><NavLink to="/country">Country</NavLink></li>
          </ul>

          {/* right menu bar */}
          <ul className='ham-menu'>
          <ImMenu/>
          </ul>
        </nav>
      </div>
    </div>
    </header>
  )
}

export default Header
