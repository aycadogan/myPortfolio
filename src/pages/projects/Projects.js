import React from 'react'
import './Projects.scss'
import homeshop from '../../assets/videos/homeshop.mp4'
import { Link } from 'react-router-dom'
import beachblog from '../../assets/videos/beachblog.mp4'
import moderncooking from '../../assets/videos/moderncooking.mp4'

// 
const Projects = () => {
  return (
    <div className='full-page' id="project">
      <h2>My Projects</h2>
      <div className="projects grid">
        <div className="videos">
        <video autoPlay loop muted>
          <source src={homeshop} type='video/mp4'/>
        </video>
        </div>
        <div className="para">
        <p>An e-commerce application with MERN Stack.Admin user is admin@test.com and Password:123</p>
        <p><strong>Technologies:</strong> JS, React, NodeJS, React Bootstrap, MongoDB, Cloudinary. </p>
        </div>
        <div className="links">
        <a href='https://homeshop2.herokuapp.com/' className='button' target='_blank'>Visit the site</a>
        <a href='https://github.com/aycadogan/homeshop' className='button' target='_blank'>GitHub Codes</a>
        </div>
        
      </div>
      <div className="projects grid">
        <div className="videos">
        <video autoPlay loop muted>
          <source src={beachblog} type='video/mp4'/>
      </video>
        </div>
      <div className="para">
      <p>A blog project with NodeJS backend.You can post blogs,edit blogs,delete blogs. </p>
      <p><strong>Technologies:</strong> JS, MongoDB, NodeJS, Bootstrap. </p>
      </div>
      <div className="links">
      <a href='https://beachblog.herokuapp.com/' className='button' target='_blank'>Visit the site</a>
      <a href='https://github.com/aycadogan/BeachBlog' className='button' target='_blank'>GitHub Codes</a>
      </div>
      
      </div>
      <div className="projects grid">
        <div className="video">
        <video autoPlay loop muted>
          <source src={moderncooking} type='video/mp4'/>
      </video>
        </div>
      <div className="para">
      <p>A recipe list project with Firebase backend. You can post recipes,delete recipes and search for recipes.</p>
      <p><strong>Technologies:</strong>React,CSS,Firebase</p>
      </div>
      <div className="links">
      <a href="https://modern-cooking-58359.web.app/" className='button' target='_blank'>Visit the site</a>
      <a href="https://github.com/aycadogan/ModernCooking" className='button' target='_blank'>GitHub Codes</a>
      </div>
      </div>
    </div>
  )
}

export default Projects