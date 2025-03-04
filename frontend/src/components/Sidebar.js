function Sidebar() {
    return (
      <div className="sidebar">
        <div className="p-4">
          <h1 className="logo">PULSE</h1>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-search"></i>
                <span>Search</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-music-note-list"></i>
                <span>Your Library</span>
              </a>
            </li>
          </ul>
  
          <div className="mt-4">
            <h6 className="sidebar-heading px-3">PLAYLISTS</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-plus-circle"></i>
                  <span>Create Playlist</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-heart"></i>
                  <span>Liked Songs</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bi bi-arrow-down-circle"></i>
                  <span>Downloaded</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="sidebar-footer">
          <a href="#" className="nav-link">
            <i className="bi bi-person-circle"></i>
            <span>Profile</span>
          </a>
        </div>
      </div>
    )
  }
  
  export default Sidebar
  
  