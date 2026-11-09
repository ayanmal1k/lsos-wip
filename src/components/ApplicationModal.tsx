"use client";

import React from "react";
import { IconTelegram, IconMail, IconArrowUpRight, IconClose, SolanaGradientDefs } from "./CustomIcons";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <SolanaGradientDefs />

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#090912] p-7 shadow-2xl shadow-black sm:p-9">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
          aria-label="Close Modal"
        >
          <IconClose className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-6">
          <h3 className="font-lsos text-2xl tracking-wider text-white sm:text-3xl">
            CONNECT WITH <br />
            <span className="text-solana-gradient">LSOS FOUNDERS</span>
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
            To ensure rapid onboarding and dedicated technical assistance for our <strong>First 10 Genesis Partners</strong>, applications are handled directly via Telegram or Email.
          </p>
        </div>

        {/* Action Buttons: Telegram & Email (No X) */}
        <div className="mt-8 space-y-3.5">
          {/* Telegram Button */}
          <a
            href="https://t.me/lsos2026"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-solana-cyan/30 bg-solana-cyan/[0.06] p-4 transition-all duration-300 hover:border-solana-cyan hover:bg-solana-cyan/[0.12] hover:shadow-lg hover:shadow-solana-cyan/10"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-solana-cyan/30 bg-solana-cyan/10">
                <IconTelegram className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-white group-hover:text-solana-cyan">
                  Send Message on Telegram
                </span>
                <span className="block font-mono text-xs text-white/50">
                  @lsos2026 • Direct Founder Response
                </span>
              </div>
            </div>

            <IconArrowUpRight className="h-5 w-5 text-solana-cyan transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Email Button */}
          <a
            href="mailto:Contact@launchsafeonsolana.com"
            className="group flex items-center justify-between rounded-2xl border border-solana-magenta/30 bg-solana-magenta/[0.06] p-4 transition-all duration-300 hover:border-solana-magenta hover:bg-solana-magenta/[0.12] hover:shadow-lg hover:shadow-solana-magenta/10"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-solana-magenta/30 bg-solana-magenta/10">
                <IconMail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-white group-hover:text-pink-300">
                  Send Email to Founders
                </span>
                <span className="block font-mono text-xs text-white/50">
                  Contact@launchsafeonsolana.com
                </span>
              </div>
            </div>

            <IconArrowUpRight className="h-5 w-5 text-solana-magenta transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Founder Note */}
        <div className="mt-8 border-t border-white/10 pt-5 text-center">
          <p className="font-mono text-xs text-white/60">
            0 / 10 Genesis Spots Shortlisted • Direct Founder Review
          </p>
          <p className="mt-1 text-[11px] text-white/40">
            Include your project name, token concept, and estimated launch window.
          </p>
        </div>
      </div>
    </div>
  );
}
