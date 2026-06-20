import React from 'react'
import NetflixLogo from '../images/Netflix_Logo_RGB.png'

const Header = () => {
  return (
    <div className='absolute top-0 left-0 z-20 w-full px-6 py-4 md:px-12'>
      <img
        src={NetflixLogo}
        alt="Netflix Logo"
        className='w-28 md:w-40'
      />
    </div>
  )
}

export default Header