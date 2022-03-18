import React from 'react'
import Projects from '../projects/Projects'
import About from '../about/About'
import Connect from '../connect/Connect'
import './Home.css'


const Home = () => {
  return (
    <div>Home
      <Projects />
      <About />
      <Connect />
    </div>
    
  )
}

export default Home