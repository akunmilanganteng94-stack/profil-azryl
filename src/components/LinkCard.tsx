import React, { useState, useRef, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProfileLink } from '../types';
import { WhatsAppIcon, TikTokIcon, AlightMotionIcon, PersibShieldIcon } from './CustomIcons';

interface LinkCardProps {
  link: ProfileLink;
  index: number;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, index }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Handle 3D Tilt Effect on mouse movement
  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Handle Click Ripple
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple: Ripple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 650);
  };

  const renderIcon = () => {
    switch (link.iconType) {
      case 'whatsapp':
        return (
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 p-2.5">
            <WhatsAppIcon className="w-6 h-6 text-white" />
          </div>
        );
      case 'whatsapp-channel':
        return (
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-teal-600/30 p-2.5">
            <WhatsAppIcon className="w-6 h-6 text-white" />
          </div>
        );
      case 'persib':
        return (
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-700/30 p-2.5">
            <PersibShieldIcon className="w-6 h-6 text-white" />
          </div>
        );
      case 'digital':
        return (
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 p-2.5">
            <AlightMotionIcon className="w-6 h-6 text-white" />
          </div>
        );
      case 'tiktok':
        return (
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border border-emerald-500/40 flex items-center justify-center text-white shadow-lg shadow-emerald-950/40 p-2.5">
            <TikTokIcon className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          </div>
        );
      default:
        return (
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white p-2.5">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.18 + index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full perspective-1000"
    >
      <a
        ref={cardRef}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
          transition: isHovered
            ? 'transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease'
            : 'transform 0.5s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
        className={`
          group relative block w-full rounded-2xl p-4 sm:p-5
          bg-white/90 backdrop-blur-2xl border border-emerald-100/90
          shadow-[0_8px_25px_-5px_rgba(16,185,129,0.1),0_2px_10px_-2px_rgba(0,0,0,0.04)]
          hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.25),0_0_20px_2px_rgba(52,211,153,0.3)]
          hover:border-emerald-400 hover:bg-white
          overflow-hidden cursor-pointer select-none active:scale-[0.98] transition-all
        `}
      >
        {/* Dynamic Glowing Border Accent on Hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16,185,129,0.12), transparent 70%)`,
          }}
        />

        {/* Ambient Top Subtle Shimmer Edge */}
        <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Shimmer Sheen Reflection that runs across the card */}
        <div className="animate-sheen absolute inset-0 pointer-events-none rounded-2xl" />

        {/* Card Content Row */}
        <div className="relative z-10 flex items-center justify-between gap-3.5">
          {/* Left: Icon and Details */}
          <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
            {/* Icon Container with 3D Pop */}
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1">
              {renderIcon()}
            </div>

            {/* Texts */}
            <div className="flex flex-col min-w-0 text-left">
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-slate-900 text-base sm:text-lg tracking-wide group-hover:text-emerald-700 transition-colors truncate">
                  {link.title}
                </span>
                {link.badge && (
                  <span className="hidden xs:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    {link.badge}
                  </span>
                )}
              </div>

              {link.subtitle && (
                <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5 line-clamp-1 group-hover:text-slate-700 transition-colors">
                  {link.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right: Modern Arrow Button */}
          <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 group-hover:bg-emerald-500 group-hover:border-emerald-500 text-emerald-700 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Click Ripples */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none bg-emerald-400/40 animate-ping"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              width: 40,
              height: 40,
            }}
          />
        ))}
      </a>
    </motion.div>
  );
};
