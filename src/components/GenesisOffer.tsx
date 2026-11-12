"use client";

import React from "react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import {
  IconCodeStaking,
  IconGamepadP2E,
  IconAndroidApp,
  IconTrendingDEX,
  IconCoinsZero,
  IconBurnFlame,
  IconSparkles,
  IconArrowRight,
  IconCheckmark,
  LsosDollar,
} from "./CustomIcons";

interface GenesisOfferProps {
  onOpenModal: () => void;
}

export default function GenesisOffer({ onOpenModal }: GenesisOfferProps) {
  return (
    <section id="genesis-offer" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Watermark of Official LSOS Logo */}
      <div className="pointer-events-none absolute right-[-5%] top-1/4 z-0 h-[600px] w-[600px] opacity-[0.03] blur-[1px] select-none">
        <Image
          src="/lsos-svg-icon-acc.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center gsap-reveal-title">
          <h2 className="font-lsos text-3xl tracking-wider text-white sm:text-5xl lg:text-6xl">
            LOOKING FOR OUR FIRST 10 PROJECTS. <br />
            <span className="text-solana-gradient inline-flex items-baseline justify-center flex-wrap">
              FREE&nbsp;<LsosDollar className="inline-block h-[0.76em] w-[0.56em] align-baseline -mb-[0.02em] mr-[0.04em]" />7,500&nbsp;SAAS UTILITY SUITE.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Most launchpads dump your token onto a chart and leave you with zero utility. LSOS provides your community with immediate, working ecosystem power — 100% free for the first 10 Genesis Partners.
          </p>
        </div>

        {/* Honest Cohort Status Box */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md sm:p-8 gsap-reveal-title">
          <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:text-left">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-solana-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-solana-cyan" />
                </span>
                <h3 className="text-xl font-bold text-white">
                  0 OF 10 GENESIS SLOTS SHORTLISTED
                </h3>
              </div>
              <p className="mt-1 text-xs text-white/60">
                All 10 slots are currently open. Selected partner projects receive direct founder integration support and the complete $7,500 SaaS Utility Suite.
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-solana-gradient px-5 py-3 text-xs font-bold text-black transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-solana-cyan/20"
            >
              <span>Apply for Genesis Partner Slot</span>
              <IconArrowRight className="h-3.5 w-3.5 text-black" />
            </button>
          </div>

          {/* Mandatory Genesis Qualifications */}
          <div className="mt-6 grid gap-4 text-xs sm:grid-cols-2">
            <div className="rounded-2xl border border-solana-cyan/20 bg-solana-cyan/[0.03] p-4">
              <div className="flex items-center gap-2">
                <IconCheckmark className="h-4 w-4 shrink-0 text-solana-cyan" />
                <span className="font-mono font-bold uppercase tracking-wider text-solana-cyan">
                  Sister Token &amp; Existing Community
                </span>
              </div>
              <p className="mt-2 text-white/70 leading-relaxed">
                Reserved exclusively for official sister tokens or ecosystem utility sub-tokens of established projects with an existing, active community (X / Telegram / Discord). Cold-start projects without community are not eligible.
              </p>
            </div>

            <div className="rounded-2xl border border-solana-magenta/20 bg-solana-magenta/[0.03] p-4">
              <div className="flex items-center gap-2">
                <IconCheckmark className="h-4 w-4 shrink-0 text-solana-magenta" />
                <span className="font-mono font-bold uppercase tracking-wider text-solana-magenta">
                  Max 60-Day Presale Duration
                </span>
              </div>
              <p className="mt-2 text-white/70 leading-relaxed">
                All 10 Genesis projects must have a presale campaign duration capped at a maximum of 60 days on the LSOS non-custodial Anchor PDA before standalone pool initialization.
              </p>
            </div>
          </div>
        </div>

        {/* The $7,500 SaaS Utility Suite Cards with GSAP Scroll Reveals and Spotlight Hover */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Custom Web Interface & Staking */}
          <SpotlightCard
            spotlightColor="rgba(0, 244, 253, 0.18)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col rounded-2xl p-7 border-solana-cyan/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-solana-cyan/30 bg-solana-cyan/10">
                <IconCodeStaking className="h-7 w-7" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-solana-cyan">
                $2,500 VALUE • 100% FREE
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Custom Web Interface &amp; Staking Dashboard
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
              A bespoke, high-converting token frontend and on-chain staking portal delivered within 7 days of partnership confirmation.
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-solana-cyan" />
                <span>Custom branded responsive design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-solana-cyan" />
                <span>Anchor on-chain staking contract deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-solana-cyan" />
                <span>Real-time APY &amp; TVL tracking</span>
              </li>
            </ul>
          </SpotlightCard>

          {/* Card 2: 2 On-Chain P2E Games */}
          <SpotlightCard
            spotlightColor="rgba(89, 34, 246, 0.2)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col rounded-2xl p-7 border-purple-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10">
                <IconGamepadP2E className="h-7 w-7" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-purple-300">
                $2,000 VALUE • 100% FREE
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              2 Hardcoded On-Chain Play-to-Earn Mini-Games
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Engage your community and reward holders from day one with two custom-themed, provably fair play-to-earn mini-games tied to your token.
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>Provably fair on-chain mechanics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>Token burning &amp; community prize pools</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>Mobile-friendly browser gameplay</span>
              </li>
            </ul>
          </SpotlightCard>

          {/* Card 3: Standalone Android Application */}
          <SpotlightCard
            spotlightColor="rgba(0, 244, 253, 0.15)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col rounded-2xl p-7 border-emerald-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                <IconAndroidApp className="h-7 w-7" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-emerald-300">
                $1,800 VALUE • 100% FREE
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Standalone Integrated Android Application
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
              A native Android APK built specifically for your token with real-time price tracking, holder notifications, and direct wallet connect.
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Dedicated APK build ready for distribution</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Direct community push notifications</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Solana dApp store compliance</span>
              </li>
            </ul>
          </SpotlightCard>

          {/* Card 4: 48H GemRaiders Banner + 24H Trending on LSOS DEX */}
          <SpotlightCard
            spotlightColor="rgba(219, 21, 242, 0.2)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col rounded-2xl p-7 border-solana-magenta/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-solana-magenta/30 bg-solana-magenta/10">
                <IconTrendingDEX className="h-7 w-7" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-pink-300">
                $1,200 VALUE • 100% FREE
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              48H GemRaiders Banner + 24H Trending on LSOS DEX
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Featured 48-hour banner on leading Web3 safety radar GemRaiders, plus guaranteed 24-hour top trending spot on LSOS&apos;s own native standalone LP DEX.
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-solana-magenta" />
                <span>48-hour GemRaiders featured banner</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-solana-magenta" />
                <span>24H guaranteed trending on LSOS standalone DEX</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-solana-magenta" />
                <span>0 SOL manual audit fee</span>
              </li>
            </ul>
          </SpotlightCard>

          {/* Card 5: 0 SOL Upfront Deployment */}
          <SpotlightCard
            spotlightColor="rgba(5, 105, 255, 0.2)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col rounded-2xl p-7 border-blue-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                <IconCoinsZero className="h-7 w-7" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-blue-300">
                0 SOL UPFRONT
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              0 SOL Upfront Platform Cost
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Launch without predatory upfront costs. Project owners pay only standard Solana network gas fees for contract initialization.
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>No hidden platform onboarding costs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>1.5% - 7% standard token protocol fee</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>Maximized treasury for real liquidity</span>
              </li>
            </ul>
          </SpotlightCard>

          {/* Card 6: Free Community Modules */}
          <SpotlightCard
            spotlightColor="rgba(219, 21, 242, 0.18)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col rounded-2xl p-7 border-amber-500/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10">
                <IconBurnFlame className="h-7 w-7" />
              </div>
              <span className="font-mono text-[11px] font-semibold text-amber-300">
                0% PLATFORM TAX
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Free Mass Airdrops &amp; Deflationary Burns
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Execute token burns and mass airdrops to thousands of community wallets directly from your dashboard without operational platform fees.
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Mass airdrop engine to multi-sig wallets</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Deflationary token burn smart laws</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Pay only native Solana gas</span>
              </li>
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
