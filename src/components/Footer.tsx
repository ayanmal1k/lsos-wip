"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconTelegram, IconMail, IconArrowUpRight } from "./CustomIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030305] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-1">
                <Image
                  src="/lsos-svg-icon-acc.svg"
                  alt="LSOS"
                  width={28}
                  height={28}
                />
              </div>
              <span className="font-lsos text-xl tracking-[0.1em] text-white">
                LSOS
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              The sovereign anti-MEV launchpad on Solana engineered with standalone liquidity pools, private Jito validator bundles, and programmatic Streamflow escrow locks.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono">
              <a
                href="https://t.me/lsos2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-solana-cyan hover:underline"
              >
                <IconTelegram className="h-4 w-4" />
                <span>t.me/lsos2026</span>
              </a>

              <a
                href="mailto:Contact@launchsafeonsolana.com"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white"
              >
                <IconMail className="h-4 w-4" />
                <span>Contact@launchsafeonsolana.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <span className="font-mono text-xs font-semibold text-white/40 uppercase">
                Architecture
              </span>
              <ul className="mt-4 space-y-2.5 text-xs text-white/70">
                <li>
                  <Link href="#architecture" className="hover:text-white">
                    Private Jito Bundles
                  </Link>
                </li>
                <li>
                  <Link href="#architecture" className="hover:text-white">
                    Streamflow Team Locks
                  </Link>
                </li>
                <li>
                  <Link href="#safety" className="hover:text-white">
                    Anchor PDA Softcap
                  </Link>
                </li>
                <li>
                  <Link href="#architecture" className="hover:text-white">
                    Standalone Pools (0.175%)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs font-semibold text-white/40 uppercase">
                Genesis Partner
              </span>
              <ul className="mt-4 space-y-2.5 text-xs text-white/70">
                <li>
                  <Link href="#genesis-offer" className="hover:text-white">
                    $7,500 SaaS Utility Suite
                  </Link>
                </li>
                <li>
                  <Link href="#genesis-offer" className="hover:text-white">
                    2 On-Chain Mini-Games
                  </Link>
                </li>
                <li>
                  <Link href="#genesis-offer" className="hover:text-white">
                    Standalone Android App
                  </Link>
                </li>
                <li>
                  <Link href="#genesis-offer" className="hover:text-white">
                    24H Trending on LSOS DEX
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs font-semibold text-white/40 uppercase">
                Community &amp; Dev
              </span>
              <ul className="mt-4 space-y-2.5 text-xs text-white/70">
                <li>
                  <a
                    href="https://t.me/lsos2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <span>Telegram Group</span>
                    <IconArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <span className="text-white/40">Launch: Feb 1, 2027</span>
                </li>
                <li>
                  <span className="text-white/40">Solana Mainnet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Development Disclaimer & Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/40">
            <strong>Development Notice:</strong> LSOS is actively in development. Mainnet deployment target is February 1, 2027. All smart contract PDA modules are subject to multi-sig verification and audit standards prior to public launch. This interface is an official development preview for prospective project partners.
          </p>

          <div className="mt-6 flex flex-col justify-between gap-4 font-mono text-[11px] text-white/40 sm:flex-row">
            <span>© 2026-2027 Launch Safe on Solana (LSOS). All rights reserved.</span>
            <span className="text-solana-cyan">Engineered on Solana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
