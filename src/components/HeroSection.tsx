/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, BookOpen, Smartphone, ShieldCheck, Sparkles } from 'lucide-react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

interface HeroSectionProps {
  onChooseFormat: (formatId?: 'hardcopy' | 'pdf' | 'app') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onChooseFormat }) => {
  const [activeTab, setActiveTab] = useState<'hardcover' | 'digital'>('hardcover');

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Subtle organic background ambient glow */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-[#064E3B]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small premium label (Unboxed, clean typographic presence) */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-widest uppercase text-[#064E3B]">
              <span className="w-6 h-px bg-[#064E3B]/40" aria-hidden="true" />
              <span>{JOURNAL_CONFIG.product.subLabel}</span>
            </div>

            {/* Large headline with intentional balance and color highlight */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#192621] leading-[1.18] mb-6 [text-wrap:balance]">
              What if <span className="text-[#064E3B]">21 days</span> could help you{' '}
              <span className="text-[#064E3B] underline decoration-[#C5A880]/60 decoration-2 underline-offset-4">
                understand yourself
              </span>{' '}
              more deeply?
            </h1>

            {/* Supporting copy */}
            <div className="space-y-3 text-base sm:text-lg text-[#192621]/80 leading-relaxed max-w-2xl mb-8">
              <p>
                Sometimes the problem isn’t a lack of motivation. We simply need a structured space to understand our thoughts, emotions, beliefs and patterns.
              </p>
              <p className="font-medium text-[#192621]">
                The 21-Day Inner Healing Journal gives you a guided daily process for reflection, awareness and inner growth.
              </p>
            </div>

            {/* CTAs and Format Summary */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <button
                onClick={() => onChooseFormat('pdf')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#064E3B] hover:bg-[#083D2F] text-[#FAF9F5] font-semibold text-sm sm:text-base rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>Begin Your Journey</span>
                <span className="text-xs bg-[#FAF9F5]/20 px-2 py-0.5 rounded text-[#FAF9F5]">From ₹199</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="#journey"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/80 hover:bg-white text-[#192621] border border-[#064E3B]/15 text-sm sm:text-base font-medium rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Explore the 3 Phases</span>
              </a>
            </div>

            {/* Zero-Pill Format Availability Notice */}
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2 text-xs text-[#192621]/70 mb-6">
              <span className="font-semibold text-[#064E3B]">3 Formats:</span>
              <span>Physical Hard Copy (₹199)</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-[#192621]">Interactive PDF (₹299)</span>
              <span aria-hidden="true">·</span>
              <span>Mobile App (₹399)</span>
            </div>

            {/* Small trust statement */}
            <div className="pt-4 border-t border-[#064E3B]/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#064E3B]/20 bg-[#E6EDE8]">
                <img
                  src={JOURNAL_CONFIG.assets.founder}
                  alt="Mainak Chatterjee portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-[#192621] block">
                  Created by {JOURNAL_CONFIG.creator.name}
                </span>
                <span className="text-[#192621]/70">
                  {JOURNAL_CONFIG.creator.role}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Visual View Switcher (Physical vs Digital) */}
            <div className="flex items-center gap-1 p-1 bg-[#E6EDE8]/70 border border-[#064E3B]/10 rounded-xl mb-4 w-full max-w-sm">
              <button
                type="button"
                onClick={() => setActiveTab('hardcover')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'hardcover'
                    ? 'bg-white text-[#064E3B] shadow-sm'
                    : 'text-[#192621]/70 hover:text-[#192621]'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#064E3B]" />
                <span>Hard Copy Edition</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('digital')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'digital'
                    ? 'bg-white text-[#064E3B] shadow-sm'
                    : 'text-[#192621]/70 hover:text-[#192621]'
                }`}
              >
                <Smartphone className="w-4 h-4 text-[#064E3B]" />
                <span>Digital & App</span>
              </button>
            </div>

            {/* Product Card Container */}
            <div className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#064E3B]/10 shadow-[0_8px_30px_rgb(6,78,59,0.06)] overflow-hidden">
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#F0F4F2]">
                <img
                  src={activeTab === 'hardcover' ? JOURNAL_CONFIG.assets.hardcover : JOURNAL_CONFIG.assets.digital}
                  alt={activeTab === 'hardcover' ? '21-Day Inner Healing Journal Hardcover Edition' : '21-Day Inner Healing Journal Digital & App Interface'}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gold badge in corner */}
                <div className="absolute top-3 left-3 bg-[#064E3B]/90 backdrop-blur-md text-[#FAF9F5] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#C5A880]/30 shadow-sm">
                  {activeTab === 'hardcover' ? 'Hard Copy Edition • ₹199' : 'Interactive PDF & Mobile App'}
                </div>
              </div>

              {/* Product Card Micro Inset */}
              <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#192621]/80">
                <span className="font-semibold text-[#064E3B]">Path to Inner Peace Original</span>
                <span className="text-[#192621]/60">Structured 21-Day Guided Process</span>
              </div>
            </div>

            <p className="mt-3 text-xs text-center text-[#192621]/60">
              {activeTab === 'hardcover' 
                ? 'Delivered to your doorstep across India.'
                : 'Instant digital access on iPhone, iPad, Android & Mac/PC.'
              }
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
