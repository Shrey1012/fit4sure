import React from 'react';
import './CareerCard.css';

const CareerCard = ({Job_title, Qualification, Experience, Location, Type}) => {
  return (
    <div className='Career-card'>
        <div className='card-title'>
            {Job_title}
        </div>
        <div className=''></div>
    <h3>{Qualification}</h3>
    <h3>{Experience}</h3>
    <h3>{Location}</h3>
    <h3>{Type}</h3>
    </div>
  )
}

export default CareerCard