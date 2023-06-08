import React, { useState, useRef } from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-player">
      <video ref={videoRef} src={src} controls={false} controlsList="nodownload"></video>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default VideoPlayer;
