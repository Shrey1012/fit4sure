import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({title,desc,img,index}) => {
  
  return (
    <div className="fet-card">
        <figure>
          <img src={img} alt="feature" />
        </figure>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default FeatureCard