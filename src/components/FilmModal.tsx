import React from 'react';
import { X, Volume2, Maximize, Play } from 'lucide-react';

interface FilmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilmModal: React.FC<FilmModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#0e0e0e] border border-[#333336] rounded-[28px] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-[#333336]">
          <div className="flex items-center gap-2">
            <span className="text-[#0071e3] text-[12px] font-semibold uppercase tracking-wider">
              Apple Special Event
            </span>
            <span className="text-white/40">·</span>
            <span className="text-[14px] text-[#f5f5f7] font-medium">
              Introducing iPhone 18 Pro
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#333336]/60 hover:bg-[#333336] text-[#86868b] hover:text-[#f5f5f7] transition"
            aria-label="Close Film"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Film Canvas */}
        <div className="relative aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/src/assets/images/iphone18_action_cinematic_1791539297522.jpg"
            alt="Cinematic Still"
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />

          {/* Film Center Titles */}
          <div className="absolute text-center p-6 z-10 max-w-xl">
            <span className="text-[#b64400] text-[12px] uppercase font-semibold tracking-apple-nav">
              Shot on iPhone 18 Pro
            </span>
            <h3 className="text-[32px] sm:text-[44px] font-semibold text-white tracking-apple-hero-name mt-2">
              The Edge of Cinema
            </h3>
            <p className="text-white/80 text-[14px] sm:text-[16px] mt-2">
              Captured in full 4K 120 fps Dolby Vision HDR using the 48MP Fusion and 5x Telephoto optics.
            </p>
          </div>

          {/* Player Controls Bar */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#1d1d1f]/90 backdrop-blur-md rounded-[16px] p-3 flex items-center justify-between border border-[#333336]">
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
              <div className="text-[12px] text-white/80 font-mono">
                01:42 / 03:15
              </div>
            </div>

            {/* Fake progress bar */}
            <div className="flex-1 mx-4 h-1.5 bg-[#333336] rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-[#0071e3]" />
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <button className="hover:text-white"><Volume2 className="w-4 h-4" /></button>
              <button className="hover:text-white"><Maximize className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
