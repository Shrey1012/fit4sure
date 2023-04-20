import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <nav className='nav'>
        <a href='/'>Fit4Sure</a>
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