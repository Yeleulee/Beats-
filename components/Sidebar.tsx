import React from 'react';
import { Home, Search, Library, Disc, User, Bell, Settings } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface SidebarProps {
  activeTab: 'home' | 'search' | 'library' | 'premium';
  setActiveTab: (tab: 'home' | 'search' | 'library' | 'premium') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'library', icon: Library, label: 'Library' },
    { id: 'premium', icon: Disc, label: 'Premium' },
  ] as const;

  return (
    <div className="h-full w-full p-6 flex flex-col gap-8">
      {/* Logo Area */}
      <div className="px-4">
        <h1 className="text-3xl font-bold tracking-tight text-white">Ye Beats</h1>
        <span className="text-xs text-white/50 font-medium tracking-widest uppercase">Liquid Glass</span>
      </div>

      {/* Main Navigation */}
      <div className="flex flex-col gap-4 flex-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <GlassCard 
              key={item.id}
              className={`border-none transition-all duration-300 ${isActive ? 'bg-white/10' : 'bg-transparent hover:bg-white/5'}`}
              interactive
              onClick={() => setActiveTab(item.id)}
            >
              <div className="flex items-center gap-4 p-4">
                <Icon size={24} className={isActive ? "text-white" : "text-white/60"} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-sm font-medium ${isActive ? "text-white" : "text-white/60"}`}>{item.label}</span>
                {isActive && (
                    <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_orange]" />
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Footer / User Area */}
      <div className="mt-auto space-y-4">
        <GlassCard className="bg-white/5 border-white/5" interactive>
            <div className="flex items-center gap-3 p-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold">
                    Y
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">Yeleule</span>
                    <span className="text-xs text-white/50">Premium Plan</span>
                </div>
            </div>
        </GlassCard>
        <div className="flex gap-2">
            <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 transition-colors">
                <Settings size={20} />
            </button>
            <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 transition-colors">
                <Bell size={20} />
            </button>
        </div>
      </div>
    </div>
  );
};