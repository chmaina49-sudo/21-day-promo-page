/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MessageCircle, Globe, Shield, Instagram, Youtube, Linkedin } from 'lucide-react';
import { JOURNAL_CONFIG } from '../config/journalConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04281E] text-[#FAF9F5]/80 pt-16 pb-24 sm:pb-16 border-t border-[#064E3B]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-lg sm:text-xl font-bold tracking-wider text-[#FAF9F5] block font-display">
              {JOURNAL_CONFIG.brand.name}
            </span>
            <p className="text-sm font-medium text-[#C5A880]">
              {JOURNAL_CONFIG.brand.tagline}
            </p>
            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
              A holistic platform dedicated to mindful living, psychological clarity, and grounded inner transformation. Founded by Mainak Chatterjee.
            </p>
          </div>

          {/* Quick Connect & Contact Details */}
          <div className="md:col-span-6 flex flex-col justify-start md:items-end space-y-3 text-xs sm:text-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-1">
              Connect Directly
            </span>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${JOURNAL_CONFIG.brand.whatsappCleanNumber}?text=Hello%20Path%20to%20Inner%20Peace,%20I%20have%20an%20inquiry%20about%20the%2021-Day%20Inner%20Healing%20Journal.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#C5A880] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: {JOURNAL_CONFIG.brand.whatsappNumber}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${JOURNAL_CONFIG.brand.email}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#C5A880] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#C5A880]" />
              <span>{JOURNAL_CONFIG.brand.email}</span>
            </a>

            {/* Website */}
            <a
              href={JOURNAL_CONFIG.brand.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#C5A880] transition-colors"
            >
              <Globe className="w-4 h-4 text-[#C5A880]" />
              <span>{JOURNAL_CONFIG.brand.displayWebsite}</span>
            </a>

            {/* Subtle Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p className="text-center sm:text-left max-w-xl">
            Disclaimer: The 21-Day Inner Healing Journal is intended for conscious personal self-reflection, mindfulness, and inner growth. It does not replace professional psychiatric or medical treatment.
          </p>
          <p className="whitespace-nowrap">
            © {currentYear} {JOURNAL_CONFIG.brand.name}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
