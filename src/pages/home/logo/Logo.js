import './Logo.scss'
import Lottie from 'react-lottie'
import data from './data.json'

import React from 'react'

const Logo = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: data,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div className='logo-container'>
        <Lottie options={defaultOptions} height={600} width={600} />
    </div>
  )
}

export default Logo

