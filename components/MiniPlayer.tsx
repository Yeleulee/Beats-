import React from 'react';
import { GlassCard } from './GlassCard';
import { Play, Pause, SkipForward } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

export const MiniPlayer: React.FC = () => {
  const { currentSong, isPlaying, togglePlay, setExpanded, nextSong } = usePlayer();

  if (!currentSong) return null;

  return (
    <GlassCard 
        className="bg-[#2a1010]/60 border-white/10" 
        blur="2xl"
        onClick={() => setExpanded(true)}
    >
      <div className="flex items-center p-2 pr-4 gap-3 w-full">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 animate-[spin_10s_linear_infinite] [animation-play-state:paused]" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}>
          <img src={currentSong.coverUrl} alt="cover" className="w-full h-full object-cover" />
          <div className="absolute inset-0 border border-white/20 rounded-full" />
        </div>
        
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <h4 className="text-sm font-semibold truncate text-white">{currentSong.title}</h4>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-orange-400 font-medium">{currentSong.artistAmharic}</span>
            <span className="text-[10px] text-white/40">•</span>
            <span className="text-[10px] text-white/60 truncate">{currentSong.artist}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSong(); }}
            className="p-1 rounded-full hover:bg-white/10 text-white/70 transition-colors"
          >
            <SkipForward size={20} />
          </button>
        </div>
      </div>
    </GlassCard>
  );
};