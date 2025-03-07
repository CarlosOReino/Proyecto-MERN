function TopCharts() {
    const tracks = [
      { position: 1, title: "Let's Stay Together", artist: "Al Green", duration: "3:18", coverUrl: "../images/grey-bg.webp" },
      { position: 2, title: "Ain't No Sunshine", artist: "Bill Withers", duration: "2:04", coverUrl: "../images/grey-bg.webp" },
      { position: 3, title: "Sexual Healing", artist: "Marvin Gaye", duration: "4:00", coverUrl: "../images/grey-bg.webp" },
      { position: 4, title: "Superstition", artist: "Stevie Wonder", duration: "4:26", coverUrl: "../images/grey-bg.webp" },
      { position: 5, title: "I Heard It Through the Grapevine", artist: "Marvin Gaye", duration: "3:16", coverUrl: "../images/grey-bg.webp" },
    ]
  
    return (
      <section className="top-charts-section mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="section-title">Top Charts</h2>
          <a href="#" className="see-all-link">
            See All <i className="bi bi-chevron-right"></i>
          </a>
        </div>
        <div className="chart-container">
          {tracks.map((track, index) => (
            <div key={index} className="chart-item">
              <div className="chart-position">{track.position}</div>
              <div className="chart-cover">
                <img src={track.coverUrl || "../images/grey-bg.webp"} alt={track.title} className="img-fluid rounded" />
              </div>
              <div className="chart-info">
                <h6 className="chart-title">{track.title}</h6>
                <p className="chart-artist">{track.artist}</p>
              </div>
              <div className="chart-duration">{track.duration}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default TopCharts;
  
  