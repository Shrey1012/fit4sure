import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({title,desc,img,i}) => {
  return (
    <div className='fet-card'>

        <img src={img} alt="feature" />
        <span>{i}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default FeatureCard