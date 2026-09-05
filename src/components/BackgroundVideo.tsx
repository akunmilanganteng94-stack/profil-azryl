import React, { useState, useEffect, useRef } from 'react';
import { ParticlesCanvas } from './ParticlesCanvas';

export const BackgroundVideo: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay may be deferred until user interaction on strict browsers
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none select-none">
      {/* 1. Animated Video Layer */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          poster="/assets/azryl_thumb.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <source src="/assets/azryl_bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* 2. Luminous White & Emerald Aurora Glow Layer */}
      <div 
        className={`absolute inset-0 w-full h-full bg-gradient-to-b from-slate-50 via-[#f0fdf4] to-emerald-50/40 transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-70' : 'opacity-100'
        }`}
      >
        {/* Animated Emerald & Mint Light Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-emerald-400/25 blur-[120px] animate-pulse" />
        <div className="absolute top-2/3 -right-20 w-96 h-96 rounded-full bg-green-400/20 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-teal-300/25 blur-[130px] animate-pulse" style={{ animationDelay: '3.5s' }} />
      </div>

      {/* 3. Pure White Translucent Glass Overlay */}
      <div className="absolute inset-0 w-full h-full bg-white/70 backdrop-blur-[3px]" />

      {/* 4. Light Vignette Effect */}
      <div className="absolute inset-0 w-full h-full bg-vignette" />

      {/* 5. Cyber Grid Overlay (subtle green tinted mesh) */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(16, 185, 129, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(16, 185, 129, 0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* 6. Floating Particles Engine */}
      <ParticlesCanvas />

      {/* 7. Top & Bottom Soft Fade Gradients */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-slate-50 via-slate-50/80 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent" />
    </div>
  );
};
