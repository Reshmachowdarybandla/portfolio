import React from 'react'
import logo from '../../src/logo.png';
import {Link} from 'react-scroll';
import './navbar.css';

function Navbar() {
  return (
    <nav id='nav'className='navbar'>
        <img src = {logo} alt="logo" width = '100px' height = '100px'/>
        <div>
           <Link activeClass='active' to='Profile' spy={true} smooth= {true} offset={-100} duration={500} className='menu'>Home</Link>
           <Link activeClass='active' to='About' spy={true} smooth= {true} offset={-100} duration={500} className='menu'>About me</Link>
           <Link activeClass='active' to='Skills' spy={true} smooth= {true} offset={-100} duration={500} className='menu'>Skills</Link>
           <Link activeClass='active' to='Contact' spy={true} smooth= {true} offset={-100} duration={500} className='menu'>Contact me</Link>
        </div>
    </nav>
      
  )
}

export default Navbar;

