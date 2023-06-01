import React from 'react';
import "./UserSettings.css";
import { useNavigate } from "react-router-dom";

const UserSettings = () => {
  return (
    <div className='Settings-main'>
      <div className='Settings-nav'>
        <ul>
          <h3 className='Settings-nav-title'>Settings</h3>
          <li>Personal Details</li>
          <li>Body specifications</li>
          <li>Your Diet plans</li>
          <li>Passwords</li>
          <li>Billing & Invoices</li>
        </ul>
      </div>
      <div className='Settings-body'>

      </div>
    
    </div>
  )
}

export default UserSettings
