/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F2EA]/60 border-y border-[#064E3B]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] mb-3">
            The Familiar Struggle
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#192621] [text-wrap:balance]">
            Do You Find Yourself Stuck in the Same Inner Patterns?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#192621]/75 leading-relaxed">
            Most of us spend days reacting to our internal climate without having the tools to translate what it actually means.
          </p>
        </div>

        {/* 5 Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {JOURNAL_CONFIG.problems.map((item, idx) => {
            // Give 5th card full span on desktop or center it
            const isLast = idx === 4;
            return (
              <div
                key={item.number}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-[#064E3B]/10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-1 hover:border-[#064E3B]/25 ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-bold text-[#C5A880]">
                    {item.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#064E3B]/25" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#192621] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#192621]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-12 sm:mt-16 text-center max-w-xl mx-auto">
          <div className="inline-block px-4 py-2 border-y border-[#064E3B]/15">
            <p className="font-display italic text-xl sm:text-2xl font-semibold text-[#064E3B]">
              Real inner change begins with awareness.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
