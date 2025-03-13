import React, { useEffect, useState } from 'react';
import { fetchSongs } from '../../services/musicService';


const FeaturedSection = () => {
  const [featuredArtist, setFeaturedArtist] = useState(null);

  useEffect(() => {
    const loadFeaturedArtist = async () => {
      try {
        const songsData = await fetchSongs();
        if (songsData.length > 0) {
          setFeaturedArtist(songsData[0].artist); 
        }
      } catch (error) {
        console.error('Failed to load featured artist:', error);
      }
    };

    loadFeaturedArtist();
  }, []);

  return (
    <div className="featured-section mb-5">
      <div className="featured-content">
        <span className="featured-label">FEATURED ARTIST</span>
        <h1 className="featured-title">{featuredArtist || 'Loading...'}</h1>
        <p className="featured-description">
          Escucha lo destacado.
        </p>
        <div className="featured-buttons">
          <button className="btn btn-light rounded-pill me-2">Play Now</button>
          <button className="btn btn-outline-light rounded-pill">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;