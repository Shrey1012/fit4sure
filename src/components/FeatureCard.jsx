import React from 'react'

const FeatureCard = ({title,desc,img}) => {
  return (
    <div className='card'>
        <img src={img} alt="feature" />
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default FeatureCard