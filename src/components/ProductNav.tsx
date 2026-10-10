import React, { useState, useEffect } from 'react';

interface ProductNavProps {
  onOpenBuy: () => void;
  onOpenSpecs: () => void;
  activeSection?: string;
}

export const ProductNav: React.FC<ProductNavProps> = ({ onOpenBuy, onOpenSpecs }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Overview', href: '#hero', action: undefined },
    { name: 'Highlights', href: '#highlights', action: undefined },
    { name: 'Design', href: '#design', action: undefined },
    { name: 'Camera', href: '#camera', action: undefined },
    { name: 'A19 Pro', href: '#chip', action: undefined },
    { name: 'Compare', href: '#compare', action: undefined },
    { name: 'Tech Specs', href: '#specs', action: onOpenSpecs },
  ];

  return (
    <div className={`sticky top-[44px] z-40 w-full transition-all duration-300 py-2.5 px-4 pointer-events-none`}>
      <nav
        aria-label="iPhone 18 Pro Navigation"
        className={`max-w-[1024px] mx-auto bg-[#0e0e0e]/90 backdrop-blur-md rounded-[20px] border border-[#282828] px-5 py-2.5 flex items-center justify-between pointer-events-auto transition-shadow ${
          scrolled ? 'shadow-2xl shadow-black/80' : ''
        }`}
      >
        {/* Left: Product Name */}
        <div className="flex items-baseline space-x-3">
          <a
            href="#hero"
            className="text-[19px] leading-[1.21] font-semibold tracking-apple-product-label text-[#f5f5f7] hover:opacity-90"
          >
            iPhone 18 Pro
          </a>
        </div>

        {/* Center: Section Links */}
        <div className="hidden lg:flex items-center space-x-6 text-[14px] font-medium tracking-apple-nav text-[#86868b]">
          {links.map((link) => (
            link.action ? (
              <button
                key={link.name}
                onClick={link.action}
                className="hover:text-[#f5f5f7] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#f5f5f7] transition-colors"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Right: Pricing info + Blue Purchase Pill */}
        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline text-[12px] text-[#86868b] tracking-apple-nav">
            From $999 or $41.62/mo.
          </span>
          <button
            onClick={onOpenBuy}
            className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[12px] leading-[16px] font-normal tracking-apple-nav py-[7px] px-[14px] rounded-[170px] transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Buy
          </button>
        </div>
      </nav>
    </div>
  );
};
