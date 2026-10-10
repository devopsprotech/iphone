import React, { useState } from 'react';
import { Camera, Sliders, ZoomIn, Eye, Sparkles } from 'lucide-react';

export const CameraControlShowcase: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [mode, setMode] = useState<'zoom' | 'exposure' | 'depth'>('zoom');
  const [exposureVal, setExposureVal] = useState<number>(0);
  const [depthVal, setDepthVal] = useState<number>(2.8);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <section id="camera-control" className="bg-[#000000] py-24 px-4 border-t border-[#333336]/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#2997ff] text-[14px] uppercase font-semibold tracking-apple-nav">
            Tactile Intelligence
          </p>
          <h2 className="text-[#f5f5f7] text-[40px] sm:text-[64px] font-semibold tracking-apple-display mt-2 leading-tight">
            Take total Camera Control.
          </h2>
          <p className="text-[#86868b] text-[17px] sm:text-[20px] mt-4 leading-relaxed">
            Now you can take the perfect photo or video in record time. Camera Control gives you an easier way to quickly access camera tools. Simply slide your finger to adjust camera functions like exposure, depth of field, switch lenses, or zoom in.
          </p>
        </div>

        {/* Feature Grid: Hero Image + Interactive Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Button Macro Close-up */}
          <div className="lg:col-span-6 bg-[#0e0e0e] border border-[#333336] rounded-[28px] overflow-hidden p-2 group">
            <img
              src="/src/assets/images/iphone18_camera_control_button_1791539283562.jpg"
              alt="Camera Control macro hardware"
              className="w-full h-auto rounded-[24px] object-cover group-hover:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="p-6">
              <span className="text-[#b64400] text-[12px] font-semibold tracking-apple-nav uppercase">
                Sapphire Crystal & Haptics
              </span>
              <h3 className="text-[#f5f5f7] text-[24px] font-semibold tracking-apple-hero-name mt-1">
                Mechanical click meets capacitive finesse.
              </h3>
              <p className="text-[#86868b] text-[14px] mt-2 leading-relaxed">
                A custom force sensor accurately senses a light press versus a full click. The taptic engine mimics the tactile click of an analog SLR shutter.
              </p>
            </div>
          </div>

          {/* Right: Interactive Camera Control Simulator */}
          <div className="lg:col-span-6 bg-[#1d1d1f] border border-[#333336] rounded-[28px] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#333336]">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#2997ff]" />
                <span className="text-[14px] font-semibold text-[#f5f5f7]">
                  Camera Control Simulator
                </span>
              </div>
              <span className="text-[12px] text-[#86868b]">Interactive Demo</span>
            </div>

            {/* Viewfinder Screen */}
            <div className="relative mt-6 rounded-[20px] overflow-hidden bg-black aspect-[4/3] border border-[#333336] flex items-center justify-center select-none">
              {/* Background scenic photo */}
              <img
                src="/src/assets/images/iphone18_action_cinematic_1791539297522.jpg"
                alt="Simulated Viewfinder"
                className="w-full h-full object-cover transition-all duration-300"
                style={{
                  transform: `scale(${zoomLevel})`,
                  filter: `brightness(${1 + exposureVal * 0.25}) blur(${Math.max(0, (4 - depthVal) * 0.5)}px)`,
                }}
              />

              {/* Viewfinder HUD Overlays */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-center text-[12px] text-white/80">
                  <span className="bg-black/60 px-2 py-1 rounded-md backdrop-blur-md">
                    RAW MAX · 48MP
                  </span>
                  <span className="bg-black/60 px-2 py-1 rounded-md backdrop-blur-md">
                    {mode === 'zoom' && `${zoomLevel.toFixed(1)}x (${zoomLevel < 1 ? '13mm' : zoomLevel < 2 ? '24mm' : zoomLevel < 5 ? '48mm' : '120mm'})`}
                    {mode === 'exposure' && `EXP ${exposureVal > 0 ? `+${exposureVal}` : exposureVal} EV`}
                    {mode === 'depth' && `ƒ/${depthVal.toFixed(1)}`}
                  </span>
                </div>

                {/* Shutter grid marks */}
                <div className="w-16 h-16 border border-white/40 rounded-full mx-auto" />

                {/* Camera Control Dynamic Indicator Bar */}
                <div className="bg-black/70 backdrop-blur-md px-4 py-2 rounded-full mx-auto flex items-center space-x-4 border border-white/20">
                  <span className="text-[11px] text-[#ffd500] font-mono">
                    {mode.toUpperCase()}
                  </span>
                  <div className="flex space-x-2 text-[12px] text-white font-medium">
                    {mode === 'zoom' && (
                      <>
                        <button onClick={() => setZoomLevel(0.5)} className={`pointer-events-auto px-1.5 py-0.5 rounded ${zoomLevel === 0.5 ? 'bg-white/30 text-white' : 'text-white/60'}`}>0.5</button>
                        <button onClick={() => setZoomLevel(1)} className={`pointer-events-auto px-1.5 py-0.5 rounded ${zoomLevel === 1 ? 'bg-white/30 text-white' : 'text-white/60'}`}>1x</button>
                        <button onClick={() => setZoomLevel(2)} className={`pointer-events-auto px-1.5 py-0.5 rounded ${zoomLevel === 2 ? 'bg-white/30 text-white' : 'text-white/60'}`}>2x</button>
                        <button onClick={() => setZoomLevel(5)} className={`pointer-events-auto px-1.5 py-0.5 rounded ${zoomLevel === 5 ? 'bg-white/30 text-white' : 'text-white/60'}`}>5x</button>
                      </>
                    )}
                    {mode === 'exposure' && (
                      <span>{exposureVal > 0 ? `+${exposureVal}.0` : `${exposureVal}.0`} EV</span>
                    )}
                    {mode === 'depth' && (
                      <span>ƒ/{depthVal.toFixed(1)}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Gesture and mode controls */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setMode('zoom')}
                  className={`flex-1 py-2 rounded-full text-[13px] font-medium transition-all ${
                    mode === 'zoom'
                      ? 'bg-[#0071e3] text-white'
                      : 'bg-[#000000] text-[#86868b] border border-[#333336]'
                  }`}
                >
                  <ZoomIn className="w-3.5 h-3.5 inline mr-1" /> Zoom
                </button>
                <button
                  onClick={() => setMode('exposure')}
                  className={`flex-1 py-2 rounded-full text-[13px] font-medium transition-all ${
                    mode === 'exposure'
                      ? 'bg-[#0071e3] text-white'
                      : 'bg-[#000000] text-[#86868b] border border-[#333336]'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5 inline mr-1" /> Exposure
                </button>
                <button
                  onClick={() => setMode('depth')}
                  className={`flex-1 py-2 rounded-full text-[13px] font-medium transition-all ${
                    mode === 'depth'
                      ? 'bg-[#0071e3] text-white'
                      : 'bg-[#000000] text-[#86868b] border border-[#333336]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 inline mr-1" /> Depth (ƒ)
                </button>
              </div>

              {/* Slider for dragging simulation */}
              <div className="bg-[#0e0e0e] p-4 rounded-[20px] border border-[#333336]">
                <div className="flex justify-between text-[12px] text-[#86868b] mb-1">
                  <span>Swipe to adjust {mode}</span>
                  <span className="text-[#f5f5f7] font-mono">
                    {mode === 'zoom' ? `${zoomLevel}x` : mode === 'exposure' ? `${exposureVal} EV` : `ƒ/${depthVal}`}
                  </span>
                </div>
                {mode === 'zoom' && (
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.1"
                    value={zoomLevel}
                    onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                    className="w-full accent-[#0071e3] cursor-ew-resize"
                  />
                )}
                {mode === 'exposure' && (
                  <input
                    type="range"
                    min="-2"
                    max="2"
                    step="0.5"
                    value={exposureVal}
                    onChange={(e) => setExposureVal(parseFloat(e.target.value))}
                    className="w-full accent-[#0071e3] cursor-ew-resize"
                  />
                )}
                {mode === 'depth' && (
                  <input
                    type="range"
                    min="1.4"
                    max="16"
                    step="0.2"
                    value={depthVal}
                    onChange={(e) => setDepthVal(parseFloat(e.target.value))}
                    className="w-full accent-[#0071e3] cursor-ew-resize"
                  />
                )}
              </div>

              {/* Shutter Click button */}
              <button
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                className={`w-full py-3 rounded-full text-[14px] font-medium transition-all flex items-center justify-center gap-2 ${
                  isPressed
                    ? 'bg-white text-black scale-98 shadow-inner'
                    : 'bg-[#000000] text-white border border-[#6e6e73] hover:border-white'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#ffd500]" />
                {isPressed ? 'Shutter Clicked!' : 'Click Camera Control Shutter'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
