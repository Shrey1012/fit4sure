import React from 'react';
import './CareerCard.css';

const CareerCard = ({Job_title, Qualification, Experience, Location, Type, Description}) => {
  return (
    <div className='Career-card'>
        <div className='card-title'>
            {Job_title} 
        </div> 
        <div className='career-card-mid'>
        <div className='card-field'>
          <div className='field-title'>Qualification</div>
          <div className='field-value'>{Qualification}</div>
        </div>
        <div className='card-field'>
          <div className='field-title'>Experience</div>
          <div className='field-value'>{Experience}</div>
        </div>
        <div className='card-field'>
          <div className='field-title'>Location</div>
          <div className='field-value'>{Location}</div>
        </div>
        <div className='card-field'>
          <div className='field-title'>Type</div>
          <div className='field-value'>{Type}</div>
        </div>
        </div>
        <div className='about-job'>About this opportunity</div>
        <p>{Description}</p>
        <button className='apply-now'>Apply now</button>
    </div>
  )
}

export default CareerCard