import React,{useState} from 'react';
import './CoachCard.css';
import star_rating from '../assets/star_rating.svg';
import call_icon from '../assets/call_icon.svg';
import message_icon from '../assets/message_icon.svg';
import plus from '../assets/plus.svg';
import close from '../assets/close.svg';


const CoachCard = ({img, Coach_name, Coach_star, Coach_trained}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    document.body.classList.add("no-scroll");
  };
 
  const handlePopupClose = () => {
    setShowPopup(false);
    document.body.classList.remove("no-scroll")
  };
  return (
    <>
    <div className='Coach-card'>
        <img src={img} alt="coach" />
        <div className='coach-name'>{Coach_name}</div>
        <div className='coches-trained'>{Coach_trained}</div>
        <div className='coach-star'>
          <div>{Coach_star}</div>
          <img src={star_rating} alt="star" />
        </div>
        <div className='coach-buttons'>
            <button className='message-btn'><img src={message_icon} alt="Message" /></button>
            <button className='view-coach-btn' onClick={handleButtonClick}>Details</button>
        </div>
    </div>

    {showPopup && (
      <div className="Coach-popup">
        <div className='Popup-content'>
          <div className='Popup-top'>
            <div className='Popup-top-left'>
              <img src={img} alt="coach" />
            </div>
            <div className='Popup-top-right'>
              <div className='P-coach-name'>{Coach_name}</div>
              <div className='coches-trained'>{Coach_trained}</div>
              <div className='P-coach-star'>
                <div>{Coach_star}</div>
                <img src={star_rating} alt="star" /> 
              </div>
              <div className='Skills'>
                <div className='Skill-box'>Yoga Expert</div>
                <div className='Skill-box'>Heart patients</div>
                <div className='Skill-box'>Gym enthuciasts</div>
                <div className='Skill-box'>Senior citizens</div>
                <div className='Skill-box'><img src={plus} alt="" />More</div>
              </div>
            </div>
            <div><button onClick={handlePopupClose} className='close-btn'><img src={close} alt="" /></button></div>
          </div>
          <div className='Popup-bottom'>
            <ul>
              <li>We make you fit in a sustainable manner by using the science of fitness and providing constant support. Our certified and top-rated professional experts provide long-lasting</li>
              <li>Our professionals understand that every person has a different metabolism.  </li>
              <li>We make you fit in a sustainable manner by using the science of fitness and providing constant support. Our certified and top-rated professional experts provide long-lasting</li>
            </ul>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default CoachCard