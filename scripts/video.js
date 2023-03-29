import React, { useRef, useEffect } from "react";

function Video({ url, playbackRate, onPlaybackRateChange }) {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  const handlePlaybackRateChange = (e) => {
    onPlaybackRateChange(parseFloat(e.target.value));
  };

  return (
    <div>
      <video ref={videoRef} src={url} controls></video>
      <div>
        <label htmlFor="playbackRate">Playback Rate:</label>
        <input
          type="range"
          id="playbackRate"
          min="0.5"
          max="2"
          step="0.1"
          value={playbackRate}
          onChange={handlePlaybackRateChange}
        />
        <span>{playbackRate}</span>
      </div>
    </div>
  );
}

export default Video;
