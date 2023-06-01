import React from 'react';
import "./UserSettingsNav.css";
import { NavLink } from 'react-router-dom';

const UserSettingsNav = () => {
  return (
    <div className='Settings-main'>
      <div className='Settings-nav'>
        <ul>
          <h3 className='Settings-nav-title'>Settings</h3>
          <NavLink to='/usersettings/personal-details' className={`settings-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
            <li>Personal Details</li>
          </NavLink>
          <NavLink to='/usersettings/body-specifications' className={`settings-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
          <li>Body specifications</li>
          </NavLink>
          <NavLink to='/usersettings/diet-plans' className={`settings-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
          <li>Your Diet plans</li>
          </NavLink>
          <NavLink to='/usersettings/passwords' className={`settings-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
          <li>Passwords</li>
          </NavLink>
          <NavLink to='/usersettings/billing-invoices' className={`settings-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
          <li>Billing & Invoices</li>
          </NavLink>
        </ul>
      </div>
      <div className='Settings-body'>

      </div>
    
    </div>
  )
}

export default UserSettingsNav;
