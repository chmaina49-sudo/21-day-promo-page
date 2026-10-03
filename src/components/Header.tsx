/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

interface HeaderProps {
  onSelectFormat?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectFormat }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#064E3B]/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-base sm:text-lg font-bold tracking-wider text-[#064E3B] hover:text-[#043327] transition-colors whitespace-nowrap"
        >
          {JOURNAL_CONFIG.brand.name}
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#192621]/75">
          <a href="#journey" className="hover:text-[#064E3B] transition-colors">
            The Journey
          </a>
          <a href="#inside" className="hover:text-[#064E3B] transition-colors">
            Inside the Journal
          </a>
          <a href="#formats" className="hover:text-[#064E3B] transition-colors">
            Choose Format
          </a>
          <a href="#creator" className="hover:text-[#064E3B] transition-colors">
            Creator
          </a>
          <a href="#philosophy" className="hover:text-[#064E3B] transition-colors">
            Philosophy
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <a
            href="#formats"
            onClick={(e) => {
              if (onSelectFormat) {
                e.preventDefault();
                onSelectFormat();
              }
            }}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#FAF9F5] bg-[#064E3B] hover:bg-[#083D2F] rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Start for ₹199
          </a>
        </div>
      </div>
    </header>
  );
};
