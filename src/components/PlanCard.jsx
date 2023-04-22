import React from 'react';
import './PlanCard.css';

const PlanCard = ({image,title}) => {
  return (
    <div className='service-card'>
    <div><img src={image} alt="" /></div>
    <h1>{title}</h1>
    </div>
  )
}

export default PlanCard