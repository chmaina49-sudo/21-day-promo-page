/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

export const JourneyTimeline: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section id="journey" className="py-16 sm:py-24 bg-[#FAF9F5] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] mb-2">
            The Roadmap Within
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192621] font-display mb-4">
            21 Days. One Structured Journey Within.
          </h2>
          <p className="text-base sm:text-lg text-[#192621]/75 max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Each day builds upon the previous one. A carefully calibrated progression that takes you from self-observation to authentic clarity.
          </p>
          <div className="mt-3 text-xs text-[#064E3B] font-medium">
            *Grounding practices for personal growth, conscious reflection, and inner awareness.
          </div>
        </div>

        {/* Phase selector tabs for mobile / fast switching */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 p-1 bg-[#E6EDE8]/70 rounded-xl mb-6 max-w-sm mx-auto">
          {JOURNAL_CONFIG.phases.map((p, idx) => (
            <button
              key={p.phaseNumber}
              type="button"
              onClick={() => setActivePhase(idx)}
              className={`flex-1 py-2 px-2 text-xs font-bold rounded-lg transition-colors ${
                activePhase === idx 
                  ? 'bg-white text-[#064E3B] shadow-sm' 
                  : 'text-[#192621]/60'
              }`}
            >
              {p.phaseNumber.replace('PHASE ', 'P')}
            </button>
          ))}
        </div>

        {/* Desktop 3-Column Grid / Responsive Mobile View */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {JOURNAL_CONFIG.phases.map((phase, idx) => {
            const isHighlight = idx === 1; // Middle phase reframing
            return (
              <div
                key={phase.phaseNumber}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-[#064E3B] text-[#FAF9F5] shadow-xl md:-translate-y-2'
                    : 'bg-white text-[#192621] border border-[#064E3B]/10 shadow-[0_4px_24px_rgb(0,0,0,0.03)]'
                }`}
              >
                <div>
                  {/* Phase Header Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold tracking-widest uppercase ${
                        isHighlight ? 'text-[#C5A880]' : 'text-[#064E3B]'
                      }`}
                    >
                      {phase.phaseNumber}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-md font-semibold ${
                        isHighlight
                          ? 'bg-white/10 text-white border border-white/15'
                          : 'bg-[#E6EDE8] text-[#064E3B]'
                      }`}
                    >
                      {phase.days}
                    </span>
                  </div>

                  {/* Phase Title */}
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight mb-6 font-display ${
                      isHighlight ? 'text-[#FAF9F5]' : 'text-[#192621]'
                    }`}
                  >
                    {phase.title}
                  </h3>

                  {/* Focus Item Checklist */}
                  <div className="space-y-3 mb-8">
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isHighlight ? 'text-[#C5A880]' : 'text-[#192621]/60'
                      }`}
                    >
                      Core Focus Areas:
                    </p>
                    <ul className="space-y-2.5">
                      {phase.focusItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base leading-snug">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isHighlight
                                ? 'bg-[#C5A880]/20 text-[#C5A880]'
                                : 'bg-[#E6EDE8] text-[#064E3B]'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </span>
                          <span className={isHighlight ? 'text-white/90' : 'text-[#192621]/80'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer indicator */}
                <div
                  className={`pt-5 border-t text-xs font-medium flex items-center justify-between ${
                    isHighlight
                      ? 'border-white/15 text-white/70'
                      : 'border-[#064E3B]/10 text-[#192621]/60'
                  }`}
                >
                  <span>7 Guided Days</span>
                  <span>Daily Prompts & Exercises</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative transition between sections */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-sm text-[#192621]/70 leading-relaxed">
            By taking 10 to 15 minutes each morning or evening, you create an intentional rhythm of self-inquiry that turns confusion into clarity.
          </p>
        </div>

      </div>
    </section>
  );
};
