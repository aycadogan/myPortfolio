import React from 'react'
import './Layout.scss'
import NavBar from '../navbar/NavBar'
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <div className='page'>
        <Outlet />
      </div>
    </div>
    
  )
}

export default Layout