function AlbumCard({ title, artist, coverUrl }) {
    return (
      <div className="album-card">
        <div className="album-cover-container">
          <img src={coverUrl || "../images/grey-bg.webp"} alt={`${title} by ${artist}`} className="album-cover img-fluid" />
          <div className="album-hover-overlay">
            <button className="btn btn-play">
              <i className="bi bi-play-fill"></i>
            </button>
          </div>
        </div>
        <div className="album-info mt-2">
          <h6 className="album-title">{title}</h6>
          <p className="album-artist">{artist}</p>
        </div>
      </div>
    )
  }
  
  export default AlbumCard;