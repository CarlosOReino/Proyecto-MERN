import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import MusicPlayer from "./components/MusicPlayer/MusicPlayer.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import Home from "./pages/Home/Home.js"
import Profile from './pages/Profile/Profile';
import Login from "./pages/Login/Login.js"

function App() {
  return (
    <Router>
    <div className="app-container d-flex">
      <Sidebar />
      <main className="content-area">
        <div className="container-fluid py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </main>
      <MusicPlayer />
    </div>
    </Router>
  )
}

export default App;

