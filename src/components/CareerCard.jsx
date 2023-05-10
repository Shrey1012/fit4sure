import React from 'react';
import './CareerCard.css';

const CareerCard = ({Job_title, Qualification, Experience, Location, Type}) => {
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
        <p>Bachelor's/Masters Degree/Diploma in Food/ Nutrition/ Dietetics or related field Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className='apply-now'>Apply now</button>
    </div>
  )
}

export default CareerCard