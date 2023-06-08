import React,{useState,useEffect}  from 'react'
import axios from 'axios'
import './ShortVideos.css'
import VideoPlayer from '../../components/VideoPlayer'

const ShortVideos = () => {
  const [videoData, setVideoData] = useState([]);

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

  const handleLike = async (videoId) => {
    try {
      await API.post(`/app/shortvideo/${videoId}/like`);
      fetchVideos();
    } catch (error) {
      console.error("Error liking the video:", error);
    }
  };

  const handleUnlike = async (videoId) => {
    try {
      await API.post(`/app/shortvideo/${videoId}/unlike`);
      fetchVideos(); 
    } catch (error) {
      console.error("Error unliking the video:", error);
    }
  };

  return (
    <div className='short-videos-main'>
        {videoData.map((video) => (
            <div
              className="short-video"
              key={video._id}
            >
              <h5>{video.title}</h5>
              <VideoPlayer src={video.video} />
              <div className="all-video-likes">
                <p>{video.likes?.length} likes</p>
                {video.likes?.includes(userId) ? (
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleUnlike(video._id);
                    }}
                  >
                    Unlike
                  </button>
                ) : (
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleLike(video._id);
                    }}
                  >
                    Like
                  </button>
                )}
              </div>
          </div>
          ))}
    </div>
  )
}

export default ShortVideos