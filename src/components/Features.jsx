import React from 'react'
import './Features.css'
import FeatureCard from './FeatureCard'
import { FeaturesData } from '../data'

const Features = () => {
  
  return (
    <div className='features-main'>
      <div className="features-top">
        <div className="top-text">
          <span>Personalized & Psychological approach For Sustainable</span>
          <span className="high-text">Weight-loss</span>
        </div>
      </div>
      <div className="features-bottom">
        <div className='feature-card1'>
        </div>
      </div>
    
      { FeaturesData.map((feature) => (
            <FeatureCard 
              key={feature.id}
              img={feature.img}
              title={feature.title}
              desc = {feature.data}
            />
        ))}

    </div>
  );
};

export default Features;
