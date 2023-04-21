import React from 'react'
import './Features.css'
import FeatureCard from './FeatureCard'
import { FeaturesData } from '../data'

const Features = () => {
  return (
    <div>
      { FeaturesData.map((feature) => (
            <FeatureCard 
              key={feature.id}
              img={feature.img}
              title={feature.title}
              desc = {feature.data}
            />
        ))}

    </div>
  )
}

export default Features