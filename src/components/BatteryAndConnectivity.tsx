import React from 'react';
import { BatteryCharging, Wifi, ShieldAlert, Radio } from 'lucide-react';

export const BatteryAndConnectivity: React.FC = () => {
  return (
    <section id="battery" className="bg-[#000000] py-24 px-4 border-t border-[#333336]/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-emerald-400 text-[14px] uppercase font-semibold tracking-apple-nav">
            Endurance & Connectivity
          </p>
          <h2 className="text-[#f5f5f7] text-[40px] sm:text-[64px] font-semibold tracking-apple-display mt-2 leading-tight">
            Battery life that goes beyond.
          </h2>
          <p className="text-[#86868b] text-[17px] sm:text-[20px] mt-4 leading-relaxed">
            Even with so many monumental new capabilities, iPhone 18 Pro still delivers staggering all-day battery life. Optimized internal architecture leaves room for a denser battery.
          </p>
        </div>

        {/* Battery Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 18 Pro Max Card */}
          <div className="bg-[#0e0e0e] border border-[#333336] rounded-[28px] p-8 sm:p-12 text-left relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[#86868b] text-[14px] font-medium">iPhone 18 Pro Max</span>
              <BatteryCharging className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="mt-6">
              <span className="text-[#f5f5f7] text-[64px] sm:text-[80px] font-semibold tracking-apple-display leading-none block">
                33 hrs
              </span>
              <span className="text-[16px] text-emerald-400 font-medium block mt-2">
                Up to 33 hours video playback<sup>3</sup>
              </span>
              <p className="text-[#86868b] text-[14px] mt-4 leading-relaxed max-w-md">
                Our longest battery life ever on any iPhone. Stream your favorite series or record high-bitrate ProRes 4K footage without checking the battery percentage.
              </p>
            </div>
          </div>

          {/* 18 Pro Card */}
          <div className="bg-[#0e0e0e] border border-[#333336] rounded-[28px] p-8 sm:p-12 text-left relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[#86868b] text-[14px] font-medium">iPhone 18 Pro</span>
              <BatteryCharging className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="mt-6">
              <span className="text-[#f5f5f7] text-[64px] sm:text-[80px] font-semibold tracking-apple-display leading-none block">
                27 hrs
              </span>
              <span className="text-[16px] text-emerald-400 font-medium block mt-2">
                Up to 27 hours video playback<sup>3</sup>
              </span>
              <p className="text-[#86868b] text-[14px] mt-4 leading-relaxed max-w-md">
                Up to 4 more hours than previous models in a remarkably compact, featherweight titanium form factor. Fast-charge up to 50% in approximately 30 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Connectivity 3-Column Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-6 text-left">
            <Radio className="w-6 h-6 text-[#2997ff] mb-3" />
            <h4 className="text-[#f5f5f7] text-[20px] font-semibold">
              Emergency SOS via satellite
            </h4>
            <p className="text-[#86868b] text-[14px] mt-2 leading-relaxed">
              Connect to satellites hundreds of miles above Earth when cellular and Wi-Fi coverage are unavailable. Send text messages and request roadside dispatch.
            </p>
          </div>

          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-6 text-left">
            <Wifi className="w-6 h-6 text-[#2997ff] mb-3" />
            <h4 className="text-[#f5f5f7] text-[20px] font-semibold">
              Wi-Fi 7 with Multi-Link
            </h4>
            <p className="text-[#86868b] text-[14px] mt-2 leading-relaxed">
              Supports 320 MHz channels on 6 GHz frequency with ultra-low latency for cloud gaming, high-throughput downloads, and seamless 8K video streaming.
            </p>
          </div>

          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-6 text-left">
            <ShieldAlert className="w-6 h-6 text-[#ffd500] mb-3" />
            <h4 className="text-[#f5f5f7] text-[20px] font-semibold">
              Crash Detection
            </h4>
            <p className="text-[#86868b] text-[14px] mt-2 leading-relaxed">
              High g-force accelerometer and dual gyroscopes detect severe car crashes and automatically connect you to emergency services if you are unable to respond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
