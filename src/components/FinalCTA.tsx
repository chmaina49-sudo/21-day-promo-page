/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, FileText, Smartphone, ArrowRight } from 'lucide-react';
import { JOURNAL_CONFIG, ProductFormat } from '../config/journalConfig';

interface FinalCTAProps {
  onSelectFormat: (format: ProductFormat) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onSelectFormat }) => {
  const hardcopyFormat = JOURNAL_CONFIG.formats.find((f) => f.id === 'hardcopy')!;
  const pdfFormat = JOURNAL_CONFIG.formats.find((f) => f.id === 'pdf')!;
  const appFormat = JOURNAL_CONFIG.formats.find((f) => f.id === 'app')!;

  return (
    <section className="py-20 sm:py-28 bg-[#064E3B] text-[#FAF9F5] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Editorial Subtitle */}
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#C5A880] mb-4">
          Your Commitment To Yourself
        </p>

        {/* Large Statement */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display mb-6 leading-tight [text-wrap:balance]">
          21 Days.
          <br />
          A Little Time for Yourself.
          <br />
          <span className="text-[#C5A880] italic">A Deeper Understanding of You.</span>
        </h2>

        {/* Supporting Text */}
        <div className="text-base sm:text-lg text-white/85 max-w-xl mx-auto mb-10 space-y-1.5 font-light leading-relaxed">
          <p>Start where you are.</p>
          <p>Take one day at a time.</p>
          <p className="font-normal text-white">Give yourself 21 days to pause, reflect and understand.</p>
        </div>

        {/* Three Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => onSelectFormat(hardcopyFormat)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF9F5] border border-white/25 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap"
          >
            <BookOpen className="w-4 h-4 text-[#C5A880]" />
            <span>GET HARD COPY — ₹199</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectFormat(pdfFormat)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C5A880] hover:bg-[#D4AF37] text-[#064E3B] rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-4 h-4 text-[#064E3B]" />
            <span>GET INTERACTIVE PDF — ₹299</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectFormat(appFormat)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-[#FAF9F5] border border-white/25 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer whitespace-nowrap"
          >
            <Smartphone className="w-4 h-4 text-[#C5A880]" />
            <span>GET THE APP — ₹399</span>
          </button>
        </div>

        {/* Reassurance text */}
        <p className="mt-8 text-xs text-white/60">
          Powered by Path to Inner Peace • Guided by Mainak Chatterjee
        </p>

      </div>
    </section>
  );
};
