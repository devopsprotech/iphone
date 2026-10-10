import React, { useState } from 'react';
import { Cpu, Zap, Gamepad2, Sparkles } from 'lucide-react';

export const ChipSection: React.FC = () => {
  const [activeBenchmark, setActiveBenchmark] = useState<'gpu' | 'cpu' | 'npu'>('gpu');

  return (
    <section id="chip" className="bg-[#000000] py-24 px-4 border-t border-[#333336]/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2997ff] text-[14px] uppercase font-semibold tracking-apple-nav">
            Apple Silicon
          </p>
          <h2 className="text-[#f5f5f7] text-[40px] sm:text-[64px] font-semibold tracking-apple-display mt-2 leading-tight">
            A19 Pro. Monstrous performance.
          </h2>
          <p className="text-[#86868b] text-[17px] sm:text-[20px] mt-4 leading-relaxed">
            A ferocious chip built on the bleeding edge 2-nanometer architecture. Delivering unprecedented power efficiency, jaw-dropping graphics fidelity, and generative AI capability directly on device.
          </p>
        </div>

        {/* Hero Chip Plinth Banner */}
        <div className="relative rounded-[28px] overflow-hidden bg-[#0e0e0e] border border-[#333336] p-6 sm:p-12 mb-12 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
              <img
                src="/src/assets/images/iphone18_chip_a19pro_1791539267435.jpg"
                alt="Apple A19 Pro Bionic Chip"
                className="w-[340px] sm:w-[420px] h-auto rounded-[24px] border border-[#333336] shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-[#2997ff] text-[13px] font-semibold uppercase tracking-apple-nav">
              2nm Microarchitecture
            </span>
            <h3 className="text-[#f5f5f7] text-[32px] sm:text-[40px] font-semibold tracking-apple-hero-name leading-tight">
              A GPU class apart.
            </h3>
            <p className="text-[#86868b] text-[16px] leading-relaxed">
              With a 6-core pro GPU, games look and feel mesmerizingly lifelike. Hardware-accelerated ray tracing runs twice as fast as the previous generation, rendering realistic light reflections, refractive waters, and global illumination.
            </p>

            {/* Interactive Benchmark Selector */}
            <div className="bg-[#1d1d1f] p-4 rounded-[20px] border border-[#333336] space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveBenchmark('gpu')}
                  className={`flex-1 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                    activeBenchmark === 'gpu'
                      ? 'bg-[#0071e3] text-white'
                      : 'text-[#86868b] hover:text-[#f5f5f7]'
                  }`}
                >
                  Ray Tracing (GPU)
                </button>
                <button
                  onClick={() => setActiveBenchmark('cpu')}
                  className={`flex-1 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                    activeBenchmark === 'cpu'
                      ? 'bg-[#0071e3] text-white'
                      : 'text-[#86868b] hover:text-[#f5f5f7]'
                  }`}
                >
                  CPU Speed
                </button>
                <button
                  onClick={() => setActiveBenchmark('npu')}
                  className={`flex-1 py-1.5 rounded-lg text-[13px] font-medium transition-all ${
                    activeBenchmark === 'npu'
                      ? 'bg-[#0071e3] text-white'
                      : 'text-[#86868b] hover:text-[#f5f5f7]'
                  }`}
                >
                  Neural Engine (AI)
                </button>
              </div>

              {/* Progress Comparison Bar */}
              <div className="pt-2">
                <div className="flex justify-between text-[12px] text-[#86868b] mb-1">
                  <span className="text-[#f5f5f7] font-medium">A19 Pro</span>
                  <span className="text-[#2997ff] font-semibold">
                    {activeBenchmark === 'gpu' ? '2.0x faster' : activeBenchmark === 'cpu' ? '+25% faster' : '35 TOPS (2x faster)'}
                  </span>
                </div>
                <div className="w-full bg-[#000000] h-3 rounded-full overflow-hidden border border-[#333336]">
                  <div
                    className="bg-[#0071e3] h-full rounded-full transition-all duration-700"
                    style={{
                      width: activeBenchmark === 'gpu' ? '100%' : activeBenchmark === 'cpu' ? '92%' : '98%',
                    }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-[#6e6e73] mt-2">
                  <span>Previous Gen (A17/A18)</span>
                  <span>Baseline</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Metric Tiles: Use #000000 fill and 28px radius */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tile 1 */}
          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-8 text-left transition-transform hover:-translate-y-1">
            <Gamepad2 className="w-7 h-7 text-[#2997ff] mb-4" />
            <span className="text-[#ffd500] text-[12px] font-semibold uppercase tracking-apple-nav">
              Console-Grade Gaming
            </span>
            <h3 className="text-[#f5f5f7] text-[28px] leading-[1] font-semibold tracking-apple-stat mt-2">
              6-Core Pro GPU
            </h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed mt-3">
              Hardware-accelerated mesh shading and dynamic caching optimize memory utilization, allowing console releases to run with consistent 60fps frame rates.
            </p>
          </div>

          {/* Tile 2 */}
          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-8 text-left transition-transform hover:-translate-y-1">
            <Cpu className="w-7 h-7 text-[#2997ff] mb-4" />
            <span className="text-[#2997ff] text-[12px] font-semibold uppercase tracking-apple-nav">
              2 Performance + 4 Efficiency
            </span>
            <h3 className="text-[#f5f5f7] text-[28px] leading-[1] font-semibold tracking-apple-stat mt-2">
              Fastest Mobile CPU
            </h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed mt-3">
              Complex multi-threaded workloads complete in seconds, while daily browsing and media consume up to 20% less power than previous Pro generations.
            </p>
          </div>

          {/* Tile 3 */}
          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-8 text-left transition-transform hover:-translate-y-1">
            <Sparkles className="w-7 h-7 text-[#ffd500] mb-4" />
            <span className="text-[#b64400] text-[12px] font-semibold uppercase tracking-apple-nav">
              On-Device Intelligence
            </span>
            <h3 className="text-[#f5f5f7] text-[28px] leading-[1] font-semibold tracking-apple-stat mt-2">
              16-Core Neural Engine
            </h3>
            <p className="text-[#86868b] text-[14px] leading-relaxed mt-3">
              Running advanced large language and diffusion models entirely on silicon. Private, confidential, and ultra-responsive without data leaving the phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
