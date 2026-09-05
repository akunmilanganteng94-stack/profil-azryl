import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

export const ProfileHeader: React.FC = () => {
  return (
    <header className="flex flex-col items-center text-center pt-8 pb-4 px-4 w-full max-w-md mx-auto">
      {/* 1. Avatar with 3D glowing border, floating animation, and verified badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-5"
      >
        {/* Ambient 3D Neon Glow Ring Behind Avatar */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 opacity-80 blur-lg animate-pulse" />
        
        {/* Secondary rotating accent border */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-300 via-green-400 to-teal-500 opacity-90 p-[2px]" />

        {/* Floating circular container - enlarged and maximized */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-[3px] bg-white/95 backdrop-blur-md shadow-2xl shadow-emerald-600/25 animate-float">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-400/50 relative bg-emerald-50">
            <img
              src={PROFILE_INFO.avatarUrl}
              alt="AZRYL"
              onError={(e) => {
                // Fallback to online avatar
                (e.target as HTMLImageElement).src = PROFILE_INFO.avatarFallback;
              }}
              className="w-full h-full object-cover object-center select-none scale-105 transition-transform duration-500 hover:scale-110"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            
            {/* Subtle inner glass light reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 pointer-events-none rounded-full" />
          </div>

          {/* Verified Official Badge */}
          <div 
            className="absolute bottom-1 right-1 translate-x-1 translate-y-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-2 rounded-full shadow-lg border-2 border-white flex items-center justify-center z-10"
            title="Akun Resmi AZRYL Terverifikasi"
          >
            <CheckCircle2 className="w-5 h-5 text-white fill-white/30" />
          </div>
        </div>
      </motion.div>

      {/* 2. PROFIL AZRYL (Main Title) */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading relative inline-block"
      >
        <span className="bg-gradient-to-r from-slate-950 via-emerald-950 to-emerald-900 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(16,185,129,0.2)]">
          {PROFILE_INFO.name}
        </span>
      </motion.h1>

      {/* 3. AZRYL OFFICIAL */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-1.5 flex items-center gap-1.5 justify-center"
      >
        <span className="text-emerald-700 font-bold tracking-wider text-sm sm:text-base font-heading">
          {PROFILE_INFO.handle}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
      </motion.div>

      {/* 4. ● ONLINE • ACTIVE (Badge) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-emerald-400/40 text-emerald-700 text-xs font-bold tracking-wide backdrop-blur-md shadow-[0_4px_16px_rgba(16,185,129,0.18)]"
      >
        {/* Pulsing indicator dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
        </span>
        <span>{PROFILE_INFO.statusBadge}</span>
      </motion.div>

      {/* 5. Welcome to my official profile */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-3 text-slate-700 text-sm sm:text-base max-w-xs sm:max-w-sm font-medium text-balance tracking-wide"
      >
        {PROFILE_INFO.tagline}
      </motion.p>
    </header>
  );
};
