import React, { useState } from 'react';
import { COMPARISON_DEVICES, ComparisonDevice } from '../data/productData';
import { Check, Minus, ChevronDown } from 'lucide-react';

export const CompareSection: React.FC = () => {
  const [selectedCompId, setSelectedCompId] = useState<string>('iphone-16-pro');
  const targetDevice = COMPARISON_DEVICES['iphone-18-pro'];
  const compDevice: ComparisonDevice = COMPARISON_DEVICES[selectedCompId] || COMPARISON_DEVICES['iphone-16-pro'];

  return (
    <section id="compare" className="bg-[#000000] py-24 px-4 border-t border-[#333336]/30">
      <div className="max-w-[1200px] mx-auto">
        {/* Parent Comparison Panel: #1d1d1f with 28px radius and no shadow */}
        <div className="bg-[#1d1d1f] rounded-[28px] p-6 sm:p-12 border border-[#333336]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#2997ff] text-[13px] font-semibold uppercase tracking-apple-nav">
              Compare Models
            </p>
            {/* SF Pro Display 40px or larger for comparison statement */}
            <h2 className="text-[#f5f5f7] text-[36px] sm:text-[48px] font-semibold tracking-apple-display mt-2 leading-tight">
              See how your iPhone compares to iPhone 18 Pro.
            </h2>
            <p className="text-[#86868b] text-[16px] mt-3">
              Choose your current device to see everything you gain by upgrading.
            </p>
          </div>

          {/* Device Selector Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Current Device Picked: iPhone 18 Pro */}
            <div className="bg-[#000000] rounded-[28px] p-6 text-center border border-[#333336]">
              <span className="text-[#b64400] text-[12px] font-semibold uppercase">Latest Model</span>
              <h3 className="text-[#f5f5f7] text-[24px] font-semibold mt-1">
                iPhone 18 Pro
              </h3>
              <p className="text-[#86868b] text-[13px] mt-1">Starting at $999</p>
            </div>

            {/* Device Selector Input: rgba(255,255,255,0.04) fill, 1px #6e6e73 border, #f5f5f7 text, 980px radius */}
            <div className="bg-[#000000] rounded-[28px] p-6 text-center border border-[#333336] flex flex-col justify-center">
              <label htmlFor="device-selector" className="text-[#86868b] text-[12px] font-medium uppercase mb-2 block">
                Select your current iPhone
              </label>
              <div className="relative inline-block w-full">
                <select
                  id="device-selector"
                  value={selectedCompId}
                  onChange={(e) => setSelectedCompId(e.target.value)}
                  className="w-full appearance-none bg-[rgba(255,255,255,0.04)] border border-[#6e6e73] text-[#f5f5f7] rounded-[980px] py-3 pl-6 pr-11 text-[15px] font-medium focus:outline-none focus:ring-1 focus:ring-[#0071e3] focus:border-[#0071e3] transition cursor-pointer"
                >
                  <option value="iphone-16-pro" className="bg-[#1d1d1f] text-white">iPhone 16 Pro</option>
                  <option value="iphone-15-pro" className="bg-[#1d1d1f] text-white">iPhone 15 Pro</option>
                  <option value="iphone-13-pro" className="bg-[#1d1d1f] text-white">iPhone 13 Pro</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#86868b] absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Multi-column Grid of Black 28px Feature Tiles */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Row 1: Apple Silicon */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60">
                <span className="text-[12px] text-[#2997ff] font-semibold uppercase">Chipset</span>
                <p className="text-[#f5f5f7] text-[16px] font-medium mt-1">{targetDevice.chip}</p>
              </div>
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60">
                <span className="text-[12px] text-[#86868b] font-semibold uppercase">{compDevice.name} Chip</span>
                <p className="text-[#86868b] text-[16px] font-medium mt-1">{compDevice.chip}</p>
              </div>
            </div>

            {/* Row 2: Camera System */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60">
                <span className="text-[12px] text-[#ffd500] font-semibold uppercase">Camera Resolution</span>
                <p className="text-[#f5f5f7] text-[16px] font-medium mt-1">{targetDevice.camera}</p>
                <span className="text-[13px] text-[#2997ff] block mt-1">{targetDevice.zoom}</span>
              </div>
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60">
                <span className="text-[12px] text-[#86868b] font-semibold uppercase">{compDevice.name} Camera</span>
                <p className="text-[#86868b] text-[16px] font-medium mt-1">{compDevice.camera}</p>
                <span className="text-[13px] text-[#86868b] block mt-1">{compDevice.zoom}</span>
              </div>
            </div>

            {/* Row 3: Camera Control Button */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60 flex items-center justify-between">
                <div>
                  <span className="text-[12px] text-[#2997ff] font-semibold uppercase">Camera Control</span>
                  <p className="text-[#f5f5f7] text-[16px] font-medium mt-1">Tactile sapphire sensor</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#0071e3]/20 flex items-center justify-center text-[#2997ff]">
                  <Check className="w-4 h-4" />
                </div>
              </div>
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60 flex items-center justify-between">
                <div>
                  <span className="text-[12px] text-[#86868b] font-semibold uppercase">Camera Control</span>
                  <p className="text-[#86868b] text-[16px] font-medium mt-1">
                    {compDevice.cameraControl ? 'Supported' : 'Not available'}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#86868b]">
                  {compDevice.cameraControl ? <Check className="w-4 h-4" /> : <Minus className="w-4 h-4" />}
                </div>
              </div>
            </div>

            {/* Row 4: Battery Life */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60">
                <span className="text-[12px] text-emerald-400 font-semibold uppercase">Video Playback</span>
                <p className="text-[#f5f5f7] text-[16px] font-medium mt-1">{targetDevice.battery}</p>
              </div>
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60">
                <span className="text-[12px] text-[#86868b] font-semibold uppercase">{compDevice.name} Video</span>
                <p className="text-[#86868b] text-[16px] font-medium mt-1">{compDevice.battery}</p>
              </div>
            </div>

            {/* Row 5: Chassis & Materials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60">
                <span className="text-[12px] text-[#b64400] font-semibold uppercase">Materials</span>
                <p className="text-[#f5f5f7] text-[16px] font-medium mt-1">{targetDevice.chassis}</p>
              </div>
              <div className="bg-[#000000] rounded-[28px] p-6 border border-[#333336]/60">
                <span className="text-[12px] text-[#86868b] font-semibold uppercase">{compDevice.name} Materials</span>
                <p className="text-[#86868b] text-[16px] font-medium mt-1">{compDevice.chassis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
