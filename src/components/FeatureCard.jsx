import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({title,desc,img,index}) => {
  
  return (
    <div className="fet-card">
 
        <img src={img} alt="feature" />
        <h3>{title}</h3>
        <h2>{index}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default FeatureCard