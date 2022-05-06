import React, { useEffect, useState } from 'react'
import './About.scss'
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () => {
  
  
  return (
   
    <div className='full-page about-page' id="about">
      <div className='text-zone'>
          <h2 className='padding-bottom'>
            About Me
          </h2>
          <h4 className='text-pink'>Who am I</h4>
          <p className='para'>
            Hi!I am Ayca Dogan. I'm currently learning web development in CICC. Also, I obtained a master degree in Digital Solutions Development from Barcelona Technology School. This leads me to create <span className='dancing-script'>engaging</span> and <span className="dancing-script">user friendly</span> web experiences. 
          </p>
          <h4 className='text-pink'>Skills & Tools</h4>
          <p>Languages: JavaScript, HTML, CSS</p> 
          <p>Frameworks: React, NodeJS, Express, Bootstrap</p>
          <p>Databases&Tools: MongoDB, MySQL, Firebase, UXPin, Postman, Git</p>
        </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#43853D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
    </div>
   

  )
}

export default About