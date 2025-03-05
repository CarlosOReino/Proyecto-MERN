import AlbumCard from "./AlbumCard"

function RecentlyPlayed() {
const albums = [
  { title: "Salsa Explosion", artist: "Celia Cruz", coverUrl: "../images/grey-bg.webp" },
  { title: "Salsa Magic", artist: "Héctor Lavoe", coverUrl: "../images/grey-bg.webp" },
  { title: "Salsa Legends", artist: "Willie Colón", coverUrl: "../images/grey-bg.webp" },
  { title: "Salsa Heat", artist: "Rubén Blades", coverUrl: "../images/grey-bg.webp" },
  { title: "Salsa Classics", artist: "Marc Anthony", coverUrl: "../images/grey-bg.webp" },
]

  return (
    <section className="recently-played-section mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title">Recently Played</h2>
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

export default RecentlyPlayed

