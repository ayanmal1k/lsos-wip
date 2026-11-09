import React from "react";

// Common Solana Gradient Defs that can be embedded or referenced
export function SolanaGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute hidden" aria-hidden="true">
      <defs>
        {/* Full Spectrum Solana Gradient: Cyan -> Blue -> Violet -> Magenta */}
        <linearGradient id="solanaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="35%" stopColor="#0569ff" />
          <stop offset="70%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>

        {/* Horizontal Solana Gradient */}
        <linearGradient id="solanaGradH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="40%" stopColor="#0569ff" />
          <stop offset="75%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>

        {/* Cyan to Azure Gradient */}
        <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#0569ff" />
        </linearGradient>

        {/* Violet to Magenta Gradient */}
        <linearGradient id="violetMagentaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>

        {/* Glowing Solana Cyan */}
        <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#00b2ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 1. Custom Telegram SVG with Solana Gradient
export function IconTelegram({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="tgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#0569ff" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" stroke="url(#tgGrad)" strokeWidth="1.5" fill="rgba(0, 244, 253, 0.08)" />
      <path
        d="M17.5 7.5L5.8 12.2C5 12.5 5 13.1 5.7 13.3L8.7 14.2L15.6 9.8C16 9.5 16.3 9.7 16 10L10.4 15.1L10.2 17.5C10.5 17.5 10.6 17.4 10.8 17.2L12.3 15.7L15.4 18C16 18.3 16.4 18.1 16.6 17.4L18.6 8C18.8 7.2 18.3 6.8 17.5 7.5Z"
        fill="url(#solanaGrad)"
      />
    </svg>
  );
}

// 2. Custom X (Twitter) SVG with Solana Gradient
export function IconXTwitter({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="xGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#db15f2" />
          <stop offset="50%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#00f4fd" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11" stroke="url(#xGrad)" strokeWidth="1.5" fill="rgba(219, 21, 242, 0.08)" />
      <path
        d="M16.5 6H18.2L14.5 10.2L18.8 16H15.4L12.7 12.5L9.6 16H7.9L11.8 11.5L7.7 6H11.2L13.6 9.2L16.5 6ZM15.9 15H16.8L10.6 6.9H9.6L15.9 15Z"
        fill="url(#solanaGradH)"
      />
    </svg>
  );
}

// 3. Custom Shield Icon (Jito Mempool Shield)
export function IconShieldJito({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L4 5.5V11.5C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11.5V5.5L12 2Z"
        stroke="url(#solanaGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(0, 244, 253, 0.06)"
      />
      <path
        d="M12 7V17M8.5 12H15.5"
        stroke="#00f4fd"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2" fill="#db15f2" />
    </svg>
  );
}

// 4. Custom Streamflow Programmatic Lock Icon
export function IconLockStreamflow({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="4"
        y="10"
        width="16"
        height="11"
        rx="2.5"
        stroke="url(#solanaGrad)"
        strokeWidth="1.8"
        fill="rgba(89, 34, 246, 0.1)"
      />
      <path
        d="M8 10V6.5C8 4.29086 9.79086 2.5 12 2.5C14.2091 2.5 16 4.29086 16 6.5V10"
        stroke="#00f4fd"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.5" r="1.5" fill="#db15f2" />
      <path d="M12 17V18.5" stroke="#db15f2" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 5. Custom Anchor PDA Softcap Icon
export function IconAnchorSoftcap({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="5" r="2.5" stroke="#00f4fd" strokeWidth="1.5" />
      <path d="M12 7.5V19.5" stroke="url(#solanaGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 10H18" stroke="#0569ff" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14"
        stroke="url(#solanaGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="14" r="1.5" fill="#00f4fd" />
    </svg>
  );
}

// 6. Custom Standalone LP Icon (Orbital Liquidity Rings)
export function IconStandaloneLP({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="4.5"
        transform="rotate(-25 12 12)"
        stroke="url(#solanaGrad)"
        strokeWidth="1.8"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="4.5"
        transform="rotate(35 12 12)"
        stroke="#00f4fd"
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />
      <circle cx="12" cy="12" r="3" fill="url(#solanaGradH)" />
    </svg>
  );
}

// 7. Custom Web Interface & Staking Icon
export function IconCodeStaking({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="3"
        stroke="url(#solanaGrad)"
        strokeWidth="1.8"
        fill="rgba(0, 244, 253, 0.05)"
      />
      <path d="M7 9L10 12L7 15" stroke="#00f4fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15H17" stroke="#db15f2" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="6" cy="6.5" r="0.75" fill="#00f4fd" />
      <circle cx="8.5" cy="6.5" r="0.75" fill="#5922f6" />
      <circle cx="11" cy="6.5" r="0.75" fill="#db15f2" />
    </svg>
  );
}

// 8. Custom P2E Mini-Games Icon
export function IconGamepadP2E({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 8H18C19.6569 8 21 9.34315 21 11V16C21 17.6569 19.6569 19 18 19H17L14.5 15H9.5L7 19H6C4.34315 19 3 17.6569 3 16V11C3 9.34315 4.34315 8 6 8Z"
        stroke="url(#solanaGrad)"
        strokeWidth="1.8"
        fill="rgba(89, 34, 246, 0.08)"
      />
      <path d="M8 11.5V14.5M6.5 13H9.5" stroke="#00f4fd" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="15" cy="13.5" r="1.2" fill="#db15f2" />
      <circle cx="17.5" cy="12" r="1.2" fill="#00f4fd" />
    </svg>
  );
}

// 9. Custom Standalone Android App Icon
export function IconAndroidApp({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="6"
        y="3"
        width="12"
        height="18"
        rx="3"
        stroke="url(#solanaGrad)"
        strokeWidth="1.8"
        fill="rgba(0, 244, 253, 0.06)"
      />
      <circle cx="12" cy="17.5" r="1" fill="#00f4fd" />
      <line x1="9" y1="6" x2="15" y2="6" stroke="#db15f2" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 10L11 12L15 9" stroke="#00f4fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 10. Custom 24H Trending on DEX Icon
export function IconTrendingDEX({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 17L9 11L13 15L21 7"
        stroke="url(#solanaGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7H21V12"
        stroke="#00f4fd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="11" r="2" fill="#0569ff" />
      <circle cx="13" cy="15" r="2" fill="#5922f6" />
      <circle cx="21" cy="7" r="2.5" fill="#db15f2" />
    </svg>
  );
}

// 11. Custom 0 SOL Upfront Coins Icon
export function IconCoinsZero({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="12" r="6" stroke="url(#solanaGrad)" strokeWidth="1.8" fill="rgba(0, 244, 253, 0.06)" />
      <path
        d="M15 8C17.2091 8 19 9.79086 19 12C19 14.2091 17.2091 16 15 16"
        stroke="#db15f2"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M8 10L10 12L8 14" stroke="#00f4fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 12. Custom Token Burn Flame Icon
export function IconBurnFlame({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C12 2 15 6 15 9C15 10.5 14.2 11.8 13 12.5C14.5 12.5 18 13.5 18 17C18 20 15 22 12 22C8.5 22 6 19.5 6 16C6 11 10 7.5 10 7.5C10 7.5 10 5.5 12 2Z"
        stroke="url(#solanaGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(219, 21, 242, 0.08)"
      />
      <path
        d="M12 14C11 14 10 15 10 16.5C10 18 11 19 12 19C13 19 14 18 14 16.5C14 15 13 14 12 14Z"
        fill="#00f4fd"
      />
    </svg>
  );
}

// 13. Custom Glowing Solana Checkmark
export function IconCheckmark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="7" fill="rgba(0, 244, 253, 0.12)" stroke="#00f4fd" strokeWidth="1.2" />
      <path
        d="M5 8.2L7 10.2L11.5 5.8"
        stroke="#00f4fd"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 14. Custom X Mark
export function IconXMark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="7" fill="rgba(255, 95, 86, 0.1)" stroke="#ff5f56" strokeWidth="1.2" />
      <path
        d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5"
        stroke="#ff5f56"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 15. Custom Sparkle / Star Diamond
export function IconSparkles({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z"
        fill="url(#solanaGradH)"
      />
    </svg>
  );
}

// 16. Custom Arrow Right / Arrow Up Right
export function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H6M11.5 4.5V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 17. Custom Cyber Refresh / Sync Icon
export function IconRefresh({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C5.45 13.5 3.3 11.75 2.7 9.35M2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C10.55 2.5 12.7 4.25 13.3 6.65"
        stroke="url(#solanaGrad)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M14 4V7H11" stroke="#00f4fd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12V9H5" stroke="#db15f2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 18. Custom Email Icon
export function IconMail({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="url(#solanaGrad)" strokeWidth="1.5" />
      <path d="M3 6L10 11L17 6" stroke="#00f4fd" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
