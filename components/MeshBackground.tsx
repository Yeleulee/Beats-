import React from 'react';

export const MeshBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#1a0505] overflow-hidden">
      {/* Deep dark warm base */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-[#1c0808] to-black opacity-95" />
      
      {/* Animated Blobs - Red/Brown Theme */}
      <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] rounded-full bg-red-900/30 blur-[130px] mesh-blob" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[30%] right-[-20%] w-[500px] h-[500px] rounded-full bg-orange-900/25 blur-[120px] mesh-blob" style={{ animationDelay: '-7s' }} />
      <div className="absolute bottom-[-10%] left-[10%] w-[700px] h-[700px] rounded-full bg-[#4a1010]/30 blur-[140px] mesh-blob" style={{ animationDelay: '-14s' }} />
      
      {/* Noise Texture Overlay for realism */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
};