import React, { useEffect, useState } from 'react';
import { fetchSongs } from '../../services/musicService';

const TopCharts = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const loadSongs = async () => {
      try {
        const songsData = await fetchSongs();
        setSongs(songsData);
      } catch (error) {
        console.error('Failed to load songs:', error);
      }
    };

    loadSongs();
  }, []);

  return (
    <section className="top-charts-section mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title">Top Charts</h2>
        <a href="#" className="see-all-link">
          See All <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div className="chart-container">
        {songs.map((song, index) => (
          <div key={song._id} className="chart-item">
            <div className="chart-position">{index + 1}</div>
            <div className="chart-cover">
              <img src={song.coverUrl} alt={song.title} className="img-fluid rounded" />
            </div>
            <div className="chart-info">
              <h6 className="chart-title">{song.title}</h6>
              <p className="chart-artist">{song.artist}</p>
            </div>
            <div className="chart-duration">{song.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCharts;