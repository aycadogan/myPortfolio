import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'


const NavBar = () => {
  return (
    <nav className='site-nav grid'>
        <Link to='/'>
          <h1>Ayca Dogan</h1>
        </Link>
        <ul>
          <NavLink to='/projects'><li>Projects</li></NavLink>
          <NavLink to='/about'><li>About</li> </NavLink>
          <NavLink to='/connect'><li>Connect</li></NavLink>
        </ul>
    </nav>

  )
}

export default NavBar