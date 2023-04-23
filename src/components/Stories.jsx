import React from 'react'
import './Stories.css';
import { Storiesdata } from '../data'
import StoriesCard from './StoriesCard'

const Stories = () => {
  return (
    <div className='stories-main'>
      <h2>Success stories of Fit4sure users</h2>
      <p>Lorem ipsum dolor sit amet. Vel incidunt dolore qui libero quia ad veniam eaque. Eos quia voluptas qui reprehenderit eius et dolores ullam 33 aspernatur enim ut dolorem saepe.</p>
      <div className='all-stories'>
      {
        Storiesdata.map((Storiesdata) => (

          <StoriesCard 
            key={Storiesdata.id}
            Image={Storiesdata.image}
            person_name={Storiesdata.person_name}
            person_age={Storiesdata.person_age}
            person_occ={Storiesdata.person_occ}
            weight_loss={Storiesdata.weight_loss}
            story_loss={Storiesdata.story_loss}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Stories