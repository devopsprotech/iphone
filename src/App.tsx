/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GlobalNav } from './components/GlobalNav';
import { PromoStrip } from './components/PromoStrip';
import { ProductNav } from './components/ProductNav';
import { HeroStage } from './components/HeroStage';
import { HighlightsCarousel } from './components/HighlightsCarousel';
import { CloserLook3D } from './components/CloserLook3D';
import { CameraControlShowcase } from './components/CameraControlShowcase';
import { ProCameraSystem } from './components/ProCameraSystem';
import { ChipSection } from './components/ChipSection';
import { AppleIntelligence } from './components/AppleIntelligence';
import { BatteryAndConnectivity } from './components/BatteryAndConnectivity';
import { CompareSection } from './components/CompareSection';
import { PaleTradeInCard } from './components/PaleTradeInCard';
import { AppleFooter } from './components/AppleFooter';
import { ConfiguratorModal } from './components/ConfiguratorModal';
import { FilmModal } from './components/FilmModal';
import { TechSpecsModal } from './components/TechSpecsModal';

export default function App() {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [isFilmOpen, setIsFilmOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [bagItems, setBagItems] = useState<any[]>([]);

  const handleAddToBag = (item: any) => {
    setBagItems((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] flex flex-col font-sans selection:bg-[#0071e3] selection:text-white">
      {/* 44px Global Navigation */}
      <GlobalNav
        onOpenBuy={() => setIsConfiguratorOpen(true)}
        bagCount={bagItems.length}
      />

      {/* Promotional Trade-in Strip */}
      <PromoStrip
        onOpenTradeIn={() => setIsConfiguratorOpen(true)}
      />

      {/* Contained Sticky Product Sub-Navigation */}
      <ProductNav
        onOpenBuy={() => setIsConfiguratorOpen(true)}
        onOpenSpecs={() => setIsSpecsOpen(true)}
      />

      {/* Main Content Narrative */}
      <main className="flex-1 w-full">
        {/* Full-bleed Hero Product Stage */}
        <HeroStage
          onOpenBuy={() => setIsConfiguratorOpen(true)}
          onOpenFilmModal={() => setIsFilmOpen(true)}
        />

        {/* Highlights Media Frame Carousel */}
        <HighlightsCarousel />

        {/* Closer Look 3D & Finish Explorer */}
        <CloserLook3D />

        {/* Camera Control Button Interactive Section */}
        <CameraControlShowcase />

        {/* Pro 48MP Optics Array Breakdown */}
        <ProCameraSystem />

        {/* A19 Pro Silicon Deep Dive */}
        <ChipSection />

        {/* Apple Intelligence Capabilities */}
        <AppleIntelligence />

        {/* Battery & Satellite Connectivity */}
        <BatteryAndConnectivity />

        {/* Device Upgrade Comparison Panel */}
        <CompareSection />

        {/* Pale Comparison Surface: Trade In & Apple 2030 */}
        <PaleTradeInCard
          onOpenBuy={() => setIsConfiguratorOpen(true)}
        />
      </main>

      {/* Apple Footer with Legal Disclosures and Directory */}
      <AppleFooter />

      {/* Interactive Modals */}
      <ConfiguratorModal
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        onAddToBag={handleAddToBag}
      />

      <FilmModal
        isOpen={isFilmOpen}
        onClose={() => setIsFilmOpen(false)}
      />

      <TechSpecsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
      />
    </div>
  );
}
