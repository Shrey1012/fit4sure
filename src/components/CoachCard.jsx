import React,{useState} from 'react';
import './CoachCard.css';
import star_rating from '../assets/star_rating.svg';
import call_icon from '../assets/call_icon.svg';
import message_icon from '../assets/message_icon.svg';


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
      <div className="popup">
          <div className="popup-content">
            <h2>Popup Content</h2>
            <p>This is the content of the popup.</p>
            <button onClick={handlePopupClose}>Close Popup</button>
          </div>
        </div>
      )}
    </>
  )
}

export default CoachCard