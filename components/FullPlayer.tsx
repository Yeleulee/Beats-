import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Pause, SkipForward, SkipBack, Heart, Repeat, MoreHorizontal, SlidersHorizontal, Maximize2 } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import { GlassCard } from './GlassCard';

export const FullPlayer: React.FC = () => {
  const { currentSong, isPlaying, togglePlay, isExpanded, setExpanded, progress } = usePlayer();
  const [localProgress, setLocalProgress] = useState(progress);
  const [viewMode, setViewMode] = useState<'audio' | 'video'>('audio');

  // Sync local progress with context when not dragging (mock behavior)
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setLocalProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    setLocalProgress(progress);
  }, [progress]);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // On Desktop, we show a placeholder if no song is selected, 
  // On Mobile, we return null if not expanded (handled by CSS translation mostly, but strictly hiding for performance)
  if (!currentSong) {
     return (
       <div className="hidden lg:flex h-full w-full items-center justify-center text-white/20">
          <div className="flex flex-col items-center gap-4">
             <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                <Play size={32} fill="currentColor" className="ml-1" />
             </div>
             <p className="text-sm font-medium tracking-widest uppercase">Select a track</p>
          </div>
       </div>
     )
  }

  return (
    <div 
      className={`
        fixed inset-0 z-[100] flex flex-col bg-[#1a0c0c] text-white transition-all duration-500 font-sans
        lg:static lg:bg-transparent lg:z-0 lg:h-full lg:w-full lg:translate-y-0
        ${isExpanded ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}
      `}
    >
      
      {/* Background Mesh - Mobile Only */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none lg:hidden">
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[60%] bg-gradient-to-b from-[#3d1818] to-transparent opacity-60 blur-3xl" />
         <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Main Content Wrapper - Uses safe area insets and flex layout */}
      <div 
        className="relative z-10 flex flex-col h-full w-full max-w-lg mx-auto lg:max-w-none lg:justify-center"
        style={{
            paddingTop: 'max(1.5rem, env(safe-area-inset-top))',
            paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))',
        }}
      >
        <div className="flex flex-col h-full px-6 lg:px-2">
            {/* Top Bar: Header & Toggle */}
            <div className="flex flex-col shrink-0 gap-4 mb-2 sm:mb-6">
                {/* Header Row */}
                <div className="flex justify-between items-start">
                <button 
                    onClick={() => setExpanded(false)}
                    className="p-2 -ml-2 text-white/70 hover:text-white transition-colors active:scale-95 lg:hidden"
                >
                    <ChevronDown size={28} />
                </button>
                <div className="hidden lg:block p-2 -ml-2 text-white/70">
                    {/* Placeholder to balance layout on desktop */}
                    <div className="w-7 h-7" />
                </div>
                
                <div className="flex flex-col items-center flex-1 pt-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-1">Playing From</span>
                    <span className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate max-w-[200px]">Playlist</span>
                </div>

                <button className="p-2 -mr-2 text-white/70 hover:text-white transition-colors active:scale-95">
                    <MoreHorizontal size={24} />
                </button>
                </div>

                {/* Audio/Video Toggle Pill */}
                <div className="flex justify-center">
                <div className="flex bg-[#2a1212]/80 backdrop-blur-md rounded-full p-1 border border-white/5 relative">
                    <div 
                        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#4a2020] rounded-full shadow-lg transition-all duration-300 ease-out ${viewMode === 'audio' ? 'left-1' : 'left-[calc(50%)]'}`} 
                    />
                    
                    <button 
                        onClick={() => setViewMode('audio')}
                        className={`relative z-10 px-6 sm:px-8 lg:px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider transition-colors duration-300 ${viewMode === 'audio' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                    >
                        AUDIO
                    </button>
                    <button 
                        onClick={() => setViewMode('video')}
                        className={`relative z-10 px-6 sm:px-8 lg:px-6 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider transition-colors duration-300 ${viewMode === 'video' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                    >
                        VIDEO
                    </button>
                </div>
                </div>
            </div>

            {/* Middle: Media Content */}
            <div className="flex-1 min-h-0 flex items-center justify-center my-4 w-full transition-all duration-500 ease-in-out">
            <div className={`relative transition-all duration-500 ease-in-out ${viewMode === 'video' ? 'aspect-video w-full' : 'aspect-square h-full max-h-[45vh] lg:max-h-[350px] w-auto'}`}>
                <GlassCard 
                    className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/5 bg-[#2a1515]/40 overflow-hidden"
                    blur="xl"
                >
                    {viewMode === 'audio' ? (
                        <>
                        <img 
                            src={currentSong.coverUrl} 
                            alt={currentSong.title} 
                            className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
                        </>
                    ) : (
                        <div className="relative w-full h-full bg-black group overflow-hidden">
                        <img 
                            src={currentSong.coverUrl} 
                            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm scale-110 group-hover:scale-105 transition-transform duration-10000" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            {isPlaying ? (
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm animate-pulse">
                                    <div className="w-12 h-12 bg-white/90 rounded-full shadow-[0_0_20px_white]" />
                                </div>
                            ) : (
                                <Play size={48} className="text-white/80" fill="currentColor" />
                            )}
                        </div>
                        <div className="absolute top-4 left-4 px-2 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/70">
                            4K HDR
                        </div>
                        <button className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20">
                            <Maximize2 size={16} />
                        </button>
                        </div>
                    )}
                </GlassCard>
            </div>
            </div>

            {/* Bottom: Info, Progress, Controls */}
            <div className="flex flex-col gap-4 sm:gap-6 shrink-0 lg:gap-4">
                
                {/* Track Info */}
                <div className="flex justify-between items-end px-1">
                <div className="flex flex-col gap-1 min-w-0 pr-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-2xl font-bold text-white tracking-tight truncate leading-tight">{currentSong.title}</h2>
                    <div className="flex items-center gap-2 text-white/60">
                        <span className="text-sm sm:text-base">Guided by</span>
                        <span className="text-sm sm:text-base text-orange-200 truncate">{currentSong.artist}</span>
                    </div>
                </div>
                <button className="shrink-0 p-3 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm border border-white/5 transition-all active:scale-95">
                    <Heart size={20} className="text-white/80" />
                </button>
                </div>

                {/* Enhanced Liquid Progress Bar */}
                <div className="mb-2 px-1 group cursor-pointer relative py-4" onClick={() => {}}>
                <div className="h-1.5 w-full bg-white/5 rounded-full relative backdrop-blur-md border border-white/5">
                    
                    <div 
                        className="absolute top-[-1px] left-0 h-[calc(100%+2px)] rounded-full bg-orange-300/20 blur-[2px] transition-all duration-300 ease-linear animate-pulse"
                        style={{ width: `${localProgress}%` }}
                    />

                    <div 
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-100 ease-linear overflow-hidden"
                        style={{ 
                        width: `${localProgress}%`,
                        boxShadow: '0 0 15px rgba(220, 200, 180, 0.4)' 
                        }}
                    >
                        <div className="w-full h-full bg-gradient-to-r from-stone-400 via-orange-100 to-stone-400 opacity-90 bg-[length:200%_100%] animate-[liquidFlow_2s_linear_infinite]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-60" />
                    </div>

                    <div 
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 z-20 transition-all duration-100 ease-linear pointer-events-none"
                        style={{ left: `calc(${localProgress}% - 8px)` }}
                    >
                        <div className="absolute inset-0 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        <div className="absolute inset-0 bg-white rounded-full opacity-60 animate-ping" />
                        <div className="absolute inset-[-2px] bg-orange-200/50 rounded-full animate-pulse blur-[1px]" />
                    </div>
                </div>

                <div className="flex justify-between mt-3 text-[10px] sm:text-xs font-medium text-white/30 font-mono tracking-wider">
                    <span>{formatTime(currentSong.duration * localProgress / 100)}</span>
                    <span>{formatTime(currentSong.duration)}</span>
                </div>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center px-2 pb-2">
                <button className="text-white/30 hover:text-white transition-colors active:scale-95">
                    <SlidersHorizontal size={20} />
                </button>

                <button className="text-white hover:text-white/70 transition-colors p-2 active:scale-95">
                    <SkipBack size={28} strokeWidth={1.5} />
                </button>

                <div className="relative group">
                    <div className="absolute inset-0 bg-orange-900/40 blur-xl rounded-full scale-110 group-hover:scale-125 transition-transform opacity-60" />
                    <button 
                        onClick={togglePlay}
                        className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 bg-[#4a2525]/80 hover:bg-[#5a3030] backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center transition-all shadow-xl active:scale-95"
                    >
                        {isPlaying ? (
                        <Pause size={28} fill="white" className="text-white" />
                        ) : (
                        <Play size={28} fill="white" className="text-white ml-1" />
                        )}
                    </button>
                </div>

                <button className="text-white hover:text-white/70 transition-colors p-2 active:scale-95">
                    <SkipForward size={28} strokeWidth={1.5} />
                </button>

                <button className="text-white/30 hover:text-white transition-colors active:scale-95">
                    <Repeat size={20} />
                </button>
                </div>

                {/* Bottom Airplay */}
                <div className="flex justify-center pb-2">
                    <button className="flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-white/5 transition-colors active:scale-95">
                        <div className="w-4 h-4 text-white/40">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <span className="text-[10px] sm:text-xs font-medium text-white/40 tracking-wider">AirPlay / Bluetooth</span>
                    </button>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};