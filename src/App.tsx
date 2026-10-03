/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { JournalPositioning } from './components/JournalPositioning';
import { JourneyTimeline } from './components/JourneyTimeline';
import { WhatYouExplore } from './components/WhatYouExplore';
import { ProductOptions } from './components/ProductOptions';
import { CreatorSection } from './components/CreatorSection';
import { PathToInnerPeaceSection } from './components/PathToInnerPeaceSection';
import { FinalOfferSection } from './components/FinalOfferSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { CheckoutModal } from './components/CheckoutModal';
import { JOURNAL_CONFIG, ProductFormat } from './config/journalConfig';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<ProductFormat | null>(
    JOURNAL_CONFIG.formats[1] // Default to Interactive PDF (Most Popular)
  );

  const handleOpenFormatModal = (formatId?: 'hardcopy' | 'pdf' | 'app') => {
    if (formatId) {
      const match = JOURNAL_CONFIG.formats.find((f) => f.id === formatId);
      if (match) setSelectedFormat(match);
    }
    setIsModalOpen(true);
  };

  const handleSelectFormatCard = (format: ProductFormat) => {
    setSelectedFormat(format);
    setIsModalOpen(true);
  };

  const handleScrollToFormats = () => {
    const el = document.getElementById('formats');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#192621] flex flex-col font-sans selection:bg-[#064E3B] selection:text-[#FAF9F5]">
      {/* Navigation Top Bar */}
      <Header onSelectFormat={() => handleOpenFormatModal('pdf')} />

      {/* Main Promotional Landing Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onChooseFormat={handleOpenFormatModal} />

        {/* The Core Problem */}
        <ProblemSection />

        {/* Product Positioning & 3 Pillars */}
        <JournalPositioning />

        {/* 21-Day Structured Journey (Phases 1, 2, 3) */}
        <JourneyTimeline />

        {/* Inside the Journal (21 Days Focus) */}
        <WhatYouExplore />

        {/* Primary Pricing / Formats Section */}
        <ProductOptions onSelectFormat={handleSelectFormatCard} />

        {/* Creator / Founder Section */}
        <CreatorSection />

        {/* Why Path to Inner Peace (Platform Philosophy) */}
        <PathToInnerPeaceSection />

        {/* Final Product Offer */}
        <FinalOfferSection onSelectFormat={handleSelectFormatCard} />

        {/* Final CTA */}
        <FinalCTA onSelectFormat={handleSelectFormatCard} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom CTA (Capped under 15% mobile viewport height) */}
      <MobileStickyCTA onOpenPricing={handleScrollToFormats} />

      {/* Interactive Checkout & Order Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        selectedFormat={selectedFormat}
        onClose={() => setIsModalOpen(false)}
        onSelectAnotherFormat={(format) => setSelectedFormat(format)}
      />
    </div>
  );
}
