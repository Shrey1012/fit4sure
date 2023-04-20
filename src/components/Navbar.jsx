import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import fflogo from '../assets/fflogo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
    <nav className='nav'>
        <div className='left_nav'><img src={fflogo} alt="Fit4sure logo" /></div>
        <ul>
            <li>
              <a href='/'>Home</a>  
            </li>
            <li>
              <a href='/aboutus'>About Us</a>  
            </li>
            <li>
              <a href='/plans'>Plans</a>  
            </li>
            <li>
              <a href='/career'>Career</a>  
            </li>
            <li>
              <a href='/contactus'>Contact us</a>  
            </li>
        </ul>
        <button className='btn'>Sign in</button>
    </nav>
        <hr className='line'/>
        </div>

  )
}

export default Navbar