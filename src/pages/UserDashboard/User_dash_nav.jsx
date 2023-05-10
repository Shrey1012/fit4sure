import React,{useState} from 'react'
import './User_dash_nav.css'
import home_icon from '../../assets/home_icon.svg';
import explore from '../../assets/explore.svg';
import Community from '../../assets/Community.svg';
import star_circle from '../../assets/star_circle.svg';
import Tools from '../../assets/Tools.svg';
import fflogo_white from '../../assets/fflogo_white.svg';
import { NavLink } from 'react-router-dom';

const User_dash_nav = () => {
  return (
    <div className='user-dash-navbar'>
        <nav className='user-nav'>
        <img className='nav-logo' src={fflogo_white} alt="Fit4sure logo" />
        
        <NavLink to='/UserHome' className='Userdash-nav-link' activeClassName='active'>
            <img src={home_icon} alt="home" />
        </NavLink>
        <NavLink to='/UserCommunity' className='Userdash-nav-link' activeClassName='active'>
          <img src={Community} alt="Community" />
        </NavLink>
        {/* <img src={home_icon} alt="home" /> */}
        
        <img src={explore} alt="explore" />
        <img src={Community} alt="Community" />
        <img src={Tools} alt="Tools" />
        
    </nav>
    </div>

  )
}

export default User_dash_nav