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
    <div className='container about-page'>
      <div className='text-zone'>
          <h1>
            {/* <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15} /> */}
          </h1>
          <p>Who am I</p>
          <p>
            Hi!I am Ayca Dogan. I'm a web developer & UI designer with a technical background. I create responsive web applications using mobile first approach from the perspective of both engineers and designers.
          </p>
          <p>Skills & Tools</p>
          <p>Languages: JavaScript, HTML, CSS</p> 
          <p>Frameworks: React, NodeJS, Express</p>
          <p>Databases&Tools: MongoDB, MySQL, Firebase, Postman, Git</p>

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
    </div>
  )
}

export default About