"use client";

import React from "react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";

export default function Roadmap() {
  const phases = [
    {
      phase: "PHASE 01",
      status: "IN ACTIVE DEVELOPMENT",
      statusColor: "text-solana-cyan border-solana-cyan/30 bg-solana-cyan/10",
      spotlight: "rgba(0, 244, 253, 0.2)",
      date: "FEBRUARY 1, 2027 • MAINNET LIVE",
      title: "Solana Mainnet Launch & Standalone Pools",
      desc: "Full deployment of the core LSOS Anchor PDA contracts, native SOL and USDC standalone liquidity pools, Streamflow programmatic lock integration, and deployment of the First 10 Genesis Partners.",
      deliverables: [
        "Corporate Restructuring & Dubai Freezone Incorporation (Official registration and compliance alignment for institutional-grade operations prior to global launch)",
        "Private Jito Validator Bundling (Zero sniper mempool leaks)",
        "Automated Streamflow Locks (70% LP locked forever, 30% linear vesting)",
        "0.175% Flat Transaction Fee on Standalone Pools",
        "Genesis 10 Project Cohort Deployments ($7,500 Suite)",
      ],
      current: true,
    },
    {
      phase: "PHASE 02",
      status: "UPCOMING TESTNET",
      statusColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      spotlight: "rgba(5, 105, 255, 0.2)",
      date: "MID 2027 • CROSS-CHAIN INCENTIVIZED TESTNET",
      title: "Multi-Network Expansion & Public Testnet",
      desc: "Opening the incentivized stress-testnet sandbox to simulate high-frequency trading and cross-chain liquidity routing to Base, BNB Chain, and Arbitrum with active bug bounty rewards.",
      deliverables: [
        "Cross-Chain Bridge Deployment to Base, BNB Chain & Arbitrum",
        "Risk-Free Developer Sandbox with Community Airdrop Incentives",
        "Multi-Network Anchor Security Audits",
      ],
      current: false,
    },
    {
      phase: "PHASE 03",
      status: "SOVEREIGN VISION",
      statusColor: "text-solana-magenta border-solana-magenta/30 bg-solana-magenta/10",
      spotlight: "rgba(219, 21, 242, 0.25)",
      date: "2,500 PROJECTS MILESTONE",
      title: "Sovereign Layer-1 & Non-Custodial Security Wallet",
      desc: "Upon scaling past 2,500 successfully integrated on-chain projects, initiating dedicated infrastructure funded directly from the corporate multi-sig treasury.",
      deliverables: [
        "Dedicated LSOS Layer-1 Network built specifically for zero-fraud token launches",
        "Non-Custodial iOS & Android Web3 Security Wallet with built-in Jito protection",
        "Decentralized Cross-Chain Liquidity Clearing Standard",
      ],
      current: false,
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute right-[-5%] bottom-10 z-0 h-[450px] w-[450px] opacity-[0.03] blur-[1px] select-none">
        <Image
          src="/lsos-svg-icon-acc.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="text-center gsap-reveal-title">
          <h2 className="font-lsos text-3xl tracking-wider text-white sm:text-5xl lg:text-6xl">
            TRANSPARENT PROTOCOL ROADMAP
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            A clear, verifiable development trajectory from Solana Mainnet genesis to multi-chain sovereign infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {phases.map((item, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor={item.spotlight}
              className={`gsap-reveal-card glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-8 ${
                item.current ? "border-solana-cyan/40 bg-white/[0.03]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white/50">
                    {item.phase}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[10px] font-semibold ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="mt-4 font-mono text-xs font-semibold text-solana-cyan">
                  {item.date}
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/40 uppercase">
                    Key Deliverables:
                  </span>
                  {idx === 2 && (
                    <div className="flex h-5 w-5 items-center justify-center rounded-md border border-solana-magenta/40 bg-solana-magenta/10">
                      <Image
                        src="/lsos-svg-icon-acc.svg"
                        alt="LSOS"
                        width={12}
                        height={12}
                      />
                    </div>
                  )}
                </div>

                <ul className="mt-3 space-y-2 text-xs text-white/70">
                  {item.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-solana-cyan" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
