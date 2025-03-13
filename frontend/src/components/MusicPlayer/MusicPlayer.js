import React, { useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../../context/PlayerContext.js';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const { currentTrack, isPlaying, togglePlayPause, nextTrack, prevTrack } = useContext(PlayerContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 1000);
    } else if (!isPlaying && progress !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  return (
    <div className="music-player">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <div className="album-thumbnail me-3">
                <img src={currentTrack.coverUrl} alt="Album cover" className="img-fluid rounded" />
              </div>
              <div className="track-info">
                <h6 className="mb-0">{currentTrack.title}</h6>
                <small className="text-muted">{currentTrack.artist}</small>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="player-controls text-center">
              <div className="d-flex justify-content-center align-items-center mb-2">
                <button className="btn btn-link text-muted" onClick={prevTrack}>
                  <i className="bi bi-skip-backward"></i>
                </button>
                <button className="btn btn-play-pause" onClick={togglePlayPause}>
                  <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                </button>
                <button className="btn btn-link text-muted" onClick={nextTrack}>
                  <i className="bi bi-skip-forward"></i>
                </button>
              </div>

              <div className="progress-container d-flex align-items-center">
                <span className="time-elapsed me-2">{Math.floor(progress / 60)}:{('0' + (progress % 60)).slice(-2)}</span>
                <div className="progress flex-grow-1">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(progress / currentTrack.duration) * 100}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax={currentTrack.duration}
                  ></div>
                </div>
                <span className="time-total ms-2">{Math.floor(currentTrack.duration / 60)}:{('0' + (currentTrack.duration % 60)).slice(-2)}</span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="volume-controls d-flex align-items-center justify-content-end">
              <i className="bi bi-volume-up me-2"></i>
              <div className="progress volume-slider">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '70%' }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

