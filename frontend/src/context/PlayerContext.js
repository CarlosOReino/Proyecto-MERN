import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState({
    title: 'On My Heart',
    artist: 'Samuel Salter',
    coverUrl: '../images/grey-bg.webp',
    duration: 225, 
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    // lógica para la siguiente pista
  };

  const prevTrack = () => {
    // lógica para la pista anterior
  };

  const setTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <PlayerContext.Provider value={{ currentTrack, isPlaying, togglePlayPause, nextTrack, prevTrack, setTrack }}>
      {children}
    </PlayerContext.Provider>
  );
};
