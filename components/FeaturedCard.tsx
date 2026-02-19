import React from 'react';
import { GlassCard } from './GlassCard';
import { Play } from 'lucide-react';

export const FeaturedCard: React.FC = () => {
  return (
    <GlassCard className="h-64 w-full group overflow-hidden" interactive>
       {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('https://picsum.photos/id/40/800/600')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start">
        <span className="px-2 py-1 bg-orange-600/30 backdrop-blur-md border border-orange-500/40 text-orange-200 text-[10px] font-bold uppercase tracking-widest rounded-md mb-2">
            Artist of the Week
        </span>
        <h3 className="text-3xl font-bold text-white mb-1">Teddy Afro</h3>
        <p className="text-white/70 text-sm mb-4">The King of Ethiopian Pop</p>
        
        <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full transition-all">
          <Play size={16} fill="currentColor" />
          <span className="font-medium text-sm">Listen Now</span>
        </button>
      </div>
    </GlassCard>
  );
};