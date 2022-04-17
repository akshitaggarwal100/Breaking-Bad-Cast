import React from 'react';
import '../App.css';
import logo from '../img/logo.png';

function Header() {
  return (
    <header className='center'>
        <img src={logo} alt="logo" />
    </header>
  )
}

export default Header