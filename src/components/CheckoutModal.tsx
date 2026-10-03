/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, ArrowRight, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { JOURNAL_CONFIG, ProductFormat } from '../config/journalConfig';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedFormat: ProductFormat | null;
  onClose: () => void;
  onSelectAnotherFormat: (format: ProductFormat) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  selectedFormat,
  onClose,
  onSelectAnotherFormat,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !selectedFormat) return null;

  const isHardCopy = selectedFormat.id === 'hardcopy';

  const handleProceedPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate checkout step or open payment gateway link
    if (selectedFormat.paymentUrl && !selectedFormat.paymentUrl.includes('example.com')) {
      // In actual deployment, opens the configured payment gateway (Razorpay / Stripe)
      // We will provide a clean success confirmation dialog
    }
    setIsSubmitted(true);
  };

  const handleWhatsAppOrder = () => {
    const customText = encodeURIComponent(
      `Hello Path to Inner Peace,\n\nI want to order: *${selectedFormat.title}* (${selectedFormat.currency}${selectedFormat.price})\n\nName: ${fullName || 'Not specified'}\nEmail: ${email || 'Not specified'}\nPhone: ${phone || 'Not specified'}${isHardCopy && address ? `\nAddress: ${address}` : ''}\n\nPlease share the direct payment link and access details.`
    );
    window.open(`https://wa.me/${JOURNAL_CONFIG.brand.whatsappCleanNumber}?text=${customText}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF9F5] rounded-3xl border border-[#064E3B]/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#064E3B]/10 bg-white">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#064E3B]">
              Order Confirmation
            </span>
            <h3 id="modal-title" className="text-lg font-bold text-[#192621]">
              {selectedFormat.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#E6EDE8]/60 hover:bg-[#E6EDE8] flex items-center justify-center text-[#192621]/70 hover:text-[#192621] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#064E3B] text-[#FAF9F5] rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h4 className="text-2xl font-bold font-display text-[#192621]">
                Thank You For Beginning
              </h4>
              <p className="text-sm text-[#192621]/80 max-w-xs mx-auto leading-relaxed">
                Your request for the <strong>{selectedFormat.title}</strong> ({selectedFormat.currency}{selectedFormat.price}) has been initiated.
              </p>
              
              <div className="p-4 bg-white rounded-2xl border border-[#064E3B]/15 text-xs text-left space-y-2">
                <div className="flex justify-between font-semibold text-[#192621]">
                  <span>Item:</span>
                  <span>{selectedFormat.title}</span>
                </div>
                <div className="flex justify-between font-bold text-[#064E3B]">
                  <span>Total Amount:</span>
                  <span>{selectedFormat.currency}{selectedFormat.price}</span>
                </div>
                <div className="text-[#192621]/70 pt-1 border-t border-[#064E3B]/10">
                  {selectedFormat.deliveryNote}
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm Instantly via WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#064E3B] font-semibold underline underline-offset-4 py-1"
                >
                  Back to Order Details
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Format Switcher Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#192621]/60 mb-2">
                  Select Format:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {JOURNAL_CONFIG.formats.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => onSelectAnotherFormat(f)}
                      className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        f.id === selectedFormat.id
                          ? 'bg-[#064E3B] text-[#FAF9F5] border-[#064E3B] shadow-xs'
                          : 'bg-white text-[#192621]/80 border-[#064E3B]/15 hover:border-[#064E3B]/40'
                      }`}
                    >
                      <div className="truncate">{f.title.replace(' JOURNAL', '')}</div>
                      <div className={`text-[11px] font-normal ${f.id === selectedFormat.id ? 'text-[#C5A880]' : 'text-[#064E3B]'}`}>
                        {f.currency}{f.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Summary Box */}
              <div className="p-4 bg-white rounded-2xl border border-[#064E3B]/10 shadow-xs">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs text-[#192621]/70">{selectedFormat.summary}</span>
                  <span className="text-2xl font-bold font-display text-[#064E3B]">
                    {selectedFormat.currency}{selectedFormat.price}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-[#192621]/80 border-t border-[#064E3B]/10 pt-2.5">
                  {selectedFormat.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#064E3B] stroke-[3]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Form */}
              <form onSubmit={handleProceedPayment} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#192621]/80 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#064E3B]/20 rounded-xl text-sm focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#192621]/80 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#064E3B]/20 rounded-xl text-sm focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#192621]/80 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 9876543210"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#064E3B]/20 rounded-xl text-sm focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                    />
                  </div>
                </div>

                {isHardCopy && (
                  <div>
                    <label className="block text-xs font-medium text-[#192621]/80 mb-1">
                      Courier Delivery Address *
                    </label>
                    <textarea
                      rows={2}
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Street, City, State, PIN Code"
                      className="w-full px-3.5 py-2 bg-white border border-[#064E3B]/20 rounded-xl text-sm focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                    />
                  </div>
                )}

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-[#064E3B] hover:bg-[#083D2F] text-[#FAF9F5] font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Proceed to Order — {selectedFormat.currency}{selectedFormat.price}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="w-full py-2.5 px-4 bg-white hover:bg-[#E6EDE8] text-[#064E3B] border border-[#064E3B]/25 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Order directly via WhatsApp Concierge</span>
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#192621]/60 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Payment links configured via Path to Inner Peace</span>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};
