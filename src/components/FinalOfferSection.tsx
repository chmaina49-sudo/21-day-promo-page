/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Check, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';
import { JOURNAL_CONFIG, ProductFormat } from '../config/journalConfig';

interface FinalOfferSectionProps {
  onSelectFormat: (format: ProductFormat) => void;
}

export const FinalOfferSection: React.FC<FinalOfferSectionProps> = ({ onSelectFormat }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#064E3B]/10 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] mb-2">
            Clear, Transparent Investment
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192621] font-display mb-4">
            Your Inner Journey Can Begin Today.
          </h2>
          <p className="text-sm sm:text-base text-[#192621]/75 max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
            Choose the format that resonates with how you learn and reflect. No hidden charges or ongoing recurring fees.
          </p>
        </div>

        {/* 3 Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {JOURNAL_CONFIG.formats.map((format) => {
            const isPdf = format.id === 'pdf';

            return (
              <div
                key={format.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                  isPdf
                    ? 'bg-[#064E3B] text-[#FAF9F5] shadow-xl md:-translate-y-1'
                    : 'bg-white text-[#192621] border border-[#064E3B]/15 shadow-sm hover:border-[#064E3B]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold tracking-wider uppercase ${
                        isPdf ? 'text-[#C5A880]' : 'text-[#064E3B]'
                      }`}
                    >
                      {format.title}
                    </span>
                    {format.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#C5A880] text-[#064E3B]">
                        {format.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${
                        isPdf ? 'text-[#FAF9F5]' : 'text-[#064E3B]'
                      }`}
                    >
                      {format.currency}{format.price}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isPdf ? 'text-white/70' : 'text-[#192621]/60'
                      }`}
                    >
                      all-inclusive
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-sm mb-6 ${
                      isPdf ? 'text-white/80' : 'text-[#192621]/70'
                    }`}
                  >
                    {format.summary}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm">
                    {format.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 stroke-[2.5] ${
                            isPdf ? 'text-[#C5A880]' : 'text-[#064E3B]'
                          }`}
                        />
                        <span className={isPdf ? 'text-white/90' : 'text-[#192621]/80'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => onSelectFormat(format)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPdf
                        ? 'bg-[#FAF9F5] hover:bg-white text-[#064E3B] shadow-sm'
                        : 'bg-[#064E3B] hover:bg-[#083D2F] text-[#FAF9F5] shadow-xs'
                    }`}
                  >
                    <span>{format.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p
                    className={`mt-2 text-[11px] text-center ${
                      isPdf ? 'text-white/60' : 'text-[#192621]/50'
                    }`}
                  >
                    {format.deliveryNote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Trust Notes (Zero artificial urgency) */}
        <div className="mt-12 pt-8 border-t border-[#064E3B]/10 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#192621]/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#064E3B]" />
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#064E3B]" />
            <span>Dedicated WhatsApp Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#064E3B]" />
            <span>Instant Digital Access or Fast Courier</span>
          </div>
        </div>

      </div>
    </section>
  );
};
