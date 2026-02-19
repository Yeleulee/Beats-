import React from 'react';
import { User, Bell } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight text-white">Ye Beats</h1>
        <span className="text-xs text-white/50 font-medium">Liquid Glass Edition</span>
      </div>
      
      <div className="flex gap-3">
        <GlassCard className="p-2.5 rounded-full" interactive>
            <Bell size={18} className="text-white" />
        </GlassCard>
        <GlassCard className="p-2.5 rounded-full" interactive>
            <User size={18} className="text-white" />
        </GlassCard>
      </div>
    </div>
  );
};