/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote } from 'lucide-react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

export const CreatorSection: React.FC = () => {
  return (
    <section id="creator" className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#064E3B]/10 scroll-mt-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#064E3B]/12 shadow-[0_8px_32px_rgb(6,78,59,0.04)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Founder Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-[#064E3B]/20 shadow-md bg-[#E6EDE8]">
                <img
                  src={JOURNAL_CONFIG.assets.founder}
                  alt="Mainak Chatterjee - Founder, Path to Inner Peace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#064E3B] block">
                  Author & Founder
                </span>
                <span className="text-sm font-medium text-[#192621]/70">
                  {JOURNAL_CONFIG.creator.role}
                </span>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
                <span>Guiding Voice</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#192621] font-display mb-1.5">
                Created by {JOURNAL_CONFIG.creator.name}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-[#064E3B] mb-6">
                {JOURNAL_CONFIG.creator.title}
              </p>

              {/* Authentic Quote */}
              <div className="relative pl-6 border-l-2 border-[#C5A880] mb-6">
                <Quote className="w-5 h-5 text-[#C5A880]/60 absolute -top-1 left-0 -translate-x-1/2 bg-white" />
                <blockquote className="text-base sm:text-lg text-[#192621]/85 italic leading-relaxed font-display">
                  "{JOURNAL_CONFIG.creator.quote}"
                </blockquote>
              </div>

              <p className="text-xs sm:text-sm text-[#192621]/70 leading-relaxed">
                Mainak's work integrates mindful introspection, practical cognitive awareness, and inner alignment to help seekers move beyond recurring emotional patterns and build a calm, grounded relationship with themselves.
              </p>

              {/* Trust Marker */}
              <div className="mt-6 pt-5 border-t border-[#064E3B]/10 w-full flex items-center justify-between text-xs text-[#192621]/60">
                <span>Path to Inner Peace Initiative</span>
                <span>Authentic Self-Work Method</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
