import React, { useState } from "react";
import ReactDOM from "react-dom";
import Video from "./components/Video";

function App() {
  const [playbackRate, setPlaybackRate] = useState(1);

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
  };

  return (
    <div className="container">
      <h1>Video Player</h1>
      <Video
        url="https://www.w3schools.com/html/mov_bbb.mp4"
        playbackRate={playbackRate}
        onPlaybackRateChange={handlePlaybackRateChange}
      />
      <div>
        <label htmlFor="playbackRate">Playback Rate:</label>
        <input
          type="range"
          id="playbackRate"
          min="0.5"
          max="2"
          step="0.1"
          value={playbackRate}
          onChange={(e) => handlePlaybackRateChange(e.target.value)}
        />
        <span>{playbackRate}</span>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
