import { useState } from "react"

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="music-player">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="d-flex align-items-center">
              <div className="album-thumbnail me-3">
                <img src="../images/grey-bg.webp" alt="Album cover" className="img-fluid rounded" />
              </div>
              <div className="track-info">
                <h6 className="mb-0">On My Heart</h6>
                <small className="text-muted">Samuel Salter</small>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="player-controls text-center">
              <div className="d-flex justify-content-center align-items-center mb-2">
                <button className="btn btn-link text-muted">
                  <i className="bi bi-shuffle"></i>
                </button>
                <button className="btn btn-link text-muted">
                  <i className="bi bi-skip-backward"></i>
                </button>
                <button className="btn btn-play-pause" onClick={() => setIsPlaying(!isPlaying)}>
                  <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i>
                </button>
                <button className="btn btn-link text-muted">
                  <i className="bi bi-skip-forward"></i>
                </button>
                <button className="btn btn-link text-muted">
                  <i className="bi bi-repeat"></i>
                </button>
              </div>

              <div className="progress-container d-flex align-items-center">
                <span className="time-elapsed me-2">1:23</span>
                <div className="progress flex-grow-1">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "33%" }}
                    aria-valuenow="33"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span className="time-total ms-2">3:45</span>
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
                  style={{ width: "70%" }}
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
  )
}

export default MusicPlayer;

