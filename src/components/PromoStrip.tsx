import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PromoStripProps {
  onOpenTradeIn: () => void;
}

export const PromoStrip: React.FC<PromoStripProps> = ({ onOpenTradeIn }) => {
  return (
    <aside
      aria-label="Promotional Trade-in Announcement"
      className="bg-[#1d1d1f] border-b border-[#333336]/30 pt-[44px]"
    >
      <div className="max-w-[1024px] mx-auto px-4 py-3 flex items-center justify-center text-center">
        <p className="text-[14px] leading-[20px] font-normal tracking-apple-body text-[#f5f5f7]">
          Get $180–$650 in credit when you trade in iPhone 11 or higher.<sup>1</sup>{' '}
          <button
            onClick={onOpenTradeIn}
            className="inline-flex items-center text-[#2997ff] hover:underline font-normal cursor-pointer ml-1"
          >
            Shop iPhone
            <ChevronRight className="w-3.5 h-3.5 inline ml-0.5" />
          </button>
        </p>
      </div>
    </aside>
  );
};
