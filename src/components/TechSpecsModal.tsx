import React from 'react';
import { X, Check } from 'lucide-react';

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechSpecsModal: React.FC<TechSpecsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const specCategories = [
    {
      title: 'Finish & Construction',
      specs: [
        { label: 'Materials', value: 'Grade 5 aerospace titanium design with micro-blasted textured matte glass back' },
        { label: 'Colors', value: 'Cosmic Burgundy, Natural Titanium, Desert Titanium, Black Titanium, White Titanium' },
        { label: 'Front Protection', value: 'Ceramic Shield Gen 3 with dual-ion exchange glass' },
        { label: 'Substructure', value: '100% recycled aluminum thermal dissipation frame' },
      ],
    },
    {
      title: 'Display',
      specs: [
        { label: 'Sizes', value: 'iPhone 18 Pro: 6.3-inch (diagonal) OLED · iPhone 18 Pro Max: 6.9-inch OLED' },
        { label: 'Resolution', value: 'Pro: 2622x1206 at 460 ppi · Pro Max: 2868x1320 at 460 ppi' },
        { label: 'Refresh Rate', value: 'ProMotion technology with adaptive refresh rates from 1Hz to 120Hz' },
        { label: 'Brightness', value: '1,000 nits typical, 1,600 nits peak HDR, 2,000 nits peak outdoor, 1 nit minimum' },
      ],
    },
    {
      title: 'Silicon & Processing',
      specs: [
        { label: 'Chip', value: 'A19 Pro chip built on next-gen 2-nanometer architecture' },
        { label: 'CPU', value: '6-core CPU with 2 performance cores and 4 efficiency cores' },
        { label: 'GPU', value: '6-core GPU with hardware-accelerated ray tracing and mesh shading' },
        { label: 'Neural Engine', value: '16-core Neural Engine executing 35 trillion operations per second' },
      ],
    },
    {
      title: 'Pro Camera System',
      specs: [
        { label: '48MP Fusion (Main)', value: '24mm, ƒ/1.78, 2nd-gen sensor-shift OIS, 100% Focus Pixels, 24MP & 48MP output' },
        { label: '48MP Ultra Wide', value: '13mm, ƒ/2.2, 120° FOV, Hybrid Focus Pixels, Macro autofocus' },
        { label: '48MP 5x Telephoto', value: '120mm, ƒ/2.8, 3D sensor-shift OIS tetraprism design' },
        { label: 'Camera Control', value: 'Tactile sapphire crystal button with two-stage force sensor & capacitive swipe' },
        { label: 'Video Recording', value: '4K Dolby Vision video recording at 24, 25, 30, 60, 100, or 120 fps' },
      ],
    },
    {
      title: 'Power & Battery',
      specs: [
        { label: 'Video Playback', value: 'Pro: Up to 27 hours · Pro Max: Up to 33 hours' },
        { label: 'Audio Playback', value: 'Pro: Up to 85 hours · Pro Max: Up to 105 hours' },
        { label: 'Charging', value: 'MagSafe wireless charging up to 25W with 30W adapter; USB-C fast charge 50% in 30 min' },
      ],
    },
    {
      title: 'Cellular & Wireless',
      specs: [
        { label: 'Wireless', value: 'Wi-Fi 7 (802.11be) with 2x2 MIMO, Bluetooth 5.4, Thread networking' },
        { label: 'Cellular', value: '5G (sub-6 GHz and mmWave) with 4x4 MIMO, Gigabit LTE' },
        { label: 'Satellite', value: 'Emergency SOS via satellite, Roadside Assistance via satellite' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#161617] text-[#f5f5f7] border border-[#333336] rounded-[28px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <div className="sticky top-0 z-20 bg-[#161617]/95 backdrop-blur-md px-6 py-4 border-b border-[#333336] flex items-center justify-between">
          <div>
            <span className="text-[#2997ff] text-[12px] font-semibold uppercase tracking-wider">
              Technical Specifications
            </span>
            <h2 className="text-[22px] font-semibold text-[#f5f5f7]">
              iPhone 18 Pro & iPhone 18 Pro Max
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#333336]/60 hover:bg-[#333336] text-[#86868b] hover:text-[#f5f5f7] transition"
            aria-label="Close Specs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 divide-y divide-[#333336]">
          {specCategories.map((cat) => (
            <div key={cat.title} className="py-6 first:pt-0 last:pb-0">
              <h3 className="text-[18px] font-semibold text-[#f5f5f7] mb-4">
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.specs.map((item) => (
                  <div key={item.label} className="bg-[#0e0e0e] p-4 rounded-[16px] border border-[#333336]/60">
                    <span className="text-[12px] text-[#86868b] font-medium block">
                      {item.label}
                    </span>
                    <span className="text-[14px] text-[#f5f5f7] block mt-1 leading-snug">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
