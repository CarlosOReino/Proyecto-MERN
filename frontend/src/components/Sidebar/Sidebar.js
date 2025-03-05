import { Link } from "react-router-dom";

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="p-4">
          <h1 className="logo">iSONG</h1>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              <i className="bi bi-person-circle"></i>
              <span>Profile</span>
            </Link>
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
  
  export default Sidebar;
  
  