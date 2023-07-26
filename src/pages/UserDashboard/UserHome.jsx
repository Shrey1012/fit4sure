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
              <div className="vid-card">
                {videoData.map((video) => (
                  <div className="user-home-short-video" key={video._id}>
                    <h5>{video.title}</h5>
                    <VideoPlayer src={video.video} />
                  </div>
                ))}
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
                <button onClick={handlePopupClose} className="close-btn">
                  <img src={close} alt="" />
                </button>
              </div>
            </div>
            <div className="Que-mid">
              <SurveyPages />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserHome;
