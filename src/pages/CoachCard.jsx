import React from 'react';
import './CoachCard.css';
import star_rating from '../assets/star_rating.svg';
import call_icon from '../assets/call_icon.svg';
import message_icon from '../assets/message_icon.svg';


const CoachCard = ({img, Coach_name, Coach_star, Coach_trained}) => {
  return (
    <div className='Coach-card'>
        <img src={img} alt="coach photo" />
        <div className='coach-name'>{Coach_name}</div>
        <div className='coches-trained'>{Coach_trained}</div>
        <div className='coach-star'>
          <div>{Coach_star}</div>
          <img src={star_rating} alt="star" />
        </div>
        <div className='coach-buttons'>
            <button className='message-btn'><img src={message_icon} alt="Message" /></button>
            <button className='view-coach-btn'>Details</button>
        </div>
    </div>
  )
}

export default CoachCard