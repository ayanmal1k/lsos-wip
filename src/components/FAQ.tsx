"use client";

import React, { useState } from "react";
import {
  IconChevronDown,
  IconCheckmark,
  IconShieldCheckBrand,
  IconLockStreamflow,
  LsosDollar,
} from "./CustomIcons";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs: FAQItem[] = [
    {
      question: "Can a fair launch or presale be created without agreeing to the terms and conditions?",
      answer: (
        <div className="space-y-3">
          <p>
            <strong className="text-white">Strictly No.</strong> Every project creator and deployer must explicitly check the mandatory confirmation box agreeing to the LSOS Protocol Terms &amp; Conditions and Security Standards before contract initialization is allowed.
          </p>
          <div className="rounded-xl border border-solana-cyan/30 bg-solana-cyan/[0.04] p-3 text-xs leading-relaxed text-white/80">
            <span className="font-mono font-bold text-solana-cyan">Bytecode Safeguard:</span> Without checking this mandatory terms agreement box, the Anchor PDA blocks launch creation at the smart contract level (`ERR_TERMS_NOT_ACCEPTED`), guaranteeing full legal and community safety compliance.
          </div>
        </div>
      ),
    },
    {
      question: "Who is eligible for the First 10 Genesis Partner slots?",
      answer: (
        <div className="space-y-3">
          <p>
            To prevent spam and protect retail traders, the 10 Genesis slots are reserved exclusively for <strong className="text-white">Sister Tokens or utility expansions of established projects with an existing, active community</strong> (verified on X, Telegram, or Discord).
          </p>
          <p>
            Cold-start projects without a pre-existing community are strictly disqualified. Furthermore, the presale campaign duration must be capped at a <strong className="text-emerald-400">maximum of 60 days</strong> on the LSOS non-custodial Anchor PDA.
          </p>
        </div>
      ),
    },
    {
      question: "What is included in the free $7,500 Genesis SaaS Utility Suite?",
      answer: (
        <div className="space-y-2">
          <p>
            Pioneer partner projects receive immediate, working ecosystem power delivered 100% free of charge:
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-white/70">
            <li className="flex items-center gap-2">
              <IconCheckmark className="h-4 w-4 shrink-0 text-solana-cyan" />
              <span><strong>Custom Web Interface &amp; Staking Dashboard</strong> ($2,500 value)</span>
            </li>
            <li className="flex items-center gap-2">
              <IconCheckmark className="h-4 w-4 shrink-0 text-solana-cyan" />
              <span><strong>2 On-Chain P2E Mini-Games</strong> ($2,000 value)</span>
            </li>
            <li className="flex items-center gap-2">
              <IconCheckmark className="h-4 w-4 shrink-0 text-solana-cyan" />
              <span><strong>Standalone Android Web3 Application</strong> ($1,500 value)</span>
            </li>
            <li className="flex items-center gap-2">
              <IconCheckmark className="h-4 w-4 shrink-0 text-solana-cyan" />
              <span><strong>48H GemRaiders Banner + 24H Trending on LSOS Standalone DEX</strong> ($1,500 value)</span>
            </li>
            <li className="flex items-center gap-2">
              <IconCheckmark className="h-4 w-4 shrink-0 text-solana-cyan" />
              <span><strong>0 SOL Upfront Platform Cost</strong> + Free Mass Airdrop &amp; Burn Modules</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "How does the LSOS Anti-Clone Ticker Registry protect my project?",
      answer: (
        <div className="space-y-3">
          <p>
            When your token name and ticker are registered on LSOS, they are permanently written to an immutable Anchor Program Derived Address (PDA).
          </p>
          <p>
            If any malicious actor attempts to launch a duplicate copycat token with the identical name or symbol on LSOS, the transaction is rejected automatically (`ERR_DUPLICATE_TICKER_COLLISION`), eliminating honeypots and copycat dilution before deployment.
          </p>
        </div>
      ),
    },
    {
      question: "Why does LSOS use native Standalone Liquidity Pools with a 0.175% fee?",
      answer: (
        <div className="space-y-3">
          <p>
            Standard Solana launchpads charge predatory 1.00% to 2.00% transaction taxes and extract liquidity into shared bonding curves.
          </p>
          <p>
            LSOS provides independent, sovereign AMM liquidity pools with an ultra-competitive <strong className="text-solana-cyan">0.175% flat swap fee</strong>, leaving 99.825% of trading volume directly inside project pools.
          </p>
        </div>
      ),
    },
    {
      question: "How do Streamflow locks and private Jito bundles protect investors?",
      answer: (
        <div className="space-y-3">
          <p>
            LSOS enforces two hardcoded cryptographic safeguards:
          </p>
          <p>
            <strong>1. Private Jito Validator Bundles:</strong> Deployments bypass public Solana mempools completely, rendering frontrunner and sandwich bots 100% blind at Block Zero.
          </p>
          <p>
            <strong>2. Streamflow Programmatic Locks:</strong> 70% of raised liquidity is locked forever at PDA birth, and 30% developer allocations are escrow-bound with linear vesting schedules.
          </p>
        </div>
      ),
    },
    {
      question: "What happens if a presale misses its softcap?",
      answer: (
        <div className="space-y-3">
          <p>
            LSOS enforces an automated, non-custodial Anchor PDA refund switch.
          </p>
          <p>
            If a presale does not achieve its hardcoded softcap within the preset presale window (up to 60 days for Genesis), investors can execute an instant 100% SOL refund directly from the smart contract without creator intervention.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-solana-cyan/5 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center gsap-reveal-title">
          <h2 className="font-lsos text-3xl tracking-wider text-white sm:text-5xl lg:text-6xl">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Essential answers regarding launch creation prerequisites, mandatory terms compliance, the Genesis Partner cohort, and on-chain security mechanisms.
          </p>
        </div>

        {/* Mandatory Agreement Notice Pill */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-solana-cyan/30 bg-solana-cyan/[0.04] p-4 text-center backdrop-blur-md gsap-reveal-title">
          <div className="flex items-center justify-center gap-2.5 text-xs font-mono">
            <span className="flex h-5 w-5 items-center justify-center rounded-md border border-solana-cyan bg-solana-cyan/20 text-solana-cyan">
              ✓
            </span>
            <span className="font-bold text-white">
              Mandatory Terms &amp; Conditions Agreement Checkbox
            </span>
            <span className="rounded bg-black/40 px-2 py-0.5 text-[10px] text-solana-cyan">
              HARDCODED ON-CHAIN
            </span>
          </div>
          <p className="mt-1 text-[11px] text-white/60">
            Fair launches and presales cannot be created unless the deployer checks and signs the protocol terms box.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="gsap-reveal-card glass-panel rounded-2xl border border-white/10 transition-colors hover:border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 text-base font-bold text-white sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-solana-cyan transition-transform duration-300 ${
                      isOpen ? "rotate-180 border-solana-cyan/40 bg-solana-cyan/10" : ""
                    }`}
                  >
                    <IconChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/5 px-6 pb-6 pt-4 text-sm leading-relaxed text-white/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
