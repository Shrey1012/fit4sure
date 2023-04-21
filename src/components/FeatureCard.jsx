import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({title,desc,img}) => {
  return (
    <div className='fet-card'>

        <img src={img} alt="feature" />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default FeatureCard