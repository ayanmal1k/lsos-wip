"use client";

import React, { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import {
  IconShieldCheckBrand,
  IconShieldAlertBrand,
  IconLockStreamflow,
  IconCheckmark,
  IconSparkles,
  IconArrowRight,
} from "./CustomIcons";

interface AntiCloneRegistryProps {
  onOpenModal: () => void;
}

export default function AntiCloneRegistry({ onOpenModal }: AntiCloneRegistryProps) {
  const [tickerQuery, setTickerQuery] = useState("");

  // Known registered mock database of on-chain reserved tokens on LSOS
  const registeredTokens = [
    { ticker: "LSOS", name: "Launch Safe on Solana", status: "CORE PROTOCOL RESERVED", slot: "#0000001" },
    { ticker: "SOL", name: "Solana Native", status: "SYSTEM PDA RESERVED", slot: "#0000002" },
    { ticker: "BONK", name: "Bonk Community", status: "ECOSYSTEM RESERVED", slot: "#0000003" },
    { ticker: "JUP", name: "Jupiter Exchange", status: "ECOSYSTEM RESERVED", slot: "#0000004" },
    { ticker: "RAY", name: "Raydium Protocol", status: "ECOSYSTEM RESERVED", slot: "#0000005" },
    { ticker: "USDC", name: "USD Coin (Circle)", status: "TREASURY RESERVED", slot: "#0000006" },
  ];

  const cleanQuery = tickerQuery.trim().toUpperCase().replace(/^\$/, "");

  const matchedToken = registeredTokens.find(
    (t) => t.ticker === cleanQuery || t.name.toUpperCase().includes(cleanQuery)
  );

  const isReserved = Boolean(matchedToken);
  const hasQuery = cleanQuery.length > 0;

  const quickExamples = ["LSOS", "BONK", "SOL", "MY_TOKEN", "SISTER_COIN"];

  return (
    <section id="anti-clone" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-solana-violet/10 blur-[120px] select-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center gsap-reveal-title">
          <h2 className="font-lsos text-3xl tracking-wider text-white sm:text-5xl lg:text-6xl">
            ON-CHAIN ANTI-CLONE REGISTRY
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            On standard launchpads, malicious actors deploy duplicate copycat tokens to frontrun communities. When a name or ticker is registered on LSOS, the Anchor PDA locks it permanently — duplicate deployments are rejected at bytecode level.
          </p>
        </div>

        {/* Interactive Search Console Card */}
        <div className="glass-panel gsap-reveal-card mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/15 p-6 shadow-2xl shadow-black sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-solana-cyan">
                LIVE NAMESPACE VERIFICATION ENGINE
              </span>
              <p className="mt-1 text-xs text-white/50">
                Test any ticker or project name against the LSOS on-chain anti-duplication database.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Anchor PDA Guard: Active</span>
            </div>
          </div>

          {/* Search Input Box */}
          <div className="mt-8">
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-lg font-bold text-solana-cyan">
                $
              </span>
              <input
                type="text"
                value={tickerQuery}
                onChange={(e) => setTickerQuery(e.target.value)}
                placeholder="Enter Token Ticker or Name (e.g. LSOS, BONK, SISTER)..."
                className="w-full rounded-2xl border border-white/15 bg-[#06060c] py-4 pl-10 pr-24 font-mono text-base font-semibold text-white placeholder-white/30 transition-all focus:border-solana-cyan focus:bg-[#070710] focus:outline-none focus:ring-2 focus:ring-solana-cyan/20"
              />
              {hasQuery && (
                <button
                  onClick={() => setTickerQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-white/40 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Test Chips */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-white/40">Try Sample Tickers:</span>
              {quickExamples.map((item) => (
                <button
                  key={item}
                  onClick={() => setTickerQuery(item)}
                  className={`rounded-lg border px-2.5 py-1 font-mono text-xs transition-colors ${
                    cleanQuery === item
                      ? "border-solana-cyan bg-solana-cyan/20 text-solana-cyan font-bold"
                      : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  ${item}
                </button>
              ))}
            </div>
          </div>

          {/* Live Dynamic Verification Result */}
          <div className="mt-8 rounded-2xl border p-5 sm:p-6 transition-all duration-300">
            {!hasQuery ? (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  <IconSparkles className="h-6 w-6 text-solana-cyan" />
                </div>
                <h4 className="mt-3 text-sm font-bold text-white">
                  Awaiting Namespace Input
                </h4>
                <p className="mt-1 max-w-md text-xs text-white/50">
                  Type a ticker above to see how LSOS prevents copycat tokens and protects community liquidity before deployment.
                </p>
              </div>
            ) : isReserved ? (
              /* Already Reserved / Cloned Protected */
              <div className="border-solana-magenta/40 bg-solana-magenta/[0.04] p-2 rounded-xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-solana-magenta/40 bg-solana-magenta/15 shadow-lg shadow-solana-magenta/10">
                      <IconShieldAlertBrand className="h-6 w-6 text-pink-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-lg font-bold text-white">
                          ${matchedToken?.ticker}
                        </span>
                        <span className="rounded border border-solana-magenta/40 bg-solana-magenta/20 px-2 py-0.5 font-mono text-[10px] font-bold text-pink-300 uppercase">
                          LOCKED &amp; PROTECTED
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-white/70">
                        {matchedToken?.name} • Identifier: <span className="font-mono text-solana-cyan">{matchedToken?.slot}</span>
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 font-mono text-xs font-semibold text-emerald-400">
                    <IconLockStreamflow className="h-4 w-4" />
                    <span>Copycat Rejection: Active</span>
                  </span>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/60">
                  <strong className="text-white">On-Chain Protection Enforcement:</strong>{" "}
                  This ticker is already registered in the LSOS Anchor system. Any secondary transaction attempting to initialize an identical name or ticker on LSOS is automatically aborted with <code className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-pink-300">ERR_DUPLICATE_TICKER_COLLISION</code>.
                </div>
              </div>
            ) : (
              /* Unreserved / Available for Genesis Partner */
              <div className="border-emerald-500/30 bg-emerald-500/[0.04] p-2 rounded-xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/15 shadow-lg shadow-emerald-500/10">
                      <IconShieldCheckBrand className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-lg font-bold text-white">
                          ${cleanQuery}
                        </span>
                        <span className="rounded border border-emerald-500/40 bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300 uppercase">
                          NAMESPACE AVAILABLE
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-white/70">
                        No active project has claimed this ticker yet on LSOS.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenModal}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-solana-gradient px-4 py-2.5 text-xs font-bold text-black transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-solana-cyan/20"
                  >
                    <span>Reserve via Email</span>
                    <IconArrowRight className="h-3.5 w-3.5 text-black" />
                  </button>
                </div>

                <div className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/60">
                  <strong className="text-white">Genesis Partner Opportunity:</strong>{" "}
                  Established projects launching a sister token with an existing community can claim this namespace permanently at 0 SOL upfront cost with our complete $7,500 SaaS utility suite.
                </div>
              </div>
            )}
          </div>

          {/* Three Architecture Feature Pillars */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3 border-t border-white/10 pt-8">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="font-mono text-xs font-bold text-solana-cyan">
                01 • Permanent PDA Lock
              </span>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Tickers and project titles are permanently mapped to the contract Program Derived Address. No duplicates can be forged.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="font-mono text-xs font-bold text-purple-300">
                02 • Bytecode-Level Rejection
              </span>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                If an imposter submits a deployment bundle with an already registered ticker, Solana validators reject the transaction on-chain.
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <span className="font-mono text-xs font-bold text-solana-magenta">
                03 • Community Safe Haven
              </span>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Traders can verify the official project ticker directly on LSOS without falling victim to 50 fake copycat tokens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
