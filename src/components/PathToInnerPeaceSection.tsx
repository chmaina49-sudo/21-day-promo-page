/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, HeartHandshake, Compass, Leaf } from 'lucide-react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

export const PathToInnerPeaceSection: React.FC = () => {
  const tenets = [
    {
      icon: <Compass className="w-5 h-5 text-[#064E3B]" />,
      title: 'Self-Awareness',
      desc: 'Becoming an objective observer of your internal dialogues, reactions, and unconscious habits.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#C5A880]" />,
      title: 'Mental Clarity',
      desc: 'Clearing mental fog by translating vague anxieties into structured, actionable understanding.',
    },
    {
      icon: <Leaf className="w-5 h-5 text-[#064E3B]" />,
      title: 'Emotional Balance',
      desc: 'Creating an inner sanctuary where all emotions can be felt and released without reactive shame.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#064E3B]" />,
      title: 'Conscious Living',
      desc: 'Aligning your everyday decisions, boundaries, and relationships with your authentic values.',
    },
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-24 bg-[#F5F2EA]/40 border-t border-[#064E3B]/10 scroll-mt-14 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] mb-2">
            The Movement
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192621] font-display mb-4 [text-wrap:balance]">
            More Than a Journal.
            <br />
            <span className="text-[#064E3B]">A Philosophy of Inner Transformation.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#192621]/80 max-w-2xl mx-auto leading-relaxed">
            Path to Inner Peace is a holistic inner-transformation platform focused on helping individuals develop greater self-awareness, mental clarity, emotional balance and conscious living.
          </p>
          <div className="mt-4">
            <span className="font-display italic text-lg sm:text-xl font-semibold text-[#C5A880] tracking-wide">
              {JOURNAL_CONFIG.brand.tagline}
            </span>
          </div>
        </div>

        {/* Ambient Visual & Tenets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Ambient Photography Banner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] border border-[#064E3B]/15 shadow-md">
              <img
                src={JOURNAL_CONFIG.assets.ambient}
                alt="Serene wellness reflection space"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064E3B]/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-[#FAF9F5] font-display italic text-lg sm:text-xl leading-snug">
                  "When you cultivate calm within, the world outside begins to realign."
                </p>
              </div>
            </div>
          </div>

          {/* 4 Tenets */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tenets.map((tenet) => (
              <div
                key={tenet.title}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#064E3B]/10 shadow-xs hover:border-[#064E3B]/25 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E6EDE8] flex items-center justify-center mb-3.5">
                  {tenet.icon}
                </div>
                <h3 className="text-base font-bold text-[#192621] mb-1.5">
                  {tenet.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#192621]/70 leading-relaxed">
                  {tenet.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
