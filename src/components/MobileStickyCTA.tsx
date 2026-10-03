/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

interface MobileStickyCTAProps {
  onOpenPricing: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenPricing }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#064E3B]/20 py-2.5 px-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-[#192621] truncate">
            {JOURNAL_CONFIG.product.title}
          </span>
          <span className="text-[11px] font-medium text-[#064E3B]">
            From ₹199 · 3 Formats
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenPricing}
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-[#064E3B] hover:bg-[#083D2F] text-[#FAF9F5] text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          <span>Choose Format</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
