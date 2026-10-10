import React, { useState } from 'react';
import { Sparkles, Wand2, Type, MessageSquareCode, ShieldCheck } from 'lucide-react';

export const AppleIntelligence: React.FC = () => {
  const [cleanedUp, setCleanedUp] = useState(false);
  const [writingTone, setWritingTone] = useState<'original' | 'professional' | 'concise' | 'friendly'>('original');

  const writingSamples = {
    original: "Hey team, just wanted to check in about the project timeline and see if everyone is done with the drafts so we can wrap things up ASAP.",
    professional: "Dear team, please provide an update regarding your progress on the draft deliverables so we may finalize the project schedule accordingly.",
    concise: "Team: Please submit draft deliverables by end-of-day so we can finalize the timeline.",
    friendly: "Hi everyone! Hope your week is going great. Whenever you have a moment, please share your draft progress so we can celebrate wrapping this up together!",
  };

  return (
    <section id="intelligence" className="bg-[#000000] py-24 px-4 border-t border-[#333336]/30 relative overflow-hidden">
      {/* Apple Intelligence Chromatic Edge Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-orange-500/10 via-purple-500/15 to-blue-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-[14px] uppercase font-semibold tracking-apple-nav">
            <Sparkles className="w-4 h-4 text-purple-400 inline" />
            Apple Intelligence
          </div>
          <h2 className="text-[#f5f5f7] text-[40px] sm:text-[64px] font-semibold tracking-apple-display mt-2 leading-tight">
            AI with a personal touch.
          </h2>
          <p className="text-[#86868b] text-[17px] sm:text-[20px] mt-4 leading-relaxed">
            Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. Grounded in your personal context with groundbreaking privacy protection.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Clean Up Interactive Feature */}
          <div className="bg-[#1d1d1f] border border-[#333336] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[#2997ff] text-[12px] font-semibold uppercase tracking-apple-nav">
                Photos App
              </span>
              <h3 className="text-[#f5f5f7] text-[28px] font-semibold tracking-apple-hero-name mt-1">
                Clean Up in Photos.
              </h3>
              <p className="text-[#86868b] text-[14px] mt-2">
                Remove unwanted background objects, distracting bystanders, or reflections with a single tap, without altering the authenticity of your subject.
              </p>
            </div>

            {/* Interactive Clean Up Simulator */}
            <div className="relative mt-6 rounded-[20px] overflow-hidden aspect-[16/10] bg-black border border-[#333336]">
              <img
                src="/src/assets/images/iphone18_action_cinematic_1791539297522.jpg"
                alt="Clean Up Demo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Distracting element simulation */}
              {!cleanedUp && (
                <div
                  onClick={() => setCleanedUp(true)}
                  className="absolute bottom-16 right-16 cursor-pointer bg-white/20 border-2 border-dashed border-white/80 backdrop-blur-xs rounded-xl p-3 text-white text-[12px] font-medium shadow-lg hover:scale-105 transition-all animate-pulse"
                >
                  <Wand2 className="w-3.5 h-3.5 inline mr-1 text-[#ffd500]" />
                  Tap to clean up
                </div>
              )}

              {cleanedUp && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center animate-in fade-in duration-300">
                  <div className="bg-black/80 border border-white/20 px-4 py-2 rounded-full text-white text-[13px] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    Background cleanly reconstructed
                  </div>
                  <button
                    onClick={() => setCleanedUp(false)}
                    className="mt-3 text-[12px] text-[#2997ff] hover:underline"
                  >
                    Reset preview
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-[13px] text-[#86868b]">
              <span>Powered by on-device diffusion model</span>
              <button
                onClick={() => setCleanedUp(!cleanedUp)}
                className="text-[#2997ff] hover:underline"
              >
                {cleanedUp ? 'Show Original' : 'Simulate Clean Up'}
              </button>
            </div>
          </div>

          {/* Card 2: Writing Tools Interactive Feature */}
          <div className="bg-[#1d1d1f] border border-[#333336] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[#ffd500] text-[12px] font-semibold uppercase tracking-apple-nav">
                Systemwide Language
              </span>
              <h3 className="text-[#f5f5f7] text-[28px] font-semibold tracking-apple-hero-name mt-1">
                Writing Tools. Express yourself.
              </h3>
              <p className="text-[#86868b] text-[14px] mt-2">
                Proofread your writing, rewrite different versions until the tone is just right, and summarize long documents in Mail, Notes, and third-party apps.
              </p>
            </div>

            {/* Interactive Tone Switcher */}
            <div className="mt-6 bg-[#000000] border border-[#333336] rounded-[20px] p-5">
              <div className="flex flex-wrap gap-2 mb-4">
                {(['original', 'professional', 'concise', 'friendly'] as const).map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setWritingTone(tone)}
                    className={`px-3 py-1.5 rounded-full text-[12px] font-medium capitalize transition-all ${
                      writingTone === tone
                        ? 'bg-[#0071e3] text-white'
                        : 'bg-[#1d1d1f] text-[#86868b] hover:text-[#f5f5f7]'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-[#0e0e0e] rounded-[14px] border border-[#333336]/60 min-h-[90px] flex items-center">
                <p className="text-[14px] text-[#f5f5f7] leading-relaxed transition-all duration-300">
                  {writingSamples[writingTone]}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-[13px] text-[#86868b]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Private Cloud Compute ensures your data is never stored or shared with Apple.</span>
            </div>
          </div>
        </div>

        {/* Siri and Privacy Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-6 sm:p-8">
            <MessageSquareCode className="w-6 h-6 text-[#2997ff] mb-3" />
            <h4 className="text-[#f5f5f7] text-[20px] font-semibold">
              A newly enlightened Siri.
            </h4>
            <p className="text-[#86868b] text-[14px] mt-2 leading-relaxed">
              With richer language understanding and awareness of your personal context, Siri can take action across hundreds of your favorite apps while keeping your conversations strictly private.
            </p>
          </div>

          <div className="bg-[#000000] border border-[#333336] rounded-[28px] p-6 sm:p-8">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="text-[#f5f5f7] text-[20px] font-semibold">
              Extraordinary privacy standards.
            </h4>
            <p className="text-[#86868b] text-[14px] mt-2 leading-relaxed">
              When processing complex tasks through Private Cloud Compute, servers run on Apple silicon with verifiable cryptographic isolation—meaning nobody, not even Apple, can access your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
