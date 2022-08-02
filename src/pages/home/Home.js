import React from 'react'
import './Home.scss'
import Lottie from 'react-lottie'
import data from './data.json'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <div className='home-page full-page'>
        <div className='text-zone'>
          <h1>
            Hi, I am <span className='text-pink'>Ayca</span>
            <br />a <span className='text-pink'>Web Developer</span> &
            <br /> UI Designer.
          </h1>
          <p>
            I create responsive web applications <br />
            from the perspective of both developers <br /> and designers.{' '}
          </p>
          <a href='#project' className='button'>
            See my projects
          </a>
        </div>
        <div className='logo'>
          <Lottie options={defaultOptions} height={400} width={600} />
        </div>
      </div>
    </>
  )
}

export default Home
