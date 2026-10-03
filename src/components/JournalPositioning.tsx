/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Eye, Compass, RefreshCw } from 'lucide-react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

export const JournalPositioning: React.FC = () => {
  const iconMap = [
    <Eye className="w-5 h-5 text-[#064E3B]" key="eye" />,
    <Compass className="w-5 h-5 text-[#064E3B]" key="compass" />,
    <RefreshCw className="w-5 h-5 text-[#064E3B]" key="refresh" />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Large Editorial Statement */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C5A880] mb-3">
            The Philosophy Behind The Journal
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192621] uppercase mb-6 font-display">
            THIS IS NOT JUST A JOURNAL.
          </h2>
          <div className="w-12 h-0.5 bg-[#064E3B] mx-auto mb-6" />
          <p className="text-base sm:text-xl text-[#192621]/80 leading-relaxed font-normal [text-wrap:balance]">
            It is a 21-day guided inner-work experience designed to help you pause, reflect, observe and understand your inner patterns.
          </p>
        </div>

        {/* Three Concise Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {JOURNAL_CONFIG.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#064E3B]/10 shadow-[0_4px_24px_rgb(6,78,59,0.03)] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#064E3B]/30"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E6EDE8] flex items-center justify-center mb-6">
                  {iconMap[idx]}
                </div>
                <div className="text-xs font-semibold tracking-wider text-[#C5A880] uppercase mb-1">
                  Pillar 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#064E3B] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[#192621]/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#064E3B]/10 flex items-center gap-2 text-xs font-semibold text-[#064E3B]">
                <span>Daily Practice</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#192621]/60">10-15 Minutes / Day</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
