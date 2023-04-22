import React from 'react'
import './Services.css'
import { servicesData } from '../data'
import PlanCard from './PlanCard'
import phone from '../assets/phone.svg';

const Services = () => {
  return (
    <div className='services-main'>
      <div className='ser-txt1'>Plans & Services</div>
      <div className='ser-txt2'>We provide the following plans and services by the healthcare industry experts</div>
      <div className='all-plans'>
      {
        servicesData.map((service) => (

          <PlanCard
            key={service.id}
            image={service.img}
            title={service.title}
          />
        ))
      }
      </div>
      <div className='ser-buttons'>
        <button className='view-all'>View all plans & services</button>
        <button className='Talk-expert'>
          <img src={phone} alt="call" />
          <p>Talk to expert</p>
        </button>
      </div>
    </div>
  )
}

export default Services