/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ArrowRight, Book, FileText, Smartphone } from 'lucide-react';
import { JOURNAL_CONFIG, ProductFormat } from '../config/journalConfig';

interface ProductOptionsProps {
  onSelectFormat: (format: ProductFormat) => void;
  sectionId?: string;
  headline?: string;
  subheadline?: string;
}

export const ProductOptions: React.FC<ProductOptionsProps> = ({
  onSelectFormat,
  sectionId = 'formats',
  headline = 'Choose Your Way to Begin',
  subheadline = 'Whether you cherish the tactile depth of pen on paper or prefer seamless digital reflection, select the format that feels natural to you.',
}) => {
  const getFormatIcon = (id: string) => {
    switch (id) {
      case 'hardcopy':
        return <Book className="w-5 h-5 text-[#064E3B]" />;
      case 'pdf':
        return <FileText className="w-5 h-5 text-[#C5A880]" />;
      case 'app':
        return <Smartphone className="w-5 h-5 text-[#064E3B]" />;
      default:
        return null;
    }
  };

  return (
    <section id={sectionId} className="py-16 sm:py-24 bg-[#FAF9F5] scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#064E3B] mb-2">
            Formats & Access
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192621] font-display mb-4">
            {headline}
          </h2>
          <p className="text-sm sm:text-base text-[#192621]/75 max-w-xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* 3 Product Cards: Stacked on mobile, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          {JOURNAL_CONFIG.formats.map((format) => {
            const isFeatured = format.id === 'pdf'; // Most popular

            return (
              <div
                key={format.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white border-2 border-[#064E3B] shadow-xl md:-translate-y-2'
                    : 'bg-white/90 border border-[#064E3B]/15 shadow-sm hover:shadow-md hover:border-[#064E3B]/30'
                }`}
              >
                {/* Most Popular Badge */}
                {format.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#064E3B] text-[#FAF9F5] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                      {format.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Title & Icon */}
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <div className="w-10 h-10 rounded-xl bg-[#E6EDE8] flex items-center justify-center">
                      {getFormatIcon(format.id)}
                    </div>
                    <span className="text-xs font-medium text-[#192621]/50">
                      21-Day Edition
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#192621] tracking-tight mb-2">
                    {format.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#192621]/70 mb-6 min-h-[38px]">
                    {format.summary}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-[#064E3B]/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#064E3B] tracking-tight">
                        {format.currency}{format.price}
                      </span>
                      <span className="text-xs text-[#192621]/60 font-medium">
                        one-time investment
                      </span>
                    </div>
                  </div>

                  {/* Inclusions / Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#192621]/60">
                      Included:
                    </p>
                    <ul className="space-y-2.5">
                      {format.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#192621]/80">
                          <span className="w-4 h-4 rounded-full bg-[#E6EDE8] text-[#064E3B] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Purchase Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectFormat(format)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#064E3B] hover:bg-[#083D2F] text-[#FAF9F5] shadow-sm hover:shadow'
                        : 'bg-[#FAF9F5] hover:bg-[#E6EDE8] text-[#064E3B] border border-[#064E3B]/25 hover:border-[#064E3B]'
                    }`}
                  >
                    <span>{format.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-2 text-[11px] text-center text-[#192621]/50">
                    {format.deliveryNote}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
