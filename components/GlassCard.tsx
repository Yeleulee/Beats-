import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  opacity?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  blur = 'xl',
  opacity = 'bg-white/10',
  onClick,
  interactive = false
}) => {
  
  const blurClass = {
    'md': 'backdrop-blur-md',
    'lg': 'backdrop-blur-lg',
    'xl': 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl',
  }[blur];

  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden
        rounded-3xl border border-white/20 shadow-lg
        ${blurClass} ${opacity}
        ${interactive ? 'active:scale-95 transition-transform duration-200 cursor-pointer hover:bg-white/15' : ''}
        ${className}
      `}
    >
      {/* Specular Highlight - Top Left */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      {/* Inner Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};