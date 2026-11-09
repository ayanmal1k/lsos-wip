"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  IconArrowRight,
  IconShieldJito,
  IconLockStreamflow,
  IconAnchorSoftcap,
  IconStandaloneLP,
} from "./CustomIcons";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  // Countdown to February 1, 2027 UTC
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2027-02-01T00:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-28">
      {/* Ambient Large Floating LSOS Vector Watermark in Background */}
      <div className="pointer-events-none absolute -left-24 top-10 z-0 h-[450px] w-[450px] opacity-[0.035] blur-[1px] select-none">
        <Image
          src="/lsos-svg-icon-acc.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headlines & Typography */}
          <div className="flex flex-col lg:col-span-7">
            {/* Kinetic Display Headline */}
            <div className="relative">
              <h1 className="font-lsos text-4xl leading-[1.08] tracking-wider text-white sm:text-6xl lg:text-7xl gsap-reveal-title">
                LAUNCH SAFE <br />
                <span className="text-solana-gradient">ON SOLANA.</span>
              </h1>

              {/* Floating GSAP Brand Icon Emblem */}
              <div className="gsap-floating-logo absolute -right-6 -top-6 hidden lg:block select-none pointer-events-none opacity-80">
                <div className="relative h-16 w-16 rounded-2xl border border-white/15 bg-white/[0.04] p-2.5 shadow-xl shadow-solana-cyan/20 backdrop-blur-md">
                  <Image
                    src="/lsos-svg-icon-acc.svg"
                    alt="LSOS Emblem"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg gsap-reveal-title">
              The next-generation sovereign launchpad built with{" "}
              <strong className="text-white">standalone liquidity pools (0.175% fee)</strong>,{" "}
              <strong className="text-white">private Jito validator bundles</strong>, and{" "}
              <strong className="text-white">programmatic Streamflow locks</strong>. Zero upfront platform costs, and zero bot sniping at block zero.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 gsap-reveal-title">
              <button
                onClick={onOpenModal}
                className="group relative inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 active:scale-95"
              >
                <span>Apply as Genesis Partner</span>
                <IconArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#genesis-offer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-solana-cyan/40 hover:bg-white/[0.08]"
              >
                <span>Inspect $7,500 SaaS Offer</span>
              </a>
            </div>

            {/* Micro Metrics Strip */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 gsap-reveal-title">
              <div>
                <span className="font-mono text-xl font-bold tracking-tight text-white tabular-nums sm:text-2xl">
                  0.175%
                </span>
                <p className="text-xs text-white/50">Standalone Pool Fee</p>
              </div>

              <div>
                <span className="font-mono text-xl font-bold tracking-tight text-white tabular-nums sm:text-2xl">
                  0 SOL
                </span>
                <p className="text-xs text-white/50">Upfront Platform Cost</p>
              </div>

              <div>
                <span className="font-mono text-xl font-bold tracking-tight text-white tabular-nums sm:text-2xl">
                  70% / 30%
                </span>
                <p className="text-xs text-white/50">Permanent LP / Linear Vest</p>
              </div>

              <div>
                <span className="font-mono text-xl font-bold tracking-tight text-solana-cyan tabular-nums sm:text-2xl">
                  $7,500
                </span>
                <p className="text-xs text-white/50">Free Genesis Suite</p>
              </div>
            </div>
          </div>

          {/* Right Column: Genesis Protocol Architecture Card */}
          <div className="lg:col-span-5 gsap-reveal-title">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-solana-cyan/40 via-solana-violet/20 to-solana-magenta/40 shadow-2xl shadow-solana-cyan/10">
              <div className="relative overflow-hidden rounded-3xl bg-[#080811]/90 p-6 sm:p-8 backdrop-blur-xl">
                {/* Ambient Internal Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-solana-cyan/15 blur-3xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-solana-magenta/15 blur-3xl" />

                {/* Card Top: Brand & Mainnet Status */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] p-2 shadow-inner">
                      <Image
                        src="/lsos-svg-icon-acc.svg"
                        alt="LSOS"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-lsos text-base tracking-wider text-white">
                        LSOS PROTOCOL
                      </span>
                      <span className="block font-mono text-[11px] text-white/50">
                        Sovereign Solana Launchpad
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-solana-cyan/30 bg-solana-cyan/10 px-3 py-1 font-mono text-[11px] font-semibold text-solana-cyan">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-solana-cyan opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-solana-cyan" />
                    </span>
                    <span>FEB 1, 2027</span>
                  </div>
                </div>

                {/* Central Brand Visual Showcase */}
                <div className="my-6 flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent py-8 text-center relative overflow-hidden">
                  {/* Subtle Concentric Rings */}
                  <div className="pointer-events-none absolute h-40 w-40 rounded-full border border-solana-cyan/10 animate-pulse" />
                  <div className="pointer-events-none absolute h-56 w-56 rounded-full border border-solana-violet/10" />

                  <div className="relative h-24 w-24 transition-transform duration-500 hover:scale-110">
                    <Image
                      src="/lsos-svg-icon-acc.svg"
                      alt="LSOS Mark"
                      fill
                      className="object-contain drop-shadow-[0_0_25px_rgba(0,244,253,0.35)]"
                    />
                  </div>

                  <span className="mt-4 font-lsos text-lg tracking-widest text-white">
                    LAUNCH SAFE ON SOLANA
                  </span>
                  <span className="mt-1 font-mono text-xs text-solana-cyan">
                    Native Standalone Liquidity Pools
                  </span>
                </div>

                {/* Core Architecture Highlights */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-solana-cyan/30 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-2.5">
                      <IconStandaloneLP className="h-4 w-4 shrink-0 text-solana-cyan" />
                      <span className="text-white/70">Swap Transaction Fee</span>
                    </div>
                    <span className="font-bold text-emerald-400">0.175% Flat</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-solana-cyan/30 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-2.5">
                      <IconShieldJito className="h-4 w-4 shrink-0 text-solana-cyan" />
                      <span className="text-white/70">Anti-MEV Frontrunning</span>
                    </div>
                    <span className="font-bold text-solana-cyan">Private Jito Bundle</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-purple-400/30 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-2.5">
                      <IconLockStreamflow className="h-4 w-4 shrink-0 text-purple-400" />
                      <span className="text-white/70">Liquidity Custody</span>
                    </div>
                    <span className="font-bold text-purple-300">70% Streamflow Locked</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-pink-400/30 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-2.5">
                      <IconAnchorSoftcap className="h-4 w-4 shrink-0 text-pink-400" />
                      <span className="text-white/70">Presale Capital Protection</span>
                    </div>
                    <span className="font-bold text-pink-300">Anchor PDA Refund</span>
                  </div>
                </div>

                {/* Genesis Intake Status & CTA */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="mb-4 flex items-center justify-between text-xs">
                    <span className="font-mono text-white/50">Genesis Intake Status:</span>
                    <span className="font-mono font-bold text-white">
                      0 / 10 Slots Shortlisted
                    </span>
                  </div>

                  <button
                    onClick={onOpenModal}
                    className="group relative flex w-full items-center justify-center gap-2.5 rounded-xl bg-solana-gradient py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-solana-cyan/25 active:scale-[0.98]"
                  >
                    <span>Apply for Genesis Partner Slot</span>
                    <IconArrowRight className="h-4 w-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="mt-2 text-center font-mono text-[11px] text-white/40">
                    Includes Free $7,500 SaaS Utility Suite • 0 SOL Upfront Cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Mainnet Countdown Bar */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#090912]/80 p-6 backdrop-blur-md gsap-reveal-title">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/lsos-svg-icon-acc.svg"
                  alt="LSOS"
                  width={22}
                  height={22}
                />
                <h3 className="font-lsos text-xl tracking-wider text-white sm:text-2xl">
                  FEBRUARY 1, 2027 • 00:00 UTC
                </h3>
              </div>
              <p className="mt-1 text-xs text-white/50">
                Standalone Liquidity Pools, Streamflow Locks &amp; Genesis Partner Deployments go live on Solana.
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono">
              <div className="flex min-w-[70px] flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="text-2xl font-bold text-white tabular-nums sm:text-3xl">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] text-white/40">DAYS</span>
              </div>
              <span className="text-xl font-bold text-white/20">:</span>

              <div className="flex min-w-[70px] flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="text-2xl font-bold text-white tabular-nums sm:text-3xl">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] text-white/40">HOURS</span>
              </div>
              <span className="text-xl font-bold text-white/20">:</span>

              <div className="flex min-w-[70px] flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="text-2xl font-bold text-white tabular-nums sm:text-3xl">
                  {timeLeft.minutes}
                </span>
                <span className="text-[10px] text-white/40">MINS</span>
              </div>
              <span className="text-xl font-bold text-white/20">:</span>

              <div className="flex min-w-[70px] flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                <span className="text-2xl font-bold text-solana-cyan tabular-nums sm:text-3xl">
                  {timeLeft.seconds}
                </span>
                <span className="text-[10px] text-white/40">SECS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
