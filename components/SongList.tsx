import React from 'react';
import { Song } from '../types';
import { GlassCard } from './GlassCard';
import { usePlayer } from '../context/PlayerContext';
import { Play } from 'lucide-react';

interface SongListProps {
  songs: Song[];
}

export const SongList: React.FC<SongListProps> = ({ songs }) => {
  const { playSong, currentSong } = usePlayer();

  return (
    <div className="
      flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 no-scrollbar 
      lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-6 lg:mx-0 lg:px-0 lg:overflow-visible
    ">
      {songs.map((song) => {
        const isCurrent = currentSong?.id === song.id;
        
        return (
          <div key={song.id} className="flex-shrink-0 w-36 lg:w-full">
            <GlassCard 
              className="aspect-square mb-3 group relative" 
              interactive 
              onClick={() => playSong(song)}
            >
              <img 
                src={song.coverUrl} 
                alt={song.title} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
                    <Play size={20} fill="white" className="text-white ml-0.5" />
                </div>
              </div>
            </GlassCard>
            <h4 className="font-semibold text-sm truncate text-white">{song.title}</h4>
            <p className="text-xs text-white/50 truncate">{song.artist}</p>
          </div>
        );
      })}
    </div>
  );
};