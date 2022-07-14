import React from 'react'
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
    <div className='full-page about-page' id='about'>
      <div className='text-zone'>
        <h2 className='padding-bottom'>About Me</h2>
        <h4 className='text-pink'>Who I am</h4>
        <p className='para'>
          Hi! I am Ayca Dogan. I'm a Web Developer located in Vancouver.
          Specializes in React.js and Javascript. Having a master's degree in
          Digital Solutions Development from Barcelona Technology School
          involved me in creating <span className='text-pink'>engaging</span>{' '}
          and <span className='text-pink'>user friendly</span> web experiences.
        </p>
        <h4 className='text-pink'>Skills & Tools</h4>
        <p>
          <strong>Languages:</strong> JavaScript, HTML, CSS
        </p>
        <p>
          <strong>Frameworks:</strong> React, NodeJS, Express, Bootstrap
        </p>
        <p>
          <strong>Databases&Tools:</strong> MongoDB, MySQL, Firebase, UXPin,
          Postman, Git, Figma
        </p>
        <a
          href='https://www.linkedin.com/in/aycadogan/'
          className='button'
          target='_blank'
          rel='noreferrer'
        >
          Click here to see my resume
        </a>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faNode} color='#43853D' />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
