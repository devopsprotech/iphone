import React, { useState } from 'react';
import { FINISHES, Finish } from '../data/productData';
import { Play } from 'lucide-react';

interface HeroStageProps {
  onOpenBuy: () => void;
  onOpenFilmModal: () => void;
}

export const HeroStage: React.FC<HeroStageProps> = ({ onOpenBuy, onOpenFilmModal }) => {
  const [selectedFinish, setSelectedFinish] = useState<Finish>(FINISHES[0]);

  return (
    <section id="hero" className="relative bg-[#000000] pt-12 pb-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        {/* Status label: text-only Copper New #b64400 in SF Pro Text 12px/600, 16px line-height, -0.12px tracking */}
        <p className="text-[#b64400] text-[12px] leading-[16px] font-semibold tracking-apple-nav uppercase">
          New
        </p>

        {/* Product Name: SF Pro Display at 32px/600, 36px line-height */}
        <h2 className="text-[#f5f5f7] text-[28px] sm:text-[32px] leading-[36px] font-semibold tracking-apple-hero-name mt-1">
          iPhone 18 Pro
        </h2>

        {/* Display Statement: SF Pro Display 80px/600 with 84px line-height and -1.2px tracking */}
        <h1 className="text-[#f5f5f7] text-[44px] sm:text-[64px] md:text-[80px] leading-[1.05] font-semibold tracking-apple-display mt-3 max-w-[960px] mx-auto text-balance">
          Built for the impossible.
        </h1>

        {/* Subtitle statement */}
        <p className="text-[#86868b] text-[17px] sm:text-[20px] font-normal leading-relaxed mt-4 max-w-[680px] mx-auto">
          Titanium sculpture. Breakthrough A19 Pro silicon. All-new Camera Control and the first quad-pixel 48MP triple array.
        </p>

        {/* Photorealistic Hardware Stage */}
        <div className="relative my-8 sm:my-12 flex flex-col items-center justify-center">
          {/* Subtle colored aura matching current finish */}
          <div
            className="absolute w-[400px] sm:w-[600px] h-[300px] sm:h-[450px] rounded-full blur-[140px] opacity-25 pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: selectedFinish.borderHex }}
          />

          {/* Centered Phone Hardware Render */}
          <div className="relative z-10 max-w-[900px] w-full px-4 group">
            <img
              src="/src/assets/images/iphone18_hero_stage_1791539233165.jpg"
              alt={`iPhone 18 Pro in ${selectedFinish.name}`}
              className="w-full h-auto max-h-[620px] object-contain mx-auto rounded-[28px] transition-transform duration-500 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Finish selector: Interactive color swatches */}
          <div className="relative z-10 mt-6 flex flex-col items-center">
            <span className="text-[13px] text-[#86868b] font-medium tracking-wide mb-2.5">
              Available in {selectedFinish.name}
            </span>
            <div className="flex items-center space-x-3 bg-[#0e0e0e]/80 border border-[#333336] p-1.5 rounded-full backdrop-blur-md">
              {FINISHES.map((finish) => {
                const isSelected = selectedFinish.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    aria-label={`Select ${finish.name}`}
                    className={`w-6 h-6 rounded-full transition-all relative flex items-center justify-center ${
                      isSelected
                        ? 'ring-2 ring-[#0071e3] ring-offset-2 ring-offset-black scale-110'
                        : 'hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: finish.hex }}
                  />
                );
              })}
            </div>
            <p className="text-[12px] text-[#6e6e73] mt-2 italic max-w-sm">
              {selectedFinish.description}
            </p>
          </div>
        </div>

        {/* Lower Edge Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 sm:mt-10">
          {/* Blue Purchase Pill */}
          <button
            onClick={onOpenBuy}
            className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] sm:text-[14px] leading-[16px] font-normal tracking-apple-nav py-3 px-6 rounded-[170px] transition-all transform active:scale-95 shadow-lg shadow-[#0071e3]/20"
          >
            Buy iPhone 18 Pro
          </button>

          {/* Outlined Explore Pill */}
          <button
            onClick={onOpenFilmModal}
            className="w-full sm:w-auto border border-[#6e6e73] hover:border-[#86868b] bg-transparent text-[#f5f5f7] hover:text-white text-[14px] leading-[16px] font-normal tracking-apple-nav py-3 px-6 rounded-[9999px] transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#2997ff]" />
            Watch the announcement film
          </button>

          {/* Dark Pricing Capsule */}
          <div className="w-full sm:w-auto bg-[rgba(66,66,69,0.72)] text-[rgba(255,255,255,0.8)] text-[13px] leading-[1.3] px-5 py-2.5 rounded-[36px] border border-[#333336]/60 backdrop-blur-sm">
            From $999 or $41.62/mo. for 24 mo.<sup>2</sup>
          </div>
        </div>
      </div>
    </section>
  );
};
