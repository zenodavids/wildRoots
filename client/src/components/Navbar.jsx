import React from 'react'
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <nav className='content-center'>
      <div className='w-full content-center'>
        <img
          src={logo}
          alt='logo'
          className='w-32 cursor-pointer mx-auto display-block'
        />
      </div>
    </nav>
  )
}

export default Navbar
