"use client";

import React, { useState } from "react";
import { IconMail, IconArrowUpRight, IconClose, IconCheckmark, SolanaGradientDefs } from "./CustomIcons";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Contact@launchsafeonsolana.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <SolanaGradientDefs />

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-3xl border border-white/15 bg-[#090912] p-6 sm:p-9 shadow-2xl shadow-black pb-[max(1.75rem,env(safe-area-inset-bottom,0px))]">
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-solana-cyan/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-solana-magenta/15 blur-3xl" />

        {/* Close Button (44x44px touch target) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 sm:right-5 sm:top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/15 hover:text-white active:scale-95"
          aria-label="Close Modal"
        >
          <IconClose className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-6">
          <h3 className="font-lsos text-2xl tracking-wider text-white sm:text-3xl">
            GENESIS PARTNER <br />
            <span className="text-solana-gradient">INTAKE APPLICATION</span>
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
            To ensure rapid technical onboarding and prevent unvetted submissions, Genesis Cohort applications are processed strictly via email directly with the core founding team.
          </p>
        </div>

        {/* Mandatory Qualification Criteria Box */}
        <div className="mt-6 rounded-2xl border border-solana-cyan/30 bg-solana-cyan/[0.04] p-4 text-xs">
          <span className="font-mono font-bold tracking-wider text-solana-cyan uppercase">
            Mandatory Genesis Criteria (10 Slots Available):
          </span>
          <ul className="mt-2.5 space-y-2 text-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-solana-cyan" />
              <span>
                <strong className="text-white">Sister Token / Established Community:</strong> Exclusively for official sister tokens or utility expansions of established projects with an existing, active community. (Cold-start projects with no pre-existing community are strictly disqualified).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-solana-cyan" />
              <span>
                <strong className="text-white">Presale Duration Limit:</strong> Presale campaign must be capped at a <strong className="text-emerald-400">maximum of 60 days</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-solana-cyan" />
              <span>
                <strong className="text-white">Free $7,500 SaaS Utility Suite:</strong> Staking portal, 2 P2E mini-games, Android app &amp; 24H DEX trending included at 0 SOL upfront cost.
              </span>
            </li>
          </ul>
        </div>

        {/* Application Email Action */}
        <div className="mt-6 space-y-3">
          <a
            href="mailto:Contact@launchsafeonsolana.com?subject=LSOS%20Genesis%20Partner%20Application%20-%20Sister%20Token"
            className="group flex items-center justify-between rounded-2xl border border-solana-magenta/40 bg-gradient-to-r from-solana-magenta/[0.12] via-solana-violet/[0.12] to-solana-cyan/[0.12] p-4 transition-all duration-300 hover:border-solana-magenta hover:shadow-lg hover:shadow-solana-magenta/20"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-solana-magenta/40 bg-solana-magenta/15 shadow-inner">
                <IconMail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-white group-hover:text-pink-300">
                  Open Email Client
                </span>
                <span className="block font-mono text-xs text-white/60">
                  Contact@launchsafeonsolana.com
                </span>
              </div>
            </div>

            <IconArrowUpRight className="h-5 w-5 text-solana-magenta transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Copy Address Alternative */}
          <button
            onClick={handleCopyEmail}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-xs font-mono text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            {copied ? (
              <>
                <IconCheckmark className="h-3.5 w-3.5" />
                <span className="text-emerald-400">Email Address Copied to Clipboard</span>
              </>
            ) : (
              <span>Copy Email: Contact@launchsafeonsolana.com</span>
            )}
          </button>
        </div>

        {/* Submission Checklist */}
        <div className="mt-6 rounded-xl border border-white/5 bg-[#050509] p-3 text-[11px] leading-relaxed text-white/50">
          <strong className="text-white/80">Please include in your application:</strong>
          <p className="mt-1">
            1. Primary Project Name &amp; Community Links (X / Telegram / Discord) • 2. Sister Token Concept &amp; Ticker • 3. Planned Presale Target &amp; Duration (&le;60 Days) • 4. Estimated Launch Date.
          </p>
        </div>

        {/* Founder Review Guarantee */}
        <div className="mt-5 border-t border-white/10 pt-4 text-center">
          <p className="font-mono text-xs text-white/60">
            0 OF 10 GENESIS SLOTS SHORTLISTED • DIRECT FOUNDER TECHNICAL REVIEW
          </p>
          <p className="mt-1 text-[11px] text-white/40">
            * Note: Official Telegram channel is for announcements only. Inquiries must be sent via email.
          </p>
        </div>
      </div>
    </div>
  );
}
