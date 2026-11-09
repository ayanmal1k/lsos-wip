"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IconArrowRight, IconRefresh } from "./CustomIcons";

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

  // Engine Terminal Interactive Tabs
  const [activeTab, setActiveTab] = useState<"jito" | "streamflow" | "refund" | "lp">("jito");
  const [isSimulating, setIsSimulating] = useState(false);
  const [extraLogs, setExtraLogs] = useState<string[]>([]);

  const handleRunSim = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const slot = Math.floor(290000000 + Math.random() * 500000);
      const time = new Date().toISOString().substring(11, 23);
      setExtraLogs((prev) => [
        ...prev.slice(-3),
        `[${time}] Jito Bundle Confirmed | Slot #${slot} | 0.015 SOL Tip | 0 sniper transactions allowed`,
      ]);
      setIsSimulating(false);
    }, 600);
  };

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
            {/* Status Pills */}
            <div className="mb-6 flex flex-wrap items-center gap-2.5 gsap-reveal-title">
              <span className="inline-flex items-center gap-2 rounded-full border border-solana-cyan/30 bg-solana-cyan/10 px-3 py-1 font-mono text-xs font-semibold text-solana-cyan shadow-[0_0_12px_rgba(0,244,253,0.15)]">
                <span className="h-1.5 w-1.5 rounded-full bg-solana-cyan shadow-[0_0_8px_#00f4fd]" />
                SOLANA MAINNET LAUNCHPAD
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-solana-magenta/30 bg-solana-magenta/10 px-3 py-1 font-mono text-xs font-medium text-pink-300">
                <span>GENESIS INTAKE:</span>
                <strong className="text-white">0 / 10 FILLED</strong>
                <span className="text-white/50">(10 SLOTS AVAILABLE)</span>
              </span>
            </div>

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

          {/* Right Column: Interactive Engine Terminal Preview */}
          <div className="lg:col-span-5 gsap-reveal-title">
            <div className="glass-panel overflow-hidden rounded-2xl border-white/15 shadow-2xl shadow-black transition-all duration-300 hover:border-solana-cyan/40">
              {/* Terminal Window Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#08080f] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-white/60">
                    LSOS_ANCHOR_ENGINE_v1.0.so
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/lsos-svg-icon-acc.svg"
                    alt="LSOS"
                    width={14}
                    height={14}
                  />
                  <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-solana-cyan">
                    DEVNET SANDBOX
                  </span>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="grid grid-cols-4 border-b border-white/10 bg-[#06060a] text-xs font-mono">
                <button
                  onClick={() => setActiveTab("jito")}
                  className={`py-2.5 px-2 text-center transition-colors ${
                    activeTab === "jito"
                      ? "border-b-2 border-solana-cyan bg-white/5 font-semibold text-solana-cyan"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  Jito Shield
                </button>
                <button
                  onClick={() => setActiveTab("streamflow")}
                  className={`py-2.5 px-2 text-center transition-colors ${
                    activeTab === "streamflow"
                      ? "border-b-2 border-solana-cyan bg-white/5 font-semibold text-solana-cyan"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  Locks
                </button>
                <button
                  onClick={() => setActiveTab("refund")}
                  className={`py-2.5 px-2 text-center transition-colors ${
                    activeTab === "refund"
                      ? "border-b-2 border-solana-cyan bg-white/5 font-semibold text-solana-cyan"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  Softcap
                </button>
                <button
                  onClick={() => setActiveTab("lp")}
                  className={`py-2.5 px-2 text-center transition-colors ${
                    activeTab === "lp"
                      ? "border-b-2 border-solana-cyan bg-white/5 font-semibold text-solana-cyan"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  0.175% LP
                </button>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5">
                {activeTab === "jito" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Mempool Exposure:</span>
                      <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                        BYPASSED VIA PRIVATE JITO
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Block-Zero Frontrunner Bots:</span>
                      <span className="font-mono text-solana-cyan">100% Blind at Deployment</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">MEV Sandwich Vulnerability:</span>
                      <span className="font-mono text-emerald-400">0.00% Zero Vector</span>
                    </div>
                  </div>
                )}

                {activeTab === "streamflow" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Developer Allocation:</span>
                      <span className="rounded border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-purple-300">
                        STREAMFLOW ESCROW LOCKED
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Vesting Curve:</span>
                      <span className="font-mono text-white">Linear 25% weekly / 4 weeks</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Instant Team Dump Risk:</span>
                      <span className="font-mono text-emerald-400">Impossible by PDA rules</span>
                    </div>
                  </div>
                )}

                {activeTab === "refund" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Presale Window:</span>
                      <span className="font-mono text-white">Up to 7 Days (Immutable at birth)</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Condition:</span>
                      <span className="font-mono text-pink-400">If Raised &lt; Softcap at T-0</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Investor Protection:</span>
                      <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                        NON-CUSTODIAL REFUND SWITCH
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "lp" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Pool Type:</span>
                      <span className="rounded border border-solana-cyan/30 bg-solana-cyan/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-solana-cyan">
                        LSOS NATIVE STANDALONE LP
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Swap Transaction Fee:</span>
                      <span className="font-mono text-emerald-400 font-bold">0.175% Flat</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Liquidity Lock:</span>
                      <span className="font-mono text-white">70% Bound Permanently</span>
                    </div>
                  </div>
                )}

                {/* Simulated Log Feed */}
                <div className="mt-4 rounded-xl border border-white/5 bg-[#050508] p-3 font-mono text-[11px] leading-relaxed text-white/60">
                  <div className="text-white/40">// Live Anchor Contract Telemetry:</div>
                  <div className="text-solana-cyan">
                    &gt; [PDA_BOOT] Program ID: LSOS_LAUNCHPAD_2027_v1
                  </div>
                  <div className="text-emerald-400">
                    &gt; [STREAMFLOW] Liquidity LP 70% Vault Locked permanently.
                  </div>
                  <div className="text-pink-400">
                    &gt; [JITO_BUNDLE] Public mempool bypassed. Zero sniper exposure.
                  </div>
                  {extraLogs.map((log, index) => (
                    <div key={index} className="text-yellow-400">
                      &gt; {log}
                    </div>
                  ))}
                </div>

                {/* Simulation Trigger Button */}
                <div className="mt-4 flex items-center justify-between pt-2">
                  <button
                    onClick={handleRunSim}
                    disabled={isSimulating}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/80 transition-colors hover:border-solana-cyan/40 hover:bg-white/10 hover:text-white"
                  >
                    <IconRefresh className={`h-3.5 w-3.5 ${isSimulating ? "animate-spin text-solana-cyan" : ""}`} />
                    <span>{isSimulating ? "Validating Jito Bundle..." : "Re-Run Jito Bundle"}</span>
                  </button>

                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    ENGINE: READY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Mainnet Countdown Bar */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#090912]/80 p-6 backdrop-blur-md gsap-reveal-title">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/lsos-svg-icon-acc.svg"
                  alt="LSOS"
                  width={18}
                  height={18}
                />
                <span className="font-mono text-xs font-semibold tracking-wider text-solana-cyan uppercase">
                  TARGET MAINNET DEPLOYMENT
                </span>
              </div>
              <h3 className="mt-1 font-lsos text-xl tracking-wider text-white sm:text-2xl">
                FEBRUARY 1, 2027 • 00:00 UTC
              </h3>
              <p className="text-xs text-white/50">
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
