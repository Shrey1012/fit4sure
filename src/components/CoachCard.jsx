import React, { useState } from "react";
import "./CoachCard.css";
import message_icon from "../assets/message_icon.svg";
import plus from "../assets/plus.svg";
import close from "../assets/close.svg";
import Rating from "react-rating-stars-component";

const CoachCard = ({
  image,
  name,
  rating,
  people_trained,
  description,
  experties,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    document.body.classList.add("no-scroll");
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    document.body.classList.remove("no-scroll");
  };

  const expertiseArray = experties.split(",").map((item) => item.trim());

  const descriptionSentences = description.split(".");

  return (
    <>
      <div className="Coach-card">
        <img src={image} alt="coach" />
        <div className="coach-name">{name}</div>
        <div className="coches-trained">{people_trained} People trained</div>
        <div className="coach-star">
          <Rating
            count={5} // Number of stars
            value={rating} // The rating value received from the backend (e.g., 3.5)
            edit={false} // Disable user interaction if needed
            size={24} // Size of the stars
            color="#8a8984" // Color of the active stars
            activeColor="#ecd910" // Color of the hovered stars (optional)
            isHalf={true} // Enable half-star ratings
            half={true}
          />
        </div>
        <div className="coach-buttons">
          <button className="message-btn">
            <img src={message_icon} alt="Message" />
          </button>
          <button className="view-coach-btn" onClick={handleButtonClick}>
            Details
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="Coach-popup">
          <div className="Popup-content">
            <div className="Popup-top">
              <div className="Popup-top-left">
                <img src={image} alt="coach" />
              </div>
              <div className="Popup-top-right">
                <div className="P-coach-name">{name}</div>
                <div className="coches-trained">
                  {people_trained} People trained
                </div>
                <div className="P-coach-star">
                  <Rating
                    count={5} // Number of stars
                    value={rating} // The rating value received from the backend
                    edit={false} // Disable user interaction if needed
                    size={24} // Size of the stars
                    color="#8a8984" // Color of the unfilled stars
                    activeColor="#ecd910" // Color of the filled stars
                    isHalf={true} // Enable half-star ratings
                    half={true}
                  />
                </div>
                <div className="Skills">
                  {expertiseArray.slice(0, 4).map((expertise, index) => (
                    <div className="Skill-box" key={index}>
                      {expertise}
                    </div>
                  ))}
                  <div className="Skill-box">
                    <img src={plus} alt="" />
                    More
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handlePopupClose}
                  className="close-btn"
                  style={{ boxShadow: "none" }}
                >
                  <img src={close} alt="" />
                </button>
              </div>
            </div>
            <div className="Popup-bottom">
              <ul>
                {descriptionSentences.map((sentence, index) => (
                  <li key={index}>{sentence.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoachCard;
