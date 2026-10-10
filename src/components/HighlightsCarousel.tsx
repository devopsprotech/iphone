import React, { useState, useEffect } from 'react';
import { Play, Pause, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

const HIGHLIGHT_SLIDES: Slide[] = [
  {
    id: 1,
    tag: 'Cinematography',
    title: '4K 120 fps Dolby Vision. Hollywood in your palm.',
    description: 'Capture cinematic motion with fluid 120 frames per second in 4K Dolby Vision. Adjust playback speed in post to 24 fps for standard film cadence.',
    image: '/src/assets/images/iphone18_action_cinematic_1791539297522.jpg',
    badge: 'Pro Res & Log 2',
  },
  {
    id: 2,
    tag: 'Interface Innovation',
    title: 'Camera Control. Tactile precision at your fingertip.',
    description: 'A flush sapphire crystal button with haptic feedback lets you slide through focal lengths, lock exposure, and capture without lifting a finger.',
    image: '/src/assets/images/iphone18_camera_control_button_1791539283562.jpg',
  },
  {
    id: 3,
    tag: 'Optics System',
    title: 'All 48MP lenses. Uncompromised sharpness across every focal length.',
    description: '48MP Fusion, 48MP Ultra Wide with advanced macro autofocus, and 48MP 5x Telephoto with 120mm focal reach.',
    image: '/src/assets/images/iphone18_camera_module_1791539253396.jpg',
  },
  {
    id: 4,
    tag: 'Silicon Mastery',
    title: 'A19 Pro. Monstrous graphics and generative intelligence.',
    description: 'Built on the 2nm architecture with 6-core GPU, next-gen hardware ray tracing, and 35 TOPS Neural Engine.',
    image: '/src/assets/images/iphone18_chip_a19pro_1791539267435.jpg',
  },
];

export const HighlightsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HIGHLIGHT_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const active = HIGHLIGHT_SLIDES[currentSlide];

  return (
    <section id="highlights" className="bg-[#000000] py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#333336]/40">
          <div>
            <h2 className="text-[#f5f5f7] text-[36px] sm:text-[48px] font-semibold tracking-apple-display">
              Get the highlights.
            </h2>
            <p className="text-[#86868b] text-[16px] mt-1">
              Explore the biggest leaps ever engineered into iPhone.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <a href="#camera" className="text-[#2997ff] text-[14px] hover:underline inline-flex items-center">
              Explore full specs <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Highlights Media Frame: 28px radius, no drop shadow, overlay #f5f5f7 */}
        <div className="relative rounded-[28px] overflow-hidden bg-[#0e0e0e] border border-[#333336] aspect-[16/9] sm:aspect-[21/9] min-h-[480px]">
          {/* Background image */}
          <img
            src={active.image}
            alt={active.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Measured gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10 max-w-3xl">
            <span className="text-[#2997ff] text-[13px] font-medium tracking-wide uppercase">
              {active.tag}
            </span>
            <h3 className="text-[#f5f5f7] text-[24px] sm:text-[36px] font-semibold tracking-apple-hero-name leading-tight mt-1">
              {active.title}
            </h3>
            <p className="text-[#86868b] sm:text-[#f5f5f7]/80 text-[14px] sm:text-[16px] leading-relaxed mt-2 max-w-2xl">
              {active.description}
            </p>
          </div>

          {/* Playback Pagination in a translucent #333336 pill */}
          <div className="absolute top-6 right-6 z-20 flex items-center space-x-2 bg-[#333336]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-[#f5f5f7] hover:text-white p-1 rounded-full transition-colors"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
            <div className="h-3 w-[1px] bg-white/20 mx-1" />
            {HIGHLIGHT_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsPlaying(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'w-6 bg-[#0071e3]'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {HIGHLIGHT_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentSlide(idx);
                setIsPlaying(false);
              }}
              className={`p-4 rounded-[20px] text-left transition-all border ${
                idx === currentSlide
                  ? 'bg-[#1d1d1f] border-[#0071e3]'
                  : 'bg-[#0e0e0e] border-[#333336]/50 hover:border-[#6e6e73]'
              }`}
            >
              <span className="text-[12px] text-[#86868b] block">{slide.tag}</span>
              <span className="text-[14px] font-medium text-[#f5f5f7] line-clamp-1 mt-0.5">
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
