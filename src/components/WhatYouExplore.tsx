/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

export const WhatYouExplore: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<'All' | 'Phase 01' | 'Phase 02' | 'Phase 03'>('All');

  const filteredDays = selectedPhase === 'All'
    ? JOURNAL_CONFIG.daysList
    : JOURNAL_CONFIG.daysList.filter((d) => d.phase === selectedPhase);

  return (
    <section id="inside" className="py-16 sm:py-24 bg-[#F5F2EA]/50 border-t border-[#064E3B]/10 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] mb-2">
            Day-by-Day Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192621] font-display mb-4">
            What Will You Explore in 21 Days?
          </h2>
          <p className="text-sm sm:text-base text-[#192621]/75 max-w-xl mx-auto leading-relaxed">
            Every day is focused on one specific inner dynamic, offering structured inquiry questions, introspective prompts, and conscious awareness exercises.
          </p>
        </div>

        {/* Phase Filter Controls (Buttons with click handlers, permitted per Section 1.A) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white rounded-xl border border-[#064E3B]/10 max-w-md mx-auto mb-10 shadow-xs">
          {(['All', 'Phase 01', 'Phase 02', 'Phase 03'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedPhase(tab)}
              className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                selectedPhase === tab
                  ? 'bg-[#064E3B] text-[#FAF9F5] shadow-xs'
                  : 'text-[#192621]/70 hover:text-[#064E3B] hover:bg-[#FAF9F5]'
              }`}
            >
              {tab === 'All' ? 'All 21 Days' : tab}
            </button>
          ))}
        </div>

        {/* 21 Days Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {filteredDays.map((item) => (
            <div
              key={item.day}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#064E3B]/10 shadow-[0_2px_12px_rgb(6,78,59,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#064E3B]/30 hover:shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-lg font-bold text-[#C5A880]">
                  Day {item.day}
                </span>
                <span className="text-[11px] font-medium text-[#064E3B]/80">
                  {item.phase}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#192621] mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#192621]/70 leading-relaxed">
                {item.brief}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-10 text-center text-xs text-[#192621]/60">
          <span>Structured for ease of use</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>No prior journaling experience required</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>Guided prompt per page</span>
        </div>

      </div>
    </section>
  );
};
