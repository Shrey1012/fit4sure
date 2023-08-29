import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserHome.css";
import { UserToolsData } from "../../data";
import { useNavigate } from "react-router-dom";
import ToolCard from "./ToolCard";
import VideoPlayer from "../../components/VideoPlayer";
import fitness_ex from "../../assets/fitness_ex.jpg";
import close from "../../assets/close.svg";
import SurveyPages from "./SurveyPages";

const UserHome = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
    document.body.classList.add("no-scroll");
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    document.body.classList.remove("no-scroll");
  };

  const [videoData, setVideoData] = useState([]);
  const navigate = useNavigate();

  const userId = JSON.parse(localStorage.getItem("profile")).result._id;

  const API = axios.create({ baseURL: "http://localhost:3001" });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }

    return req;
  });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await API.get("/app/shortvideo/all");
      const videosData = response.data.shortVideos;
      setVideoData(videosData);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleSurveySubmit = () => {
    handlePopupClose();
  };

  return (
    <>
      <div className="User-home-main">
        <div className="User-home-top"></div>
        <div className="User-home-bottom">
          <div className="User-home-left">
            <div className="User-home-plans">
              <div className="Uhp-left">
                <img src={fitness_ex} alt="plans" />
              </div>
              <div className="Uhp-right">
                <p>
                  Explore our personalized plans for indiviuals to meet your
                  fitness goals
                </p>
                <button onClick={() => navigate("/showplans")}>
                  View plans
                </button>
              </div>
            </div>
            <div className="User-home-tools">
              <div className="User-tools-title">
                <h2>Fitness Trackers</h2>
                <p onClick={() => navigate("/trackers/bmi")}>View all</p>
              </div>
              <div className="User-tool-cards">
                {UserToolsData.map((Tools) => (
                  <ToolCard
                    key={Tools.id}
                    Tool_name={Tools.Tool_name}
                    img={Tools.img}
                    link={Tools.link}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="User-home-right">
            <div className="User-home-vid">
              <button onClick={() => navigate("/shortvideos")}>
                View more
              </button>
              <div className="grid-column">
                <div className="vid-card">
                  {videoData.map((video) => (
                    <div className="user-home-short-video" key={video._id}>
                      {/* <h5>{video.title}</h5> */}
                      <VideoPlayer src={video.video} />
                    </div>
                  ))}
                  {/* <div className="card-dost">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div> */}
                  <div className="bottomccard-text">
                    <div>
                      <p>Exercise latest video</p>
                      <span>3.5 K views</span>
                    </div>

                    <div className="heart-icon">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99967 12.2338L6.03301 11.3538C2.59967 8.24049 0.333008 6.18049 0.333008 3.66716C0.333008 1.60716 1.94634 0.000488281 3.99967 0.000488281C5.15967 0.000488281 6.27301 0.540488 6.99967 1.38715C7.72634 0.540488 8.83967 0.000488281 9.99967 0.000488281C12.053 0.000488281 13.6663 1.60716 13.6663 3.66716C13.6663 6.18049 11.3997 8.24049 7.96634 11.3538L6.99967 12.2338Z" fill="#E21414"/></svg>
                    </div>
                  </div>
                </div>

                <div className="vid-card">
                  {/* <div className="card-dost">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div> */}
                  <div className="bottomccard-text">
                    <div>
                      <p>Exercise latest video</p>
                      <span>3.5 K views</span>
                    </div>

                    <div className="heart-icon">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99967 12.2338L6.03301 11.3538C2.59967 8.24049 0.333008 6.18049 0.333008 3.66716C0.333008 1.60716 1.94634 0.000488281 3.99967 0.000488281C5.15967 0.000488281 6.27301 0.540488 6.99967 1.38715C7.72634 0.540488 8.83967 0.000488281 9.99967 0.000488281C12.053 0.000488281 13.6663 1.60716 13.6663 3.66716C13.6663 6.18049 11.3997 8.24049 7.96634 11.3538L6.99967 12.2338Z" fill="#E21414"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="User-home-test">
              <div className="test-left">
                <h3>Few easy steps, and know your body!</h3>
                <p>Take a test and have detailed analysis</p>
              </div>
              <button onClick={handleButtonClick}>Take test</button>
            </div>
            <div className="User-home-coaches">
              <div className="test-left">
                <h3>
                  7K users every week are improving their life under proper
                  coaching and guidence of our expert trainers.
                </h3>
                <p>
                  We have a huge community of trainers, find your best match now
                </p>
              </div>
              <button onClick={() => navigate("/coaches")}>
                Explore trainers
              </button>
            </div>
            <div className="User-home-other"></div>
            <div></div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="home-popup">
          <div className="Homme-popup-content">
            <div className="Que-top">
              <p>
                'How accurately and honestly you will answer, it will be easier
                for the team to create your personalized planner.'
              </p>
              <div>
                <button onClick={handlePopupClose} className="close-btn" style={{"boxShadow": "none"}}>
                  <img src={close} alt="" />
                </button>
              </div>
            </div>
            <div className="Que-mid">
              <SurveyPages  handleSurveySubmit={handleSurveySubmit}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserHome;
