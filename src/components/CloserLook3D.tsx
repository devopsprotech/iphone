import React, { useState } from 'react';
import { FINISHES, Finish } from '../data/productData';
import { Shield, Sparkles, Smartphone, Layers } from 'lucide-react';

export const CloserLook3D: React.FC = () => {
  const [selectedFinish, setSelectedFinish] = useState<Finish>(FINISHES[0]);
  const [activePerspective, setActivePerspective] = useState<'front' | 'back' | 'profile' | 'island'>('back');
  const [screenSize, setScreenSize] = useState<'6.3' | '6.9'>('6.3');

  const perspectives = [
    { id: 'back', label: 'Back & Camera Island', icon: Layers },
    { id: 'profile', label: 'Titanium Contour', icon: Shield },
    { id: 'front', label: 'Super Retina XDR', icon: Smartphone },
    { id: 'island', label: 'Camera Plateau', icon: Sparkles },
  ];

  return (
    <section id="design" className="bg-[#000000] py-24 px-4 border-t border-[#333336]/30">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Editorial Subheading */}
        <p className="text-[#86868b] text-[14px] uppercase font-semibold tracking-apple-nav">
          Aerospace Industrial Design
        </p>

        <h2 className="text-[#f5f5f7] text-[40px] sm:text-[64px] font-semibold tracking-apple-display mt-2 max-w-3xl mx-auto text-balance">
          Take a closer look.
        </h2>

        <p className="text-[#86868b] text-[17px] sm:text-[20px] max-w-2xl mx-auto mt-4 leading-relaxed">
          Crafted from Grade 5 titanium with our most refined micro-blasted texture yet. Lighter, stronger, and bonded to a 100% recycled aluminum thermal substructure.
        </p>

        {/* Perspective and Size Switchers */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <div className="bg-[#0e0e0e] border border-[#333336] p-1 rounded-full flex items-center">
            {perspectives.map((p) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePerspective(p.id as any)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                    activePerspective === p.id
                      ? 'bg-[#1d1d1f] text-[#f5f5f7] shadow-sm'
                      : 'text-[#86868b] hover:text-[#f5f5f7]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Size Pill */}
          <div className="bg-[#0e0e0e] border border-[#333336] p-1 rounded-full flex items-center">
            <button
              onClick={() => setScreenSize('6.3')}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                screenSize === '6.3'
                  ? 'bg-[#0071e3] text-white'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
              }`}
            >
              6.3″ Pro
            </button>
            <button
              onClick={() => setScreenSize('6.9')}
              className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                screenSize === '6.9'
                  ? 'bg-[#0071e3] text-white'
                  : 'text-[#86868b] hover:text-[#f5f5f7]'
              }`}
            >
              6.9″ Pro Max
            </button>
          </div>
        </div>

        {/* The Plinth Stage: Museum-like dark plinth */}
        <div className="relative mt-12 mb-8 bg-gradient-to-b from-[#0e0e0e] to-[#000000] border border-[#333336] rounded-[28px] p-6 sm:p-12 overflow-hidden min-h-[520px] flex flex-col items-center justify-center">
          {/* Subtle rim light aura */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none transition-colors duration-700"
            style={{ backgroundColor: selectedFinish.borderHex }}
          />

          {/* Interactive Inspection Canvas */}
          <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center">
            {activePerspective === 'back' && (
              <div className="relative animate-in fade-in zoom-in-95 duration-500">
                <img
                  src="/src/assets/images/iphone18_hero_stage_1791539233165.jpg"
                  alt={`iPhone 18 Pro ${selectedFinish.name}`}
                  className="max-h-[460px] w-auto object-contain mx-auto rounded-[24px] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 text-[13px] text-[#86868b]">
                  Precision textured matte back glass with infused titanium vapor deposition.
                </div>
              </div>
            )}

            {activePerspective === 'island' && (
              <div className="relative animate-in fade-in zoom-in-95 duration-500">
                <img
                  src="/src/assets/images/iphone18_camera_module_1791539253396.jpg"
                  alt="iPhone 18 Pro Camera Module"
                  className="max-h-[460px] w-auto object-contain mx-auto rounded-[24px] border border-[#333336]"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 text-[13px] text-[#86868b]">
                  Contoured titanium plateau engineered with anti-reflective 7-element sapphire lenses.
                </div>
              </div>
            )}

            {activePerspective === 'profile' && (
              <div className="relative animate-in fade-in zoom-in-95 duration-500">
                <img
                  src="/src/assets/images/iphone18_camera_control_button_1791539283562.jpg"
                  alt="Titanium Contour and Camera Control"
                  className="max-h-[460px] w-auto object-contain mx-auto rounded-[24px] border border-[#333336]"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 text-[13px] text-[#86868b]">
                  Curved titanium edges with tactile Camera Control and precision sound chambers.
                </div>
              </div>
            )}

            {activePerspective === 'front' && (
              <div className="relative animate-in fade-in zoom-in-95 duration-500 max-w-[420px] mx-auto bg-[#000000] p-3 rounded-[48px] border-4 border-[#333336] shadow-2xl">
                <div className="aspect-[9/19.5] rounded-[40px] bg-gradient-to-b from-[#1d1d1f] to-[#000000] p-4 flex flex-col justify-between relative overflow-hidden border border-[#333336]/60">
                  {/* Dynamic Island */}
                  <div className="w-28 h-7 bg-black rounded-full mx-auto flex items-center justify-between px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#161617] border border-[#333336]" />
                    <div className="w-2 h-2 rounded-full bg-[#0071e3]/80 animate-pulse" />
                  </div>
                  <div className="text-center my-auto">
                    <span className="text-[#86868b] text-[12px] block">Super Retina XDR</span>
                    <span className="text-[28px] font-semibold text-[#f5f5f7]">
                      {screenSize === '6.3' ? '6.3″ Pro' : '6.9″ Pro Max'}
                    </span>
                    <span className="text-[13px] text-[#2997ff] block mt-1">
                      120Hz ProMotion · 2,000 nits peak outdoor brightness
                    </span>
                  </div>
                  <div className="text-center pb-2 text-[11px] text-[#6e6e73]">
                    Ceramic Shield Gen 3 — 2x tougher than any smartphone glass
                  </div>
                </div>
                <div className="mt-4 text-[13px] text-[#86868b]">
                  Borders trimmed by 33% — the narrowest borders ever on any Apple product.
                </div>
              </div>
            )}
          </div>

          {/* Finish selector inside plinth */}
          <div className="mt-8 z-20 flex flex-col items-center">
            <span className="text-[12px] text-[#86868b] uppercase tracking-wider mb-2">
              Finish: <strong className="text-[#f5f5f7] normal-case">{selectedFinish.name}</strong>
            </span>
            <div className="flex items-center space-x-3 bg-black/60 p-2 rounded-full border border-[#333336]">
              {FINISHES.map((finish) => (
                <button
                  key={finish.id}
                  onClick={() => setSelectedFinish(finish)}
                  aria-label={finish.name}
                  className={`w-7 h-7 rounded-full transition-transform ${
                    selectedFinish.id === finish.id
                      ? 'ring-2 ring-[#0071e3] ring-offset-2 ring-offset-black scale-110'
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: finish.hex }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Feature Metric Tiles: 28px radius, #000000 fill, 28px/600 stats, Ash #86868b copy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-6 text-left">
            <span className="text-[#b64400] text-[12px] font-semibold tracking-apple-nav uppercase">
              Grade 5 Alloy
            </span>
            <h3 className="text-[#f5f5f7] text-[28px] leading-[1] font-semibold tracking-apple-stat mt-2">
              Highest strength-to-weight.
            </h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed mt-3">
              The same alloy used in spacecraft sent to Mars. Solid-state diffusion welding bonds the titanium band with an internal aluminum structure for optimum thermal dispersion.
            </p>
          </div>

          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-6 text-left">
            <span className="text-[#2997ff] text-[12px] font-semibold tracking-apple-nav uppercase">
              Narrowest Borders
            </span>
            <h3 className="text-[#f5f5f7] text-[28px] leading-[1] font-semibold tracking-apple-stat mt-2">
              Sub-1mm bezels.
            </h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed mt-3">
              Innovative Border Reduction Structure (BRS) technology routes wiring within display pixels, producing expansive 6.3″ and 6.9″ displays with edge-to-edge immersion.
            </p>
          </div>

          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-6 text-left">
            <span className="text-[#ffd500] text-[12px] font-semibold tracking-apple-nav uppercase">
              Durability
            </span>
            <h3 className="text-[#f5f5f7] text-[28px] leading-[1] font-semibold tracking-apple-stat mt-2">
              Ceramic Shield Gen 3.
            </h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed mt-3">
              Nano-crystalline ceramic matrix embedded directly into glass creates 4x better drop performance and unmatched scratch resilience. IP68 water resistance up to 6 meters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
