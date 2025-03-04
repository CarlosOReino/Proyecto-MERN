import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import FeaturedSection from "./components/FeaturedSection"
import ForYou from "./components/ForYou"
import MusicPlayer from "./components/MusicPlayer"
import RecentlyPlayed from "./components/RecentlyPlayed"
import Sidebar from "./components/Sidebar"
import TopCharts from "./components/TopCharts"

function App() {
  return (
    <div className="app-container d-flex">
      <Sidebar />
      <main className="content-area">
        <div className="container-fluid py-4">
          <FeaturedSection />
          <ForYou />
          <RecentlyPlayed />
          <TopCharts />
        </div>
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App

