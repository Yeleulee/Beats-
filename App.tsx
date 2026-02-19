import React, { useState } from 'react';
import { PlayerProvider } from './context/PlayerContext';
import { MeshBackground } from './components/MeshBackground';
import { BottomNav } from './components/BottomNav';
import { Sidebar } from './components/Sidebar';
import { FeaturedCard } from './components/FeaturedCard';
import { SongList } from './components/SongList';
import { FullPlayer } from './components/FullPlayer';
import { MiniPlayer } from './components/MiniPlayer';
import { Header } from './components/Header';
import { PLAYLISTS } from './constants';
import { Search as SearchIcon, Mic, Disc, Download, Heart, Music } from 'lucide-react';
import { GlassCard } from './components/GlassCard';

// -- Sub-Components for Sections --

const HomeSection: React.FC = () => (
  <div className="animate-in fade-in duration-500 space-y-10 mt-8 lg:mt-0">
    <section>
      <h2 className="text-sm font-semibold text-white/60 mb-4 tracking-wider uppercase">Featured</h2>
      <FeaturedCard />
    </section>

    {PLAYLISTS.map((playlist) => (
      <section key={playlist.id}>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold tracking-tight">{playlist.title}</h2>
          <span className="text-xs font-medium text-white/50 cursor-pointer hover:text-white transition-colors">See All</span>
        </div>
        <SongList songs={playlist.songs} />
      </section>
    ))}
  </div>
);

const SearchSection: React.FC = () => {
  const genres = [
    { name: 'Ethio-Jazz', color: 'bg-orange-900/60' },
    { name: 'Tizita', color: 'bg-red-900/60' },
    { name: 'Traditional', color: 'bg-amber-800/60' },
    { name: 'Electronic', color: 'bg-rose-900/60' },
    { name: 'Pop', color: 'bg-pink-900/60' },
    { name: 'Instrumental', color: 'bg-stone-800/60' },
  ];

  return (
    <div className="animate-in fade-in duration-500 mt-6 lg:mt-0">
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-white/40" />
        </div>
        <input 
          type="text" 
          placeholder="Artists, songs, or lyrics" 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder-white/30 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all backdrop-blur-md"
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <Mic className="h-5 w-5 text-white/40" />
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">Browse Categories</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {genres.map((g) => (
          <GlassCard key={g.name} className={`h-24 relative overflow-hidden ${g.color} border-white/5`} interactive>
             <div className="p-4 w-full h-full relative z-10">
               <span className="font-bold text-lg text-white/90">{g.name}</span>
             </div>
             <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/10 rounded-full blur-xl" />
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

const LibrarySection: React.FC = () => {
  const libraryItems = [
    { icon: Heart, label: 'Liked Songs', sub: '124 songs' },
    { icon: Music, label: 'Playlists', sub: '8 created' },
    { icon: Disc, label: 'Albums', sub: '12 saved' },
    { icon: Download, label: 'Downloaded', sub: '45 songs' },
  ];

  return (
    <div className="animate-in fade-in duration-500 mt-6 lg:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {libraryItems.map((item) => (
          <GlassCard key={item.label} className="bg-white/5" interactive>
            <div className="flex items-center gap-4 p-4 w-full">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg shadow-red-900/20">
                <item.icon size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-base">{item.label}</h3>
                <p className="text-white/40 text-xs">{item.sub}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

const PremiumSection: React.FC = () => (
  <div className="animate-in fade-in duration-500 mt-6 lg:mt-0 flex flex-col items-center text-center">
    <div className="w-full relative mb-8 max-w-lg mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 blur-3xl opacity-20" />
      <GlassCard className="border-orange-500/20 bg-gradient-to-br from-white/10 to-transparent">
        <div className="p-8 w-full">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-orange-900/40">
             <Disc size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Ye Beats Premium</h2>
          <p className="text-white/60 text-sm mb-6">Experience music exactly as the artist intended.</p>
          
          <ul className="text-left space-y-3 mb-8 pl-4 inline-block">
            <li className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Lossless Ethio-Jazz Audio
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Offline Playback
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> No Ad Interruptions
            </li>
          </ul>

          <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-white/10">
            Try Free for 1 Month
          </button>
        </div>
      </GlassCard>
    </div>
  </div>
);

// -- Main App Component --

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'library' | 'premium'>('home');

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden text-white bg-black font-sans selection:bg-orange-500/30">
      <MeshBackground />

      {/* Main Grid Layout for Desktop */}
      <div className="relative z-10 h-full w-full lg:grid lg:grid-cols-[260px_1fr_420px] lg:gap-0">
        
        {/* Left Column: Sidebar (Desktop Only) */}
        <div className="hidden lg:block h-full border-r border-white/5 backdrop-blur-md bg-black/20">
           <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Center Column: Main Content */}
        <div className="h-full flex flex-col relative overflow-hidden">
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-40 lg:pb-10">
              <div className="px-6 pt-12 lg:pt-8 pb-6 max-w-2xl mx-auto w-full lg:max-w-5xl">
                
                {/* Header is hidden on desktop as Sidebar covers logo/profile */}
                <div className="lg:hidden">
                    <Header />
                </div>
                
                {/* Desktop Header area */}
                <div className="hidden lg:flex justify-between items-center mb-8">
                   <h2 className="text-2xl font-bold capitalize">{activeTab}</h2>
                   <div className="text-sm text-white/40 font-mono">{new Date().toLocaleDateString()}</div>
                </div>

                {/* View Switching */}
                {activeTab === 'home' && <HomeSection />}
                {activeTab === 'search' && <SearchSection />}
                {activeTab === 'library' && <LibrarySection />}
                {activeTab === 'premium' && <PremiumSection />}

                {/* Bottom spacer for mobile nav */}
                <div className="h-10 lg:hidden" />
              </div>
            </div>
            
            {/* Mobile Bottom Nav */}
            <div 
                className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-300 lg:hidden"
                style={{ paddingBottom: 'env(safe-area-inset-bottom, 20px)' }}
            >
                <div className="w-full px-4 mb-3 pointer-events-auto max-w-md mx-auto">
                    <MiniPlayer />
                </div>
                <div className="w-full pointer-events-auto">
                    <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
            </div>
        </div>

        {/* Right Column: Player (Desktop Only - Logic Handled inside FullPlayer) */}
        <div className="hidden lg:block h-full border-l border-white/5 backdrop-blur-md bg-black/20">
           <FullPlayer />
        </div>

        {/* Mobile Full Player (Overlay) */}
        {/* FullPlayer handles its own rendering logic for desktop/mobile via media queries internally now */}
        <div className="lg:hidden">
            <FullPlayer />
        </div>
      </div>

    </div>
  );
};

const App: React.FC = () => {
  return (
    <PlayerProvider>
      <AppContent />
    </PlayerProvider>
  );
};

export default App;