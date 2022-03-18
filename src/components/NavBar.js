import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Projects from '../pages/projects/Projects'

import logo from '../assets/logo.png'
import './NavBar.css'


const NavBar = () => {
  return (
    <nav className='site-nav grid'>
        <Link to='/'>
          <h1>AYCA DOGAN</h1>
        </Link>
        <ul>
          {/* <li><Link to={<Projects />}/>Projects</li> */}
          <NavLink>
            <li></li>
          </NavLink>
          <li><NavLink to='/about'/>About</li>
          <li><NavLink to='/connect'/>Connect</li>
        </ul>
    </nav>

  )
}

export default NavBar