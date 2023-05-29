import React from 'react';
import './Plans.css'
import arrownxt from '../assets/arrownxt.svg';

const Plans = () => {
  return (
    <div className='Plans-main'>
      <div className='plans-txt1'>Select a plan</div>
      <div className='plans-txt2'>We make you fit in a sustainable manner by using the science of fitness and providing constant support. Our certified and top-rated professional experts provide long-lasting support, making personalized schedules at times convenient for you.</div>
      <div className='plans-mid'>
        <div>
          <h2>1 Year</h2>
          <p>INR 1299 <span>/month</span></p>
        </div>
        <div>
          <h2>6 Months</h2>
          <p>INR 1749 <span>/month</span></p>
        </div>
        <div>
          <h2>3 Months</h2>
          <p>INR 1999 <span>/month</span></p>
        </div>
        <div>
          <h2>Monthly</h2>
          <p>INR 2449 <span>/month</span></p>
        </div>
      </div>
      <div className='plans-bottom'>
        <h2>1 Year plan</h2>
        <ul>
          <li>We make you fit in a sustainable manner by using the science of</li>
          <li>We make you fit in a sustainable manner by using the science of</li>
          <li>We make you fit science of in a sustainable manner by using the </li>
          <li>We make you fit in a sustainable manner by using the science of</li>
          <li>We make you fit in a sustainable the science of manner by using the science of</li>
          <li>We make you fit in a sustainable manner by using </li>
        </ul>
        <button>Go with this plans
          <img src={arrownxt} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Plans