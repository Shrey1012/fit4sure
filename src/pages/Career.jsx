import React from 'react';
import './Career.css';
import { Careersdata } from '../data'
import { CareerCard } from '../components'

const Career = () => {
  return (
    <div className='Career-main'>
      <div className='Career-title'>Available career options</div>
      <div className='All-Careers'>
      {
        Careersdata.map((Career_options) => (

          <CareerCard 
            key={Career_options.id}
            Job_title={Career_options.Job_title}
            Qualification={Career_options.Qualification}
            Experience={Career_options.Experience}
            Location={Career_options.Location}
            Type={Career_options.Type}
          />
        ))
      }

      </div>

    </div>
  )
}

export default Career