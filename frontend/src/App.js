import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./App.css"
import MusicPlayer from "./components/MusicPlayer/MusicPlayer.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import Home from "./pages/Home/Home.js"
import Login from "./pages/Login/Login.js"
import Profile from './pages/Profile/Profile'

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

