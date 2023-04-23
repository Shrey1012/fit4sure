import React from 'react';
import './StoriesCard.css';

const StoriesCard = ({Image, person_name, person_age, person_occ, weight_loss, story_loss}) => {
  return (
    <div className='stories-card'>
        <div className='story-card-top'><img src={Image}></img></div>
        <div className='story-card-bottom'>
            <span>{person_name} ({person_age},{person_occ})</span>
            <div className='loss-line-txt'>{weight_loss}</div>
            <div className='story-line'></div>
            <div className='story-card-para'>{story_loss}</div>
        </div>
    </div>
  )
}

export default StoriesCard