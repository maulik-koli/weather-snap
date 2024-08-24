import React from 'react'

import Cloack from './Cloack';
import headerLogo from '../assets/header-logo.jpg'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={headerLogo} alt="header logo" />
        <h1>Weather Snap</h1>
      </div>
      <Cloack /> 
    </header>
  )
}

export default Header;
