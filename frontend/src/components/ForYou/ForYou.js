import React, { useEffect, useState } from 'react';
import { fetchSongs } from '../../services/musicService';
import AlbumCard from '../AlbumCard/AlbumCard';

const ForYou = () => {
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
    <section className="for-you-section mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="section-title">For You</h2>
        <a href="#" className="see-all-link">
          See All <i className="bi bi-chevron-right"></i>
        </a>
      </div>
      <div className="row">
        {songs.map((song) => (
          <div key={song._id} className="col-6 col-md-4 col-lg-2-4 mb-4">
            <AlbumCard {...song} duration={song.duration} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForYou;