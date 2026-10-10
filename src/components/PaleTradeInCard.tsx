import React, { useState } from 'react';
import { TRADE_IN_DEVICES, TradeInOption } from '../data/productData';
import { Leaf, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';

interface PaleTradeInCardProps {
  onOpenBuy: () => void;
}

export const PaleTradeInCard: React.FC<PaleTradeInCardProps> = ({ onOpenBuy }) => {
  const [selectedTradeIn, setSelectedTradeIn] = useState<TradeInOption>(TRADE_IN_DEVICES[2]);

  return (
    <section className="bg-[#000000] py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Pale Comparison Surface: #ffffff fill, #1d1d1f text, 28px radius, no shadow */}
        <div className="bg-[#ffffff] text-[#1d1d1f] rounded-[28px] p-6 sm:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Trade In Calculator */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 text-[#0066cc] text-[13px] font-semibold uppercase tracking-apple-nav">
                <RefreshCw className="w-3.5 h-3.5" />
                Apple Trade In
              </div>

              <h2 className="text-[32px] sm:text-[44px] font-semibold text-[#1d1d1f] tracking-apple-display leading-tight">
                Trade in your smartphone. Save up to $650.<sup>1</sup>
              </h2>

              <p className="text-[#6e6e73] text-[16px] leading-relaxed">
                Get credit toward a new iPhone 18 Pro when you trade in your eligible iPhone. It’s good for you and good for the planet.
              </p>

              {/* Trade in selector */}
              <div className="p-4 bg-[#f5f5f7] rounded-[20px] border border-gray-200 space-y-3">
                <label htmlFor="trade-in-select" className="block text-[13px] font-medium text-[#1d1d1f]">
                  Estimate your trade-in value:
                </label>
                <select
                  id="trade-in-select"
                  value={selectedTradeIn.model}
                  onChange={(e) => {
                    const match = TRADE_IN_DEVICES.find((d) => d.model === e.target.value);
                    if (match) setSelectedTradeIn(match);
                  }}
                  className="w-full bg-white text-[#1d1d1f] border border-gray-300 rounded-[12px] p-3 text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#0066cc]"
                >
                  {TRADE_IN_DEVICES.map((d) => (
                    <option key={d.model} value={d.model}>
                      {d.model} {d.credit > 0 ? `(Up to $${d.credit})` : ''}
                    </option>
                  ))}
                </select>

                <div className="pt-2 flex items-baseline justify-between">
                  <span className="text-[13px] text-[#6e6e73]">Your estimated trade-in credit:</span>
                  <span className="text-[24px] font-bold text-[#1d1d1f]">
                    ${selectedTradeIn.credit}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBuy}
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white py-3 px-6 rounded-[170px] text-[14px] font-normal tracking-apple-nav transition cursor-pointer"
                >
                  Apply to iPhone 18 Pro
                </button>
                <a
                  href="#trade-in"
                  className="text-[#0066cc] hover:underline text-[14px] font-medium inline-flex items-center gap-1"
                >
                  Learn how Apple Trade In works <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Environmental Impact / Apple 2030 */}
            <div className="bg-[#f5f5f7] rounded-[24px] p-6 sm:p-8 space-y-6 border border-gray-200">
              <div className="flex items-center gap-2 text-emerald-700 text-[13px] font-semibold uppercase">
                <Leaf className="w-4 h-4 text-emerald-600" />
                Apple 2030
              </div>

              <h3 className="text-[26px] font-semibold text-[#1d1d1f] tracking-apple-hero-name">
                A monumental step toward carbon neutrality.
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[12px] font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#1d1d1f]">100% Recycled Cobalt</h4>
                    <p className="text-[13px] text-[#6e6e73]">Used in the iPhone 18 Pro battery — a first for our supply chain.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[12px] font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#1d1d1f]">100% Recycled Aluminum Substructure</h4>
                    <p className="text-[13px] text-[#6e6e73]">Internal chassis made with 100% recycled aluminum bonded to titanium.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[12px] font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#1d1d1f]">100% Fiber-Based Packaging</h4>
                    <p className="text-[13px] text-[#6e6e73]">Zero plastic packaging and compact box size to reduce freight emissions.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <a
                  href="#environment"
                  className="text-[#0066cc] hover:underline text-[13px] font-medium inline-flex items-center gap-1"
                >
                  Explore Apple’s environmental progress <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
