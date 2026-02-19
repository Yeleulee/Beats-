import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { PlayerState, Song } from '../types';

interface PlayerContextType extends PlayerState {
  playSong: (song: Song) => void;
  togglePlay: () => void;
  setExpanded: (expanded: boolean) => void;
  setProgress: (progress: number) => void;
  nextSong: () => void;
  prevSong: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume] = useState(0.8);

  const playSong = useCallback((song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
    // Auto expand on play for immersive experience
    // setIsExpanded(true); 
  }, []);

  const togglePlay = useCallback(() => {
    if (currentSong) {
      setIsPlaying(prev => !prev);
    }
  }, [currentSong]);

  const setExpanded = useCallback((expanded: boolean) => {
    setIsExpanded(expanded);
  }, []);

  const nextSong = useCallback(() => {
    // Mock next song logic
    console.log("Next song");
    setProgress(0);
  }, []);

  const prevSong = useCallback(() => {
    // Mock prev song logic
    console.log("Prev song");
    setProgress(0);
  }, []);

  return (
    <PlayerContext.Provider value={{
      currentSong,
      isPlaying,
      progress,
      isExpanded,
      volume,
      playSong,
      togglePlay,
      setExpanded,
      setProgress,
      nextSong,
      prevSong
    }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};