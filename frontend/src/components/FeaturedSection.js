function FeaturedSection() {
    return (
      <div className="featured-section mb-5">
        <div className="featured-content">
          <span className="featured-label">FEATURED ARTIST</span>
          <h1 className="featured-title">Samuel Salter</h1>
          <p className="featured-description">
            Escucha su album de 1990 It's On Tonight.
          </p>
          <div className="featured-buttons">
            <button className="btn btn-light rounded-pill me-2">Play Now</button>
            <button className="btn btn-outline-light rounded-pill">Follow</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default FeaturedSection