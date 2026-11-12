"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconTelegram, IconXTwitter, IconArrowUpRight, IconMenu, IconClose } from "./CustomIcons";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Protocol Status Bar */}
      <aside className="sticky top-0 z-50 border-b border-white/5 bg-[#06060a]/90 backdrop-blur-md pt-[env(safe-area-inset-top,0px)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-solana-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-solana-cyan" />
            </span>
            <span className="font-mono font-medium tracking-wider text-solana-cyan">
              DEVELOPMENT IN PROGRESS
            </span>
            <span className="hidden text-white/40 sm:inline">•</span>
            <span className="hidden text-white/70 sm:inline">
              Core Anchor PDA &amp; Standalone Pools Under Construction — Mainnet Live:{" "}
              <strong className="text-white">February 1, 2027</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border border-solana-magenta/40 bg-solana-magenta/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-pink-300">
              FIRST 10 GENESIS SPOTS OPEN
            </span>
          </div>
        </div>
      </aside>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-[33px] z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#040407]/90 backdrop-blur-xl shadow-2xl shadow-black/80"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo & Brand Lockup */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-1.5 transition-all duration-300 group-hover:border-solana-cyan/40 group-hover:bg-solana-cyan/5">
              <Image
                src="/lsos-svg-icon-acc.svg"
                alt="LSOS Icon"
                width={32}
                height={32}
                className="transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-lsos text-xl tracking-[0.1em] text-white">
                LSOS
              </span>
              <span className="text-[10px] font-semibold tracking-[0.18em] text-white/40">
                LAUNCH SAFE ON SOLANA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#genesis-offer"
              className="flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span>Genesis Offer</span>
              <span className="rounded-full bg-solana-gradient px-2 py-0.5 font-mono text-[10px] font-bold text-black">
                FIRST 10
              </span>
            </Link>
            <Link
              href="#architecture"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Architecture
            </Link>
            <Link
              href="#anti-clone"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Anti-Clone
            </Link>
            <Link
              href="#safety"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Safety PDA
            </Link>
            <Link
              href="#calculator"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Fee Simulator
            </Link>
            <Link
              href="#roadmap"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Roadmap
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              FAQ
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://x.com/LSOS2026"
              target="_blank"
              rel="noopener noreferrer"
              title="Official LSOS X (Twitter)"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/80 transition-all hover:border-solana-magenta/40 hover:bg-white/[0.08] hover:text-white"
            >
              <IconXTwitter className="h-4 w-4" />
              <span>@LSOS2026</span>
            </a>

            <a
              href="https://t.me/lsos2026"
              target="_blank"
              rel="noopener noreferrer"
              title="Official Telegram Announcements (Broadcast Only)"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/80 transition-all hover:border-solana-cyan/40 hover:bg-white/[0.08] hover:text-white"
            >
              <IconTelegram className="h-4 w-4" />
              <span>Announcements</span>
            </a>

            <button
              onClick={onOpenModal}
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:shadow-white/20 active:scale-95"
            >
              <span>Apply for Genesis Slot</span>
              <IconArrowUpRight className="h-3.5 w-3.5 text-black" />
            </button>
          </div>

          {/* Mobile Menu Toggle (44x44px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white active:scale-95 md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu with Safe-Area Inset Bottom */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-[#07070c] px-6 pt-6 pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] md:hidden overscroll-contain">
            <div className="flex flex-col gap-4">
              <Link
                href="#genesis-offer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-white"
              >
                <span>Genesis Offer</span>
                <span className="rounded-full bg-solana-gradient px-2 py-0.5 font-mono text-[10px] font-bold text-black">
                  FIRST 10
                </span>
              </Link>
              <Link
                href="#architecture"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/80"
              >
                Architecture
              </Link>
              <Link
                href="#anti-clone"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/80"
              >
                Anti-Clone Registry
              </Link>
              <Link
                href="#safety"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/80"
              >
                Safety PDA
              </Link>
              <Link
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/80"
              >
                Fee Simulator
              </Link>
              <Link
                href="#roadmap"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/80"
              >
                Roadmap
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/80"
              >
                FAQ
              </Link>

              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
                <a
                  href="https://x.com/LSOS2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-3 text-sm font-medium text-white"
                >
                  <IconXTwitter className="h-4 w-4" />
                  <span>Follow @LSOS2026 on X</span>
                </a>
                <a
                  href="https://t.me/lsos2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-3 text-sm font-medium text-white"
                >
                  <IconTelegram className="h-4 w-4" />
                  <span>TG Announcements (Broadcast Only)</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="rounded-lg bg-white py-3 text-sm font-semibold text-black"
                >
                  Apply for Genesis Partner Slot
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
