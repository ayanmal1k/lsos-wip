"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconTelegram,
  IconXTwitter,
  IconArrowUpRight,
} from "./CustomIcons";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(97);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update header height dynamically for exact mobile drawer alignment
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open (mobile-native standard)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Genesis Offer", href: "#genesis-offer" },
    { label: "Architecture", href: "#architecture" },
    { label: "Safety PDA", href: "#safety" },
    { label: "Fee Simulator", href: "#calculator" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full transition-all duration-300"
      >
        {/* 1. Protocol Status Banner */}
        <div className="border-b border-white/[0.06] bg-[#050508]/95 backdrop-blur-md pt-[env(safe-area-inset-top,0px)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] font-mono">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-solana-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-solana-cyan" />
              </span>
              <span className="font-bold tracking-wider text-solana-cyan">
                DEVNET SANDBOX
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="text-white/70 hidden sm:inline">
                Core Anchor PDA &amp; Standalone Pools In Development — Mainnet Live:{" "}
                <strong className="text-white">February 1, 2027</strong>
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-full border border-solana-cyan/30 bg-solana-cyan/10 px-2.5 py-0.5 text-[10px] font-semibold text-solana-cyan">
                0 / 10 GENESIS SLOTS
              </span>
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <nav
          className={`border-b transition-colors duration-300 ${
            scrolled || mobileMenuOpen
              ? "border-white/10 bg-[#040407]/95 backdrop-blur-2xl shadow-2xl shadow-black/80"
              : "border-white/5 bg-[#040407]/80 backdrop-blur-xl"
          }`}
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
            {/* Logo Brand Lockup */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-1.5 transition-all duration-300 group-hover:border-solana-cyan/40 group-hover:bg-solana-cyan/5">
                <Image
                  src="/lsos-svg-icon-acc.svg"
                  alt="LSOS Icon"
                  width={30}
                  height={30}
                  className="transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-lsos text-xl tracking-[0.12em] text-white leading-tight">
                  LSOS
                </span>
                <span className="text-[9px] font-mono font-medium tracking-[0.18em] text-white/40 leading-none">
                  LAUNCH SAFE ON SOLANA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-1 lg:gap-2 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium tracking-wide text-white/70 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Action Area */}
            <div className="hidden items-center gap-2.5 md:flex">
              {/* X (Twitter) Icon Link */}
              <a
                href="https://x.com/LSOS2026"
                target="_blank"
                rel="noopener noreferrer"
                title="Official LSOS on X"
                aria-label="Official LSOS on X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-200 hover:border-solana-magenta/40 hover:bg-white/[0.08] hover:text-white"
              >
                <IconXTwitter className="h-4 w-4" />
              </a>

              {/* Telegram Icon Link (Logo Only, No Text) */}
              <a
                href="https://t.me/lsos2026"
                target="_blank"
                rel="noopener noreferrer"
                title="Official Telegram Announcements (Broadcast Only)"
                aria-label="Official Telegram Announcements"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 transition-all duration-200 hover:border-solana-cyan/40 hover:bg-white/[0.08] hover:text-white"
              >
                <IconTelegram className="h-4 w-4" />
              </a>

              {/* Primary Action Button */}
              <button
                onClick={onOpenModal}
                className="relative inline-flex h-9 items-center gap-1.5 rounded-xl bg-white px-4 text-xs font-bold text-black transition-all duration-200 hover:bg-white/95 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95"
              >
                <span>Apply for Slot</span>
                <IconArrowUpRight className="h-3.5 w-3.5 text-black" />
              </button>
            </div>

            {/* Mobile Right Controls: Socials + Animated Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="https://x.com/LSOS2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LSOS on X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 active:scale-90 transition-transform"
              >
                <IconXTwitter className="h-4 w-4" />
              </a>

              <a
                href="https://t.me/lsos2026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 active:scale-90 transition-transform"
              >
                <IconTelegram className="h-4 w-4" />
              </a>

              {/* Animated High-Tech Hamburger Button (44x44px touch target) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all active:scale-90 focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative flex h-3.5 w-4 flex-col justify-between">
                  <span
                    className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full rounded-full bg-white transition-all duration-200 ease-in-out ${
                      mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-in-out ${
                      mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* 3. Mobile Navigation Fullscreen Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{ top: `${headerHeight}px` }}
          className="fixed inset-x-0 bottom-0 z-40 flex flex-col justify-between border-b border-white/10 bg-[#040407]/95 px-6 pt-6 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] backdrop-blur-2xl md:hidden overscroll-contain overflow-y-auto"
        >
          <div className="flex flex-col space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 px-3 pb-2">
              Navigation
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-white/90 transition-all duration-150 active:bg-white/[0.06] active:text-white border-b border-white/[0.03]"
              >
                <span>{link.label}</span>
                <span className="text-white/30 text-sm">→</span>
              </Link>
            ))}
          </div>

          {/* Bottom Drawer Actions */}
          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs font-mono">
              <span className="text-white/50">Genesis Intake Status:</span>
              <span className="font-bold text-solana-cyan">0 / 10 Shortlisted</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-bold text-black shadow-lg shadow-white/10 transition-transform active:scale-[0.98]"
            >
              <span>Apply for Slot</span>
              <IconArrowUpRight className="h-4 w-4 text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
