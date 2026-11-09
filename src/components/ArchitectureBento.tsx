"use client";

import React from "react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import {
  IconShieldJito,
  IconLockStreamflow,
  IconAnchorSoftcap,
  IconStandaloneLP,
} from "./CustomIcons";

export default function ArchitectureBento() {
  return (
    <section id="architecture" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute -left-20 top-1/3 z-0 h-[500px] w-[500px] opacity-[0.03] blur-[1px] select-none">
        <Image
          src="/lsos-svg-icon-acc.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="gsap-reveal-title">
          <div className="inline-flex items-center gap-2 rounded-full border border-solana-cyan/30 bg-solana-cyan/10 px-3 py-1 font-mono text-xs font-semibold text-solana-cyan">
            <span>TECHNICAL ARCHITECTURE &amp; SAFEGUARDS</span>
          </div>

          <h2 className="mt-4 font-lsos text-3xl tracking-wider text-white sm:text-5xl lg:text-6xl">
            HARDCODED ON-CHAIN INTEGRITY. <br />
            <span className="text-solana-gradient">
              ENGINEERED FROM BLOCK ZERO.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Traditional launchpads leave retail traders vulnerable to sniper bot manipulation and sudden developer exits. LSOS enforces cryptographic discipline at the bytecode level.
          </p>
        </div>

        {/* Bento Grid with Spotlight Hover and GSAP Reveal */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* Bento 1: Private Jito Validator Bundles (Spans 2 columns) */}
          <SpotlightCard
            spotlightColor="rgba(0, 244, 253, 0.2)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-8 md:col-span-2 border-solana-cyan/30"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-solana-cyan/30 bg-solana-cyan/10">
                  <IconShieldJito className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-solana-cyan/30 bg-solana-cyan/10 px-3 py-1 font-mono text-xs font-semibold text-solana-cyan">
                  MEMPOOL ISOLATION
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Private Jito Validator Bundles
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                Traditional launchpads expose deployment transactions to public mempools, allowing sniper bots to frontrun retail investors and instantly distort the chart. LSOS routes deployments strictly through private Jito-Solana validator bundles.
              </p>
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="font-mono text-xs text-white/50">Mempool:</span>
                <p className="mt-1 font-semibold text-white">100% Bypassed</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="font-mono text-xs text-white/50">Frontrunner Bots:</span>
                <p className="mt-1 font-semibold text-solana-cyan">Completely Blind</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="font-mono text-xs text-white/50">MEV Sandwich:</span>
                <p className="mt-1 font-semibold text-emerald-400">Zero Execution Vector</p>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento 2: Programmatic Streamflow Locks */}
          <SpotlightCard
            spotlightColor="rgba(89, 34, 246, 0.22)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-8 border-purple-500/30"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10">
                  <IconLockStreamflow className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-xs font-semibold text-purple-300">
                  ANTI-RUG ESCROW
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Streamflow Team Locks
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                All development and team token allocations are instantly locked into Streamflow vaults upon creation. Tokens are released linearly through decentralized smart laws.
              </p>
            </div>

            <div className="mt-8 space-y-2 border-t border-white/10 pt-6 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-white/50">Liquidity LP:</span>
                <span className="font-bold text-white">70% Bound Forever</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">Team Vesting:</span>
                <span className="font-bold text-solana-cyan">30% Linear Escrow</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">Sudden Exits:</span>
                <span className="font-bold text-emerald-400">Impossible by Code</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento 3: Anchor PDA Softcap Guarantee */}
          <SpotlightCard
            spotlightColor="rgba(0, 244, 253, 0.18)"
            id="safety"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-8 border-emerald-500/30"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                  <IconAnchorSoftcap className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-300">
                  PDA SMART LAWS
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                The Softcap Guarantee
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Presale durations are strictly capped up to 7 days maximum and locked into the Anchor PDA. If the softcap target is not achieved when the countdown hits zero, the contract unlocks an instant refund button.
              </p>
            </div>

            <div className="mt-8 space-y-2 border-t border-white/10 pt-6 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-white/50">Refund Method:</span>
                <span className="font-bold text-emerald-400">Non-Custodial</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">Timeline Limit:</span>
                <span className="font-bold text-white">Max 7 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">Extension Risk:</span>
                <span className="font-bold text-white">Zero Alteration</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento 4: Standalone Independent Pools (Spans 2 columns) */}
          <SpotlightCard
            spotlightColor="rgba(219, 21, 242, 0.2)"
            className="gsap-reveal-card glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-8 md:col-span-2 border-solana-magenta/30"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-solana-blue/30 bg-solana-blue/10">
                  <IconStandaloneLP className="h-7 w-7" />
                </div>
                <span className="rounded-full border border-solana-blue/30 bg-solana-blue/10 px-3 py-1 font-mono text-xs font-semibold text-solana-cyan">
                  NATIVE STANDALONE LP
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Standalone Independent Liquidity Pools (0.175% Fee)
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                LSOS operates independent liquidity pools on Solana designed for direct transaction execution. Traders enjoy an ultra-low 0.175% flat swap fee — preserving project capital and eliminating predatory third-party extraction.
              </p>
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="font-mono text-xs text-white/50">Flat Swap Fee:</span>
                <p className="mt-1 font-mono text-lg font-bold text-emerald-400">0.175%</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="font-mono text-xs text-white/50">Supported Pairs:</span>
                <p className="mt-1 font-semibold text-white">SOL &amp; USDC</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="font-mono text-xs text-white/50">AMM Overhead:</span>
                <p className="mt-1 font-semibold text-solana-cyan">Zero Bloated Routes</p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
