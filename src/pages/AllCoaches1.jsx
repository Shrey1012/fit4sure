import React from 'react'
import './AllCoaches1.css';
import { AllCoach1Data } from '../data'
import { CoachCard } from '../components'

const AllCoaches1 = () => {
  return (
    <div className='all-coaches'>
      
      {
        AllCoach1Data.map((Coach1_options) => (

          <CoachCard 
            key={Coach1_options.id}
            img={Coach1_options.img}
            Coach_name={Coach1_options.Coach_name}
            Coach_star={Coach1_options.Coach_star}
            Coach_trained={Coach1_options.Coach_trained}
          />
        ))
      }

    </div>
  )
}

export default AllCoaches1;