import React from 'react'
import './GetCoach.css'
import Gym_fit from "../assets/Gym_fit.jpg"
import Family_fit from "../assets/Family_fit.jpg"
import { useNavigate } from 'react-router-dom'

const GetCoach = () => {
  const navigate = useNavigate()
  return (
    <div className='Coach-main'>
      <div className='Coach-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
    <div className='Coach-bottom'>
      <div className='Coach-left'>
        <img classname='coach-imgg' src={Gym_fit} alt="Stay fit" />
        <p className='coach-para'>Finding a coach for your strict diet planning and Gym schedule, Our coaches are here</p>
        <button className='coach-button' onClick={()=> navigate('/allcoaches1')}>View coaches</button>
      </div>
      <div className='Coach-right'>
        <img className='coach-imgg' src={Family_fit} alt="Stay healthy" />
        <p className='coach-para'>Finding a coach for fitness and health of your family, Our coaches are here</p>
        <button className='coach-button' onClick={()=> navigate('/allcoaches2')}>View coaches</button>
      </div>
    </div>
    </div>
  )
}

export default GetCoach