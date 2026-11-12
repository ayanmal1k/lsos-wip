"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function BrandMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const marqueeItems = [
    "LAUNCH SAFE ON SOLANA",
    "0.175% STANDALONE POOLS",
    "PRIVATE JITO VALIDATOR BUNDLES",
    "STREAMFLOW 70% PERMANENT LOCKS",
    "ANCHOR PDA NON-CUSTODIAL REFUND",
    "FIRST 10 GENESIS PARTNERS ($7,500 SUITE)",
    "24H TRENDING ON LSOS DEX",
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#06060c] py-4 [touch-action:pan-y]">
      {/* Ambient Glow behind Marquee */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-solana-cyan/5 via-solana-violet/5 to-solana-magenta/5" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-[marquee_35s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-5">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-1 shadow-sm shadow-solana-cyan/20">
              <Image
                src="/lsos-svg-icon-acc.svg"
                alt="LSOS"
                width={22}
                height={22}
                className="transition-transform duration-300 hover:rotate-12"
              />
            </div>
            <span className="font-lsos text-sm tracking-[0.16em] text-white/80 transition-colors hover:text-white">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-solana-magenta shadow-[0_0_6px_#db15f2]" />
          </div>
        ))}
      </div>
    </div>
  );
}
