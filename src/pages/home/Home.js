import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import Logo from './logo/Logo'

const Home = () => {


  return (
    <div className="container home-page">

        <div className="text-zone">
            <h1>
              Hi, I am <span className='text-pink'>Ayca</span>
              <br />
              a <span className='text-pink'>web developer</span>  & 
              <br /> UI designer.
            </h1>
            <h3>I create responsive web applications using mobile first approach from the perspective of both developers and designers. </h3>
            <p></p>
            <Link to='/projects' className='button'>See my projects</Link>
            <Logo />
        </div>
    </div>
  )
}

export default Home