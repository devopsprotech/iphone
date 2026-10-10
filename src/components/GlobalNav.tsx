import React, { useState } from 'react';
import { Search, ShoppingBag, X, Menu } from 'lucide-react';

interface GlobalNavProps {
  onOpenBuy: () => void;
  bagCount?: number;
}

export const GlobalNav: React.FC<GlobalNavProps> = ({ onOpenBuy, bagCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [bagPreviewOpen, setBagPreviewOpen] = useState(false);

  const navLinks = [
    { name: 'Store', href: '#' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#hero' },
    { name: 'Watch', href: '#' },
    { name: 'Vision', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Home', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-md border-b border-[#333336]/40 transition-colors">
      <div className="max-w-[1024px] mx-auto px-4 h-[44px] flex items-center justify-between">
        {/* Apple Logo SVG */}
        <a
          href="#"
          aria-label="Apple Home"
          className="text-[#cccccc] hover:text-white transition-colors p-1"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 170 170"
            aria-hidden="true"
          >
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.8-8.14-12.3-15.19-6.3-9.84-11.22-20.91-14.75-33.21-3.53-12.3-5.29-23.73-5.29-34.29 0-14.34 3.53-26.24 10.59-35.7 7.06-9.46 16.02-14.28 26.89-14.48 4.7 0 9.77 1.25 15.22 3.76 5.45 2.51 9.4 3.82 11.85 3.93 2.12-.11 6.2-1.48 12.24-4.11 6.04-2.63 11.26-3.88 15.66-3.76 11.66.56 21.05 4.8 28.16 12.73-9.95 6.04-14.82 14.34-14.61 24.91.21 9.38 4.12 17.21 11.73 23.49 5.37 4.41 11.53 7.02 18.48 7.84-2.12 6.53-4.53 12.79-7.23 18.78zm-29.6-118.06c0 6.64-2.45 12.92-7.35 17.84-5.11 5.12-11.33 8.16-18.66 7.74-.21-1.38-.32-2.77-.32-4.16 0-6.64 2.67-13.34 8.01-18.42 2.67-2.56 5.86-4.59 9.57-6.09 3.71-1.5 7.04-2.35 9.99-2.55.21 1.88.32 3.77.32 5.64z" />
          </svg>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-7 text-[12px] font-normal tracking-apple-nav text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Utility Glyphs: Search, Bag, Mobile Toggle */}
        <div className="flex items-center space-x-5 text-[#cccccc]">
          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search apple.com"
            className="hover:text-white transition-colors p-1"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          {/* Bag Trigger */}
          <button
            onClick={() => setBagPreviewOpen(!bagPreviewOpen)}
            aria-label="Shopping Bag"
            className="hover:text-white transition-colors p-1 relative"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {bagCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#0071e3] text-white text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-medium">
                {bagCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="md:hidden hover:text-white transition-colors p-1"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Search Bar Drawer */}
      {searchOpen && (
        <div className="bg-[#161617] border-b border-[#333336] px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[640px] mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 text-[#86868b]" />
            <input
              type="text"
              placeholder="Search apple.com or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[#f5f5f7] text-[14px] placeholder-[#86868b] focus:outline-none"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-[12px] text-[#2997ff] hover:underline"
            >
              Cancel
            </button>
          </div>
          <div className="max-w-[640px] mx-auto mt-3 text-[12px] text-[#86868b] flex flex-wrap gap-3">
            <span>Quick Links:</span>
            <a href="#camera" onClick={() => setSearchOpen(false)} className="text-[#2997ff] hover:underline">
              Camera System
            </a>
            <a href="#chip" onClick={() => setSearchOpen(false)} className="text-[#2997ff] hover:underline">
              A19 Pro Chip
            </a>
            <a href="#compare" onClick={() => setSearchOpen(false)} className="text-[#2997ff] hover:underline">
              Compare Models
            </a>
            <button onClick={() => { setSearchOpen(false); onOpenBuy(); }} className="text-[#2997ff] hover:underline">
              Buy iPhone 18 Pro
            </button>
          </div>
        </div>
      )}

      {/* Bag Dropdown */}
      {bagPreviewOpen && (
        <div className="absolute right-4 top-[48px] w-80 bg-[#161617] border border-[#333336] rounded-[20px] p-4 shadow-2xl z-50 text-[14px]">
          <div className="flex justify-between items-center pb-3 border-b border-[#333336]">
            <span className="font-medium text-[#f5f5f7]">Your Bag</span>
            <button
              onClick={() => setBagPreviewOpen(false)}
              className="text-[#86868b] hover:text-[#f5f5f7]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {bagCount === 0 ? (
            <div className="py-6 text-center text-[#86868b] text-[13px]">
              Your Bag is empty.
            </div>
          ) : (
            <div className="py-4 space-y-3">
              <div className="flex justify-between text-[#f5f5f7] text-[13px]">
                <span>iPhone 18 Pro configuration</span>
                <span>Ready to checkout</span>
              </div>
              <button
                onClick={() => {
                  setBagPreviewOpen(false);
                  onOpenBuy();
                }}
                className="w-full bg-[#0071e3] text-white py-2 rounded-[170px] text-[13px] hover:bg-[#0077ed] transition"
              >
                Review & Checkout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu with 20px radius container */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161617] rounded-b-[20px] border-b border-[#333336] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[17px] font-medium text-white/90 hover:text-[#2997ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#333336] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuy();
              }}
              className="w-full bg-[#0071e3] text-white py-2.5 rounded-[170px] text-[14px] font-medium"
            >
              Buy iPhone 18 Pro
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
