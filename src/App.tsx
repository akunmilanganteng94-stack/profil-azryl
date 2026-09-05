/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkCard } from './components/LinkCard';
import { MiniStats } from './components/MiniStats';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { PROFILE_LINKS } from './data/profileData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant entrance loading delay to ensure smooth layout initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-x-hidden text-slate-900">
      {/* 1. Fullscreen Background Video & Overlay Layer */}
      <BackgroundVideo />

      {/* 2. Main Container - Mobile First Centered Column */}
      <main className="relative z-10 w-full max-w-md sm:max-w-lg px-4 sm:px-6 flex-1 flex flex-col items-center">
        {/* Profile Header (Avatar, PROFIL AZRYL, AZRYL OFFICIAL, Badge, Welcome Tagline) */}
        <ProfileHeader />

        {/* Link Menu (GRUP JB, SALURAN JB, SL CLIPS PERSIB AZRYL, AM PREM 300P, TIKTOK AZRYL) */}
        <section 
          className="w-full flex flex-col gap-3.5 sm:gap-4 mt-2 mb-3"
          aria-label="Link Resmi AZRYL"
        >
          {PROFILE_LINKS.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </section>

        {/* Mini Statistic (AZRYL DIGITAL) */}
        <MiniStats />

        {/* Connect With Me */}
        <ConnectSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Initial Entrance Fade Screen */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-slate-50 flex items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
            <span className="font-heading font-bold text-xs tracking-widest text-emerald-700 uppercase">
              PROFIL AZRYL
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
