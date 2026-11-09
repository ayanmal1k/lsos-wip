"use client";

import React from "react";
import { IconCheckmark, IconXMark } from "./CustomIcons";

export default function ComparisonMatrix() {
  const comparisons = [
    {
      feature: "Mempool & Sniper Protection",
      lsos: "Private Jito Bundles (100% Mempool-Shielded)",
      pump: "Public Mempool (Heavy MEV Exposure)",
      traditional: "Vulnerable to Sniper Bots",
      isGood: true,
    },
    {
      feature: "Developer Allocation Locks",
      lsos: "Automated Streamflow Escrow (Linear Vesting)",
      pump: "Zero Locks Enforced (Instant Dump Risk)",
      traditional: "Manual Third-Party Locker",
      isGood: true,
    },
    {
      feature: "Softcap Guarantee",
      lsos: "Anchor PDA Non-Custodial Refund Switch",
      pump: "No Softcap Mechanism",
      traditional: "Centralized / Manual Refunds",
      isGood: true,
    },
    {
      feature: "Liquidity Pool Trading Fee",
      lsos: "0.175% Flat Ultra-Low Fee",
      pump: "1.00% Platform Extraction",
      traditional: "0.25% - 0.50% AMM Fee",
      isGood: true,
    },
    {
      feature: "Liquidity Lock Standard",
      lsos: "70% Programmatically Bound Forever",
      pump: "Bonding Curve Migration",
      traditional: "Variable / Manual Lock",
      isGood: true,
    },
    {
      feature: "Genesis SaaS Utility Suite",
      lsos: "$7,500 Suite (Dashboard, P2E, Android App)",
      pump: "None",
      traditional: "None",
      isGood: true,
    },
    {
      feature: "Trending Exposure",
      lsos: "24H Guaranteed on LSOS Native DEX",
      pump: "King of the Hill (Heavy Competition)",
      traditional: "Paid Trending Ads",
      isGood: true,
    },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center gsap-reveal-title">
          <h2 className="font-lsos text-3xl tracking-wider text-white sm:text-5xl lg:text-6xl">
            LSOS VS TRADITIONAL PLATFORMS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Direct architecture comparison against legacy Solana launchpads and bonding curve models.
          </p>
        </div>

        <div className="glass-panel gsap-reveal-card mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#080811] font-mono text-xs uppercase tracking-wider text-white/50">
                  <th className="p-5 font-semibold">Feature Architecture</th>
                  <th className="border-x border-solana-cyan/30 bg-solana-cyan/10 p-5 font-bold text-solana-cyan">
                    LSOS Launchpad
                  </th>
                  <th className="p-5 font-semibold">Pump.fun</th>
                  <th className="p-5 font-semibold">Traditional DEX Presales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-5 font-medium text-white">
                      {item.feature}
                    </td>

                    <td className="border-x border-solana-cyan/20 bg-solana-cyan/[0.03] p-5 font-semibold text-solana-cyan">
                      <div className="flex items-center gap-2">
                        <IconCheckmark className="h-4 w-4 shrink-0" />
                        <span>{item.lsos}</span>
                      </div>
                    </td>

                    <td className="p-5 text-white/60">
                      <div className="flex items-center gap-2">
                        <IconXMark className="h-4 w-4 shrink-0" />
                        <span>{item.pump}</span>
                      </div>
                    </td>

                    <td className="p-5 text-white/60">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-white/30 text-xs">—</span>
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
