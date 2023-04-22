import React from 'react'
import './Features.css'
import FeatureCard from './FeatureCard'
import { FeaturesData } from '../data'
import arrow_left from '../assets/arrow_left.svg';
import arrow_right from '../assets/arrow_right.svg';


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
        <div className='feature-cards'>
      { FeaturesData.map((feature) => (
            <FeatureCard 
              key={feature.id}
              img={feature.img}
              title={feature.title}
              desc = {feature.data}
            />
        ))}
        </div>
        <div className='fet-arrows'>
          <img src={arrow_left} alt="prev" />
          <img src={arrow_right} alt="next" />
        </div>
      </div>

    </div>
  );
};

export default Features;
