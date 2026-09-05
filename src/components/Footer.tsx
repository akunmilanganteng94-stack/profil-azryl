import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-6 border-t border-emerald-200/50 mt-6 flex flex-col items-center gap-1.5">
      <div className="flex items-center gap-1.5 text-xs text-slate-600">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span className="font-semibold tracking-wide">
          © 2026 AZRYL — All Rights Reserved
        </span>
      </div>
      
      <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 font-medium tracking-wider">
        <span>Made with passion by AZRYL</span>
      </p>
    </footer>
  );
};
