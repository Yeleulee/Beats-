import React from 'react';
import { Home, Search, Library, Disc } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface BottomNavProps {
  activeTab: 'home' | 'search' | 'library' | 'premium';
  setActiveTab: (tab: 'home' | 'search' | 'library' | 'premium') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'library', icon: Library, label: 'Library' },
    { id: 'premium', icon: Disc, label: 'Premium' },
  ] as const;

  return (
    <div className="px-6 pb-2 w-full flex justify-center">
        <GlassCard className="w-full max-w-sm rounded-full bg-[#2a1010]/80 border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50">
          <div className="flex flex-row justify-between items-center w-full px-8 py-4">
            {navItems.map((item) => {
                const isActive = activeTab === item.id;
                const Icon = item.icon;
                
                return (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative flex items-center justify-center transition-all duration-300 ${isActive ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                >
                    <div className={`p-2 rounded-full transition-all duration-300 ${isActive ? 'bg-white/10' : ''}`}>
                      <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    {isActive && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-400 shadow-[0_0_8px_orange]" />
                    )}
                </button>
                );
            })}
          </div>
        </GlassCard>
    </div>
  );
};