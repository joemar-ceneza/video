import React, { useState, useRef } from "react";
import video from "../video/video.mp4";

export default function VideoPlayer() {
  // State for managing video playback
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Ref for accessing the video element
  const videoRef = useRef(null);

  // Function to toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  // Function to handle time update
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  return (
    <main className="max-w-full w-screen mx-auto flex flex-col">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-2"
        controls
        loop
        ref={videoRef}
        src={video}
        onTimeUpdate={handleTimeUpdate}></video>
      {/* <div>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <span>Current Time: {Math.round(currentTime)}</span>
      </div> */}
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-white font-bold text-6xl z-10">Video Project</h1>
      </div>
    </main>
  );
}
