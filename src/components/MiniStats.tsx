import React from 'react';
import { motion } from 'motion/react';
import { Users, Clapperboard, Sparkles } from 'lucide-react';
import { MINI_STATS } from '../data/profileData';

export const MiniStats: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-4 h-4 text-emerald-600" />;
      case 'Clapperboard':
        return <Clapperboard className="w-4 h-4 text-teal-600" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-green-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section className="w-full mt-7 mb-4">
      {/* Section Header */}
      <div className="flex items-center justify-between px-2 mb-3.5">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-3.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase font-heading text-slate-800">
            AZRYL DIGITAL
          </h2>
        </div>
        <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
          ECOSYSTEM
        </span>
      </div>

      {/* 3 Columns Stat Grid */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
        {MINI_STATS.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + idx * 0.08 }}
            className="group relative rounded-xl p-3 sm:p-3.5 bg-white/90 backdrop-blur-xl border border-emerald-100/90 hover:border-emerald-400 hover:bg-white shadow-[0_4px_15px_-3px_rgba(16,185,129,0.08)] hover:shadow-[0_12px_25px_-5px_rgba(16,185,129,0.18)] transition-all duration-300 flex flex-col items-center text-center overflow-hidden hover:-translate-y-1"
          >
            {/* Ambient subtle glow inside card */}
            <div className="absolute -top-6 -right-6 w-14 h-14 rounded-full bg-emerald-400/10 blur-xl group-hover:bg-emerald-400/25 transition-colors" />

            {/* Icon */}
            <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200/70 flex items-center justify-center mb-2 shadow-inner group-hover:scale-110 transition-transform">
              {getIcon(stat.iconName)}
            </div>

            {/* Main Value / Headline */}
            <span className="font-heading font-extrabold text-slate-900 text-sm sm:text-base tracking-wider group-hover:text-emerald-700 transition-colors">
              {stat.headline}
            </span>

            {/* Sub-headline */}
            <span className="text-[11px] sm:text-xs text-slate-600 font-semibold mt-0.5 leading-tight">
              {stat.subheadline}
            </span>

            {/* Detail pill / subtext */}
            <span className="text-[9px] sm:text-[10px] text-slate-400 mt-1 line-clamp-1">
              {stat.detail}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
