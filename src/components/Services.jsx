import React from 'react'
import './Services.css'
import { servicesData } from '../data'
import PlanCard from './PlanCard'
import phone from '../assets/phone.svg';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const contactPhoneNumber = '9313100852';

  const handleDial = () => {
    window.location.href = `tel:${contactPhoneNumber}`;
  }
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
        <button className='view-all' onClick={()=>{navigate('/plans')}}>View all plans & services</button>
        <button className='Talk-expert' onClick={handleDial}>
          <img src={phone} alt="call" />
          <p>Talk to expert</p>
        </button>
      </div>
    </div>
  )
}

export default Services