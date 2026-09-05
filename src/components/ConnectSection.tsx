import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Copy, Check, QrCode, MessageSquare } from 'lucide-react';

export const ConnectSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const profileUrl = typeof window !== 'undefined' ? window.location.href : 'https://profilazryl.com';

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(profileUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PROFIL AZRYL - Official Profile',
          text: 'Kunjungi profil resmi AZRYL: Komunitas JB, Saluran, Cuplikan Persib, & Layanan Digital AM Premium.',
          url: profileUrl,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      setShowQr(true);
    }
  };

  return (
    <section className="w-full mt-7 mb-6">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-base sm:text-lg font-extrabold tracking-wider uppercase font-heading text-slate-900 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          CONNECT WITH ME
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">
          Stay connected with AZRYL
        </p>
      </div>

      {/* Futuristic Action Cards */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          type="button"
          className="group relative flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/90 backdrop-blur-xl border border-emerald-100/90 hover:border-emerald-400 hover:bg-white text-slate-700 hover:text-emerald-800 transition-all duration-300 shadow-[0_4px_15px_-3px_rgba(16,185,129,0.08)] hover:shadow-[0_8px_20px_-3px_rgba(16,185,129,0.18)] active:scale-95 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
            {copied ? <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" /> : <Copy className="w-4 h-4" />}
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            {copied ? 'Tersalin!' : 'Bagikan Link'}
          </span>

          {/* Toast Notification if copied */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: -40, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                className="absolute -top-3 z-30 px-3.5 py-1.5 bg-emerald-600 text-white text-[11px] font-bold rounded-full shadow-lg shadow-emerald-600/30 flex items-center gap-1.5 whitespace-nowrap"
              >
                <Check className="w-3 h-3 stroke-[3]" />
                Link Profil Tersalin!
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Direct Contact / QR Action */}
        <button
          onClick={handleShare}
          type="button"
          className="group flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-white/90 backdrop-blur-xl border border-emerald-100/90 hover:border-emerald-400 hover:bg-white text-slate-700 hover:text-emerald-800 transition-all duration-300 shadow-[0_4px_15px_-3px_rgba(16,185,129,0.08)] hover:shadow-[0_8px_20px_-3px_rgba(16,185,129,0.18)] active:scale-95 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
            <Share2 className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            Share Profil
          </span>
        </button>
      </div>

      {/* QR Code Modal Fallback */}
      <AnimatePresence>
        {showQr && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-xs rounded-2xl bg-white border border-emerald-200 p-6 text-center shadow-2xl relative"
            >
              <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                Scan Profil AZRYL
              </h3>
              <p className="text-xs text-slate-500 mb-4 font-medium">
                Scan kode QR ini menggunakan kamera smartphone Anda
              </p>

              {/* QR Container */}
              <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-xl mx-auto w-fit shadow-inner mb-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                    profileUrl
                  )}`}
                  alt="QR Code Profil Azryl"
                  className="w-40 h-40 rounded-lg mix-blend-multiply"
                />
              </div>

              <button
                type="button"
                onClick={() => setShowQr(false)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/30 hover:opacity-90 active:scale-95 transition-all cursor-pointer"
              >
                Tutup
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
