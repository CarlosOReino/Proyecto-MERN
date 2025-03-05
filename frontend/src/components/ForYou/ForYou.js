import AlbumCard from "./AlbumCard"

function ForYou() {
  const albums = [
    { title: "The Blueprint", artist: "Jay-Z", coverUrl: "../images/grey-bg.webp" },
    { title: "To Pimp a Butterfly", artist: "Kendrick Lamar", coverUrl: "../images/grey-bg.webp" },
    { title: "Illmatic", artist: "Nas", coverUrl: "../images/grey-bg.webp" },
    { title: "The Chronic", artist: "Dr. Dre", coverUrl: "../images/grey-bg.webp" },
    { title: "Good Kid, M.A.A.D City", artist: "Kendrick Lamar", coverUrl: "../images/grey-bg.webp" },
  ]

  return (
    <section className="for-you-section mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title">For You</h2>
        <a href="#" className="see-all-link">
          See All <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div className="row">
        {albums.map((album, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2-4 mb-4">
            <AlbumCard {...album} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ForYou
