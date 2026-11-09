"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Cpu,
  RefreshCw,
  Terminal,
} from "lucide-react";

export default function SafetyVerifier() {
  const [mode, setMode] = useState<"lsos" | "legacy">("lsos");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleToggle = (newMode: "lsos" | "legacy") => {
    if (newMode === mode) return;
    setIsVerifying(true);
    setMode(newMode);
    setTimeout(() => {
      setIsVerifying(false);
    }, 400);
  };

  const securityChecks = [
    {
      label: "Mempool & Sniper Protection",
      desc: "Vulnerability to block-zero bots and frontrunning",
      lsosStatus: "PASSED",
      lsosDetail: "Private Jito Validator Bundles (Mempool 100% Bypassed)",
      legacyStatus: "VULNERABLE",
      legacyDetail: "Public mempool exposed; sniper bots buy first block",
    },
    {
      label: "Liquidity Pool Security",
      desc: "Permanent LP lock and rug-pull prevention",
      lsosStatus: "PASSED",
      lsosDetail: "70% Raised Liquidity Locked Forever at PDA Birth",
      legacyStatus: "CRITICAL RISK",
      legacyDetail: "Manual third-party locker; vulnerable to sudden removal",
    },
    {
      label: "Team Allocation Governance",
      desc: "Developer dump protection & linear vesting",
      lsosStatus: "PASSED",
      lsosDetail: "Streamflow Escrow (Linear 25% weekly / 4-week milestones)",
      legacyStatus: "UNLOCKED",
      legacyDetail: "Unlocked developer wallets; instant community dump risk",
    },
    {
      label: "Capital Protection Switch",
      desc: "Softcap refund assurance if minimum raise is missed",
      lsosStatus: "PASSED",
      lsosDetail: "Non-Custodial PDA Refund Switch (Max 7-day presale)",
      legacyStatus: "ABSENT",
      legacyDetail: "No automatic refund; funds held manually by deployer",
    },
    {
      label: "Authority Manipulation",
      desc: "Mint and freeze authorities after deployment",
      lsosStatus: "PASSED",
      lsosDetail: "Mint & Freeze Authorities Revoked Programmatically",
      legacyStatus: "VARIABLE",
      legacyDetail: "Often retained or requires manual revocation step",
    },
    {
      label: "Transaction Overhead",
      desc: "Platform swap fee on liquidity pool",
      lsosStatus: "PASSED",
      lsosDetail: "0.175% Ultra-Low Flat Fee on Standalone Pools",
      legacyStatus: "HIGH TAX",
      legacyDetail: "1.00% to 2.00% fee extraction on every transaction",
    },
  ];

  return (
    <section id="safety-verifier" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-mono text-xs font-semibold tracking-wider text-solana-cyan uppercase">
            SIMULATED SMART CONTRACT AUDIT
          </span>
          <h2 className="mt-4 font-lsos text-3xl tracking-wider text-white sm:text-5xl lg:text-6xl">
            THE ANCHOR PDA AUDIT MATRIX
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Compare contract-level safeguards side by side. Select an architecture to simulate an automated security audit.
          </p>

          {/* Interactive Architecture Selector Toggle */}
          <div className="mt-8 inline-flex rounded-2xl border border-white/10 bg-[#07070d] p-1.5">
            <button
              onClick={() => handleToggle("lsos")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-mono text-xs font-bold transition-all ${
                mode === "lsos"
                  ? "bg-solana-cyan/15 text-solana-cyan shadow-lg shadow-solana-cyan/10 border border-solana-cyan/40"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              <span>LSOS PROTECTED PDA</span>
            </button>

            <button
              onClick={() => handleToggle("legacy")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 font-mono text-xs font-bold transition-all ${
                mode === "legacy"
                  ? "bg-red-500/15 text-red-400 shadow-lg shadow-red-500/10 border border-red-500/40"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <ShieldAlert className="h-4 w-4" />
              <span>UNPROTECTED LEGACY LAUNCH</span>
            </button>
          </div>
        </div>

        {/* Audit Results Table Card */}
        <div className="glass-panel mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-solana-cyan" />
              <span className="text-white/60">
                INSPECTOR:{" "}
                <strong className="text-white">
                  {mode === "lsos"
                    ? "Anchor PDA Zero-Fraud Engine"
                    : "Standard Bonding Curve / Unverified AMM"}
                </strong>
              </span>
            </div>

            <span
              className={`rounded-full px-2.5 py-0.5 font-semibold ${
                mode === "lsos"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : "bg-red-500/10 text-red-400 border border-red-500/30"
              }`}
            >
              {mode === "lsos" ? "6 OF 6 VERIFIED" : "6 OF 6 EXPOSED"}
            </span>
          </div>

          <div
            className={`mt-6 space-y-4 transition-opacity duration-300 ${
              isVerifying ? "opacity-30" : "opacity-100"
            }`}
          >
            {securityChecks.map((item, idx) => {
              const isPassed = mode === "lsos";
              const statusText = isPassed ? item.lsosStatus : item.legacyStatus;
              const detailText = isPassed ? item.lsosDetail : item.legacyDetail;

              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:gap-6 ${
                    isPassed
                      ? "border-emerald-500/20 bg-emerald-500/[0.02]"
                      : "border-red-500/20 bg-red-500/[0.02]"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs text-white/50">{item.desc}</p>
                  </div>

                  <div className="flex items-center gap-3 sm:text-right">
                    <div className="flex flex-col sm:items-end">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isPassed ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {statusText}
                      </span>
                      <span className="text-[11px] text-white/70">
                        {detailText}
                      </span>
                    </div>

                    {isPassed ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                    ) : (
                      <XCircle className="h-5 w-5 shrink-0 text-red-400" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
            <span className="font-mono">
              Anchor Framework PDA • Solana Program ID: LSOS_2027
            </span>
            <span className="text-solana-cyan">
              {mode === "lsos"
                ? "✓ 100% Non-Custodial Architecture"
                : "⚠ Critical execution risks detected"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
