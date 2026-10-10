import React, { useState } from 'react';

interface LensInfo {
  focalLength: string;
  zoom: string;
  name: string;
  aperture: string;
  sensor: string;
  description: string;
}

const LENSES: LensInfo[] = [
  {
    focalLength: '13mm',
    zoom: '0.5x',
    name: '48MP Ultra Wide',
    aperture: 'ƒ/2.2',
    sensor: 'Quad-pixel sensor with autofocus macro',
    description: 'Expansive 120° field of view capturing 4x more light. Perfect for architecture, landscapes, and microscopic macro details just 2cm away.',
  },
  {
    focalLength: '24mm',
    zoom: '1x',
    name: '48MP Fusion (Main)',
    aperture: 'ƒ/1.78',
    sensor: '2.44µm quad-pixel, 2nd-gen sensor-shift OIS',
    description: 'The definitive everyday focal length. Delivers stunning 24MP default images with incredible low-light detail and zero shutter lag.',
  },
  {
    focalLength: '28mm',
    zoom: '1.2x',
    name: '48MP Fusion (Street)',
    aperture: 'ƒ/1.78',
    sensor: 'Native sensor crop at full optical clarity',
    description: 'The classic documentary photojournalist focal length. Frame environmental portraits with natural perspective and minimal distortion.',
  },
  {
    focalLength: '35mm',
    zoom: '1.5x',
    name: '48MP Fusion (Classic)',
    aperture: 'ƒ/1.78',
    sensor: 'Native sensor crop at full optical clarity',
    description: 'The gold standard for cinematic portraits, street reportage, and nuanced subject isolation with buttery depth of field.',
  },
  {
    focalLength: '48mm',
    zoom: '2x',
    name: '48MP Fusion (Telephoto)',
    aperture: 'ƒ/1.78',
    sensor: 'Optical-quality quad-pixel center crop',
    description: 'Full optical-quality 2x telephoto crop with 48MP resolution. Ideal for candid portraits and crisp video transitions.',
  },
  {
    focalLength: '120mm',
    zoom: '5x',
    name: '48MP 5x Telephoto',
    aperture: 'ƒ/2.8',
    sensor: 'Tetraprism design with 3D sensor-shift OIS',
    description: 'Glass tetraprism reflects light rays four times to achieve 120mm reach. Catch every sports reaction and wildlife portrait with razor sharpness.',
  },
];

export const ProCameraSystem: React.FC = () => {
  const [selectedLensIndex, setSelectedLensIndex] = useState(1);
  const activeLens = LENSES[selectedLensIndex];

  return (
    <section id="camera" className="bg-[#000000] py-24 px-4 border-t border-[#333336]/30">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#ffd500] text-[14px] uppercase font-semibold tracking-apple-nav">
            Pro Optics Array
          </p>
          <h2 className="text-[#f5f5f7] text-[40px] sm:text-[64px] font-semibold tracking-apple-display mt-2 leading-tight">
            Seven pro lenses in your pocket.
          </h2>
          <p className="text-[#86868b] text-[17px] sm:text-[20px] mt-4 leading-relaxed">
            Every camera is now 48 megapixels. Backed by next-generation Photonic Engine processing, 4K 120 fps Dolby Vision, and studio-grade directional audio mics.
          </p>
        </div>

        {/* Big Hardware Feature: Extreme macro module image */}
        <div className="relative rounded-[28px] overflow-hidden bg-[#0e0e0e] border border-[#333336] p-4 sm:p-8 flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="w-full lg:w-1/2">
            <img
              src="/src/assets/images/iphone18_camera_module_1791539253396.jpg"
              alt="iPhone 18 Pro 48MP Camera Array"
              className="w-full h-auto rounded-[20px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-1">
              <span className="text-[#ffd500] text-[12px] font-semibold uppercase tracking-apple-nav">
                Sensor Innovation
              </span>
              <h3 className="text-[#f5f5f7] text-[32px] font-semibold tracking-apple-hero-name leading-tight">
                Triple 48MP architecture. Zero compromise.
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed">
                Unlike traditional smartphone telephotos that cut resolution, the iPhone 18 Pro gives every lens an uncompromising 48-megapixel sensor. Crop, reframe, and zoom with staggering clarity.
              </p>
            </div>

            {/* Spec highlights with Optical Yellow accents */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#333336]">
              <div>
                <span className="text-[#ffd500] text-[28px] font-semibold tracking-apple-stat block">
                  48MP
                </span>
                <span className="text-[13px] text-[#86868b]">All three cameras</span>
              </div>
              <div>
                <span className="text-[#ffd500] text-[28px] font-semibold tracking-apple-stat block">
                  120 fps
                </span>
                <span className="text-[13px] text-[#86868b]">4K Dolby Vision video</span>
              </div>
              <div>
                <span className="text-[#ffd500] text-[28px] font-semibold tracking-apple-stat block">
                  120mm
                </span>
                <span className="text-[13px] text-[#86868b]">5x optical tetraprism</span>
              </div>
              <div>
                <span className="text-[#ffd500] text-[28px] font-semibold tracking-apple-stat block">
                  Studio Mics
                </span>
                <span className="text-[13px] text-[#86868b]">Spatial Audio recording</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Lens Switcher */}
        <div className="bg-[#1d1d1f] border border-[#333336] rounded-[28px] p-6 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="text-[#f5f5f7] text-[28px] font-semibold tracking-apple-hero-name">
              Explore the 7 Focal Lengths
            </h3>
            <p className="text-[#86868b] text-[14px] mt-1">
              Tap any focal length to see its technical optics breakdown.
            </p>
          </div>

          {/* Focal Length Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {LENSES.map((lens, idx) => (
              <button
                key={lens.focalLength}
                onClick={() => setSelectedLensIndex(idx)}
                className={`px-4 py-2.5 rounded-full text-[13px] font-medium transition-all ${
                  selectedLensIndex === idx
                    ? 'bg-[#0071e3] text-white shadow-md'
                    : 'bg-[#0e0e0e] text-[#86868b] border border-[#333336] hover:text-[#f5f5f7]'
                }`}
              >
                <span className="font-semibold">{lens.zoom}</span>{' '}
                <span className="opacity-80">({lens.focalLength})</span>
              </button>
            ))}
          </div>

          {/* Detailed Lens Card */}
          <div className="bg-[#000000] border border-[#333336] rounded-[20px] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[#ffd500] font-mono text-[18px] font-semibold">
                  {activeLens.focalLength} · {activeLens.zoom}
                </span>
                <span className="bg-[#333336] text-[#f5f5f7] text-[12px] px-2.5 py-0.5 rounded-full">
                  {activeLens.aperture}
                </span>
              </div>
              <h4 className="text-[#f5f5f7] text-[22px] font-semibold mt-2">
                {activeLens.name}
              </h4>
              <p className="text-[#86868b] text-[14px] max-w-2xl mt-2 leading-relaxed">
                {activeLens.description}
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-[#333336] pt-4 md:pt-0 md:pl-8 shrink-0">
              <span className="text-[12px] text-[#86868b] block">Sensor Specification</span>
              <span className="text-[#f5f5f7] text-[14px] font-medium block mt-1">
                {activeLens.sensor}
              </span>
              <span className="text-[#2997ff] text-[13px] block mt-3">
                100% Focus Pixels · Photonic Engine 2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
