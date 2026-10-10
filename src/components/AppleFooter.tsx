import React from 'react';

export const AppleFooter: React.FC = () => {
  return (
    <footer className="bg-[#1d1d1f] text-[#86868b] text-[12px] leading-relaxed border-t border-[#333336]/60 pt-10 pb-16 px-4">
      <div className="max-w-[1024px] mx-auto space-y-6">
        {/* Footnotes */}
        <div className="space-y-2 pb-6 border-b border-[#333336] text-[11px] text-[#86868b]">
          <p>
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card.
          </p>
          <p>
            2. Available to qualified customers and requires 24-month 0% APR installment financing with Apple Card Monthly Installments (ACMI) when you select Citizens One or Apple Card as your payment method at checkout. Taxes and shipping are not included in ACMI.
          </p>
          <p>
            3. All battery claims depend on network configuration and many other factors; actual results will vary. Battery has limited recharge cycles and may eventually need to be replaced. Battery life and charge cycles vary by use and settings.
          </p>
          <p>
            4. Emergency SOS via satellite and Roadside Assistance via satellite are included for free for two years with the activation of any iPhone 18 model. Connection and response times vary based on location, site conditions, and other factors.
          </p>
          <p>
            5. Apple Intelligence is available in beta on all iPhone 18 models, with Siri and device language set to English (U.S.), as an iOS update. Additional languages and features will roll out in the coming months.
          </p>
        </div>

        {/* Breadcrumb Path */}
        <div className="flex items-center space-x-2 text-[12px] text-[#86868b] pb-4 border-b border-[#333336]">
          <a href="#" className="hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5 fill-current inline mr-1" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.8-8.14-12.3-15.19-6.3-9.84-11.22-20.91-14.75-33.21-3.53-12.3-5.29-23.73-5.29-34.29 0-14.34 3.53-26.24 10.59-35.7 7.06-9.46 16.02-14.28 26.89-14.48 4.7 0 9.77 1.25 15.22 3.76 5.45 2.51 9.4 3.82 11.85 3.93 2.12-.11 6.2-1.48 12.24-4.11 6.04-2.63 11.26-3.88 15.66-3.76 11.66.56 21.05 4.8 28.16 12.73-9.95 6.04-14.82 14.34-14.61 24.91.21 9.38 4.12 17.21 11.73 23.49 5.37 4.41 11.53 7.02 18.48 7.84-2.12 6.53-4.53 12.79-7.23 18.78zm-29.6-118.06c0 6.64-2.45 12.92-7.35 17.84-5.11 5.12-11.33 8.16-18.66 7.74-.21-1.38-.32-2.77-.32-4.16 0-6.64 2.67-13.34 8.01-18.42 2.67-2.56 5.86-4.59 9.57-6.09 3.71-1.5 7.04-2.35 9.99-2.55.21 1.88.32 3.77.32 5.64z" />
            </svg>
          </a>
          <span>›</span>
          <a href="#" className="hover:text-white transition-colors">iPhone</a>
          <span>›</span>
          <span className="text-[#f5f5f7]">iPhone 18 Pro</span>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 pt-2 pb-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">Shop and Learn</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mac</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iPad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iPhone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Watch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vision</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AirPods</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TV & Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AirTag</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">Apple Wallet</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Wallet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Card</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Pay</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Cash</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">Account</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Manage Your Apple Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Store Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">iCloud.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">Entertainment</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Apple One</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple TV+</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Music</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Arcade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Fitness+</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Podcasts</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">Apple Store</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Find a Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Genius Bar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Today at Apple</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Camp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Trade In</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shopping Help</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">For Business</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Apple and Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop for Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">For Education</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Apple and Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop for K-12</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop for College</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">For Healthcare</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Apple in Healthcare</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">Apple Values</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Environment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Inclusion and Diversity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Supply Chain</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#f5f5f7] font-semibold text-[12px] mb-2">About Apple</h4>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Apple Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ethics & Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Apple</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="pt-4 border-t border-[#333336] flex flex-col md:flex-row md:items-center justify-between gap-3 text-[11px]">
          <div>
            Copyright © 2026 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#86868b]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </div>
          <div className="text-[#86868b]">
            United States
          </div>
        </div>
      </div>
    </footer>
  );
};
