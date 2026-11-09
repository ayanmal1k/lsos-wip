"use client";

import React, { useState } from "react";
import { IconCheckmark } from "./CustomIcons";

export default function FeeCalculator() {
  const [raiseSol, setRaiseSol] = useState(250);
  const [volumeUsd, setVolumeUsd] = useState(500000);

  // Dynamic calculations (Strictly platform fees, LP fees, swap spread, and Genesis bonus — NO bot/volume tools)
  const upfrontSavings = 1000; // Average traditional deployment & locker cost
  const lockerSavings = 500; // Streamflow automated integration
  const feeSpreadSavings = Math.round(volumeUsd * 0.00825); // 1.00% vs 0.175%
  const genesisBonus = 7500; // SaaS suite

  const totalSavings = upfrontSavings + lockerSavings + feeSpreadSavings + genesisBonus;

  return (
    <section id="calculator" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-mono text-xs font-semibold tracking-wider text-solana-cyan uppercase">
            TRANSPARENT VALUE ANALYSIS
          </span>
          <h2 className="mt-4 font-lsos text-3xl tracking-wider text-white sm:text-5xl lg:text-6xl">
            FOUNDER COST &amp; SAVINGS CALCULATOR
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            See the exact capital savings when launching on LSOS standalone pools versus legacy bonding curves and third-party DEX infrastructure.
          </p>
        </div>

        <div className="glass-panel mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid lg:grid-cols-12">
            {/* Input Controls */}
            <div className="p-8 sm:p-10 lg:col-span-7 lg:border-r lg:border-white/10">
              <div className="space-y-8">
                {/* Raise Slider */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor="raise-slider" className="font-semibold text-white">
                      Target Presale / Raise Target
                    </label>
                    <span className="font-mono text-base font-bold text-solana-cyan tabular-nums">
                      {raiseSol.toLocaleString()} SOL
                    </span>
                  </div>
                  <input
                    id="raise-slider"
                    type="range"
                    min="50"
                    max="2000"
                    step="25"
                    value={raiseSol}
                    onChange={(e) => setRaiseSol(Number(e.target.value))}
                    className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-solana-cyan"
                  />
                  <div className="mt-2 flex justify-between font-mono text-[11px] text-white/40">
                    <span>Min: 50 SOL</span>
                    <span className="text-solana-cyan/80 font-bold">{raiseSol} SOL Selected</span>
                    <span>Max: 2,000 SOL</span>
                  </div>
                </div>

                {/* Volume Slider */}
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <label htmlFor="volume-slider" className="font-semibold text-white">
                      Projected 30-Day Trading Volume
                    </label>
                    <span className="font-mono text-base font-bold text-solana-cyan tabular-nums">
                      ${volumeUsd.toLocaleString()}
                    </span>
                  </div>
                  <input
                    id="volume-slider"
                    type="range"
                    min="100000"
                    max="5000000"
                    step="100000"
                    value={volumeUsd}
                    onChange={(e) => setVolumeUsd(Number(e.target.value))}
                    className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-solana-cyan"
                  />
                  <div className="mt-2 flex justify-between font-mono text-[11px] text-white/40">
                    <span>Min: $100K</span>
                    <span className="text-solana-cyan/80 font-bold">${(volumeUsd / 1000).toFixed(0)}K Selected</span>
                    <span>Max: $5.0M</span>
                  </div>
                </div>

                {/* Built-in Perks list */}
                <div className="border-t border-white/10 pt-6">
                  <span className="text-xs font-semibold text-white/60">
                    Included 100% Free for Genesis Partners:
                  </span>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2 text-xs text-white/80">
                    <div className="flex items-center gap-2">
                      <IconCheckmark className="h-4 w-4 shrink-0" />
                      <span>0 SOL Upfront Deployment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconCheckmark className="h-4 w-4 shrink-0" />
                      <span>Streamflow Escrow Locks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconCheckmark className="h-4 w-4 shrink-0" />
                      <span>Private Jito Mempool Shield</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconCheckmark className="h-4 w-4 shrink-0" />
                      <span>Free Airdrop &amp; Burn Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Result Display (WITHOUT the removed button) */}
            <div className="flex flex-col justify-between bg-[#080811] p-8 sm:p-10 lg:col-span-5">
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-solana-cyan uppercase">
                  ESTIMATED FOUNDER CAPITAL SAVED
                </span>
                <div className="mt-3 font-mono text-4xl font-extrabold text-white sm:text-5xl tabular-nums">
                  ${totalSavings.toLocaleString()}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  Calculated against standard launch costs, third-party locker fees, and high trading fee extracts.
                </p>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-6 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Upfront Platform Cost:</span>
                    <span className="font-bold text-emerald-400">0 SOL ($0)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Standalone Pool Fee:</span>
                    <span className="font-bold text-emerald-400">0.175% vs 1.00%+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Streamflow Token Locks:</span>
                    <span className="font-bold text-emerald-400">Included Free</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/5 pt-2">
                    <span className="text-white/60">Genesis Utility Suite:</span>
                    <span className="font-bold text-solana-magenta">+$7,500 Bonus</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs font-mono text-white/50 text-center">
                <span>0.175% Native Standalone Swap Fee Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
