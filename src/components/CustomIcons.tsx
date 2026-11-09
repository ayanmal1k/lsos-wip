import React from "react";

// Common Solana Gradient Defs that can be embedded globally
export function SolanaGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute hidden" aria-hidden="true">
      <defs>
        <linearGradient id="solanaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="35%" stopColor="#0569ff" />
          <stop offset="70%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>

        <linearGradient id="solanaGradH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="40%" stopColor="#0569ff" />
          <stop offset="75%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>

        <linearGradient id="cyanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#0569ff" />
        </linearGradient>

        <linearGradient id="violetMagentaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>

        <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#00b2ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 1. Official Telegram Paper Plane SVG with Solana Gradient
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
        d="M17.56 8.16l-2.11 9.97c-.15.69-.56.86-1.14.53l-3.16-2.33-1.52 1.47c-.17.17-.31.31-.64.31l.23-3.21 5.85-5.29c.25-.23-.06-.36-.39-.13l-7.23 4.55-3.12-.98c-.68-.21-.69-.68.14-1l12.21-4.71c.57-.21 1.07.13.88.94z"
        fill="url(#tgGrad)"
      />
    </svg>
  );
}

// 2. Official X (Twitter) SVG with Solana Gradient
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
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="url(#xGrad)"
      />
    </svg>
  );
}

// 3. Jito Mempool Shield Icon (Curved Security Shield with Internal Energy Core)
export function IconShieldJito({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="shJitoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="50%" stopColor="#0569ff" />
          <stop offset="100%" stopColor="#5922f6" />
        </linearGradient>
      </defs>
      {/* Outer Armor Shell */}
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="url(#shJitoGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(0, 244, 253, 0.08)"
      />
      {/* Inner Anti-MEV Core Lightning */}
      <path
        d="M13 8l-3.5 5h3l-1.5 4 4.5-6h-3.5l1-3z"
        fill="#00f4fd"
        stroke="#00f4fd"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 4. Streamflow Programmatic Lock Icon (Curved Vault Padlock with Precision Keyhole)
export function IconLockStreamflow({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="lockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5922f6" />
          <stop offset="60%" stopColor="#9d4edd" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      {/* Padlock Body */}
      <rect
        x="4"
        y="11"
        width="16"
        height="10"
        rx="2.5"
        stroke="url(#lockGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(89, 34, 246, 0.12)"
      />
      {/* Shackle */}
      <path
        d="M7 11V7a5 5 0 0 1 10 0v4"
        stroke="#00f4fd"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Keyhole */}
      <circle cx="12" cy="15.5" r="1.5" fill="#db15f2" />
      <path d="M12 17v2" stroke="#db15f2" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 5. Anchor PDA Softcap Refund Icon (Smart Contract Maritime Anchor with Refund Arrow)
export function IconAnchorSoftcap({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="pdaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="50%" stopColor="#0569ff" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      {/* Top Ring */}
      <circle cx="12" cy="5" r="2.5" stroke="#00f4fd" strokeWidth="1.8" fill="rgba(0, 244, 253, 0.15)" />
      {/* Center Post */}
      <line x1="12" y1="7.5" x2="12" y2="21" stroke="url(#pdaGrad)" strokeWidth="1.8" strokeLinecap="round" />
      {/* Crossbar */}
      <line x1="6" y1="10.5" x2="18" y2="10.5" stroke="#0569ff" strokeWidth="1.8" strokeLinecap="round" />
      {/* Curved Flukes */}
      <path
        d="M4.5 14C4.5 18.1421 7.85786 21.5 12 21.5C16.1421 21.5 19.5 14 19.5 14"
        stroke="url(#pdaGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="4.5" cy="14" r="1.5" fill="#00f4fd" />
      <circle cx="19.5" cy="14" r="1.5" fill="#db15f2" />
    </svg>
  );
}

// 6. Standalone LP AMM Icon (Dual Interlocking AMM Exchange Rings)
export function IconStandaloneLP({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="lpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="50%" stopColor="#0569ff" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      {/* Dual Curved Swapping Arrows */}
      <path
        d="M20 10c0-4.418-3.582-8-8-8-3.042 0-5.69 1.696-7.05 4.2"
        stroke="url(#lpGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <polyline points="9 6 4.9 6.2 5 2.1" stroke="#00f4fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      <path
        d="M4 14c0 4.418 3.582 8 8 8 3.042 0 5.69-1.696 7.05-4.2"
        stroke="url(#lpGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <polyline points="15 18 19.1 17.8 19 21.9" stroke="#db15f2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Core Standalone Pool Nucleus */}
      <circle cx="12" cy="12" r="2.5" fill="url(#lpGrad)" />
    </svg>
  );
}

// 7. Web Interface & Staking Dashboard (Sleek Browser Window with Code & Staking Chart)
export function IconCodeStaking({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#0569ff" />
        </linearGradient>
      </defs>
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="3"
        stroke="url(#codeGrad)"
        strokeWidth="1.8"
        fill="rgba(0, 244, 253, 0.06)"
      />
      {/* Top Browser Bar */}
      <line x1="3" y1="8" x2="21" y2="8" stroke="#0569ff" strokeWidth="1.2" />
      <circle cx="6" cy="6" r="1" fill="#00f4fd" />
      <circle cx="9" cy="6" r="1" fill="#5922f6" />
      <circle cx="12" cy="6" r="1" fill="#db15f2" />

      {/* Code Prompt & Staking Yield Line */}
      <path d="M7 12l2.5 2.5L7 17" stroke="#00f4fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="17" x2="17" y2="17" stroke="#db15f2" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 8. P2E Mini-Games Icon (Precision Modern Game Controller)
export function IconGamepadP2E({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="p2eGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5922f6" />
          <stop offset="50%" stopColor="#9d4edd" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      {/* Gamepad Chassis */}
      <rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="6"
        stroke="url(#p2eGrad)"
        strokeWidth="1.8"
        fill="rgba(89, 34, 246, 0.1)"
      />
      {/* D-Pad */}
      <line x1="6" y1="12" x2="10" y2="12" stroke="#00f4fd" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="8" y1="10" x2="8" y2="14" stroke="#00f4fd" strokeWidth="1.8" strokeLinecap="round" />
      {/* Action Buttons */}
      <circle cx="15.5" cy="13.5" r="1.2" fill="#db15f2" />
      <circle cx="18" cy="11" r="1.2" fill="#00f4fd" />
    </svg>
  );
}

// 9. Standalone Mobile App Icon (Precision Smartphone with Bezel & Dynamic Island)
export function IconAndroidApp({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="50%" stopColor="#0569ff" />
          <stop offset="100%" stopColor="#5922f6" />
        </linearGradient>
      </defs>
      <rect
        x="5"
        y="2"
        width="14"
        height="20"
        rx="3.5"
        stroke="url(#appGrad)"
        strokeWidth="1.8"
        fill="rgba(0, 244, 253, 0.06)"
      />
      {/* Speaker / Notch */}
      <line x1="10" y1="5" x2="14" y2="5" stroke="#db15f2" strokeWidth="1.4" strokeLinecap="round" />
      {/* Home Indicator */}
      <line x1="10" y1="19" x2="14" y2="19" stroke="#00f4fd" strokeWidth="1.4" strokeLinecap="round" />
      {/* App Grid UI Preview */}
      <rect x="8" y="8" width="3" height="3" rx="1" fill="#00f4fd" />
      <rect x="13" y="8" width="3" height="3" rx="1" fill="#0569ff" />
      <rect x="8" y="13" width="3" height="3" rx="1" fill="#5922f6" />
      <rect x="13" y="13" width="3" height="3" rx="1" fill="#db15f2" />
    </svg>
  );
}

// 10. 24H Trending on DEX Icon (Bullish Parabolic Financial Chart)
export function IconTrendingDEX({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="trendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="50%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      {/* Upward Parabolic Trajectory */}
      <path
        d="M22 7l-8.5 8.5-5-5L2 17"
        stroke="url(#trendGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow Head */}
      <path
        d="M16 7h6v6"
        stroke="#00f4fd"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Volume Bar Columns */}
      <line x1="6" y1="21" x2="6" y2="18" stroke="#0569ff" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="10" y1="21" x2="10" y2="15" stroke="#5922f6" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="14" y1="21" x2="14" y2="13" stroke="#db15f2" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="18" y1="21" x2="18" y2="10" stroke="#00f4fd" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// 11. 0 SOL Upfront Platform Cost (Layered Crypto Currency Coins)
export function IconCoinsZero({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="coinsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#0569ff" />
        </linearGradient>
      </defs>
      {/* Base Coin */}
      <ellipse cx="12" cy="18" rx="8" ry="3.5" stroke="url(#coinsGrad)" strokeWidth="1.8" fill="rgba(0, 244, 253, 0.08)" />
      {/* Mid Layer */}
      <path d="M4 14.5c0 1.933 3.582 3.5 8 3.5s8-1.567 8-3.5" stroke="#5922f6" strokeWidth="1.8" />
      <path d="M4 11c0 1.933 3.582 3.5 8 3.5s8-1.567 8-3.5" stroke="#db15f2" strokeWidth="1.8" />
      {/* Top Coin */}
      <ellipse cx="12" cy="7.5" rx="8" ry="3.5" stroke="url(#coinsGrad)" strokeWidth="1.8" fill="rgba(0, 244, 253, 0.15)" />
      {/* Center 0 SOL slash mark */}
      <circle cx="12" cy="7.5" r="1.5" fill="#00f4fd" />
    </svg>
  );
}

// 12. Token Burn Flame Icon (Double-Tongue Energetic Flame)
export function IconBurnFlame({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="flameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="40%" stopColor="#db15f2" />
          <stop offset="100%" stopColor="#ff5f56" />
        </linearGradient>
      </defs>
      {/* Outer Flame Contour */}
      <path
        d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
        stroke="url(#flameGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(219, 21, 242, 0.1)"
      />
      {/* Inner Blue-Cyan Pilot Flame */}
      <path
        d="M12 17c-1.105 0-2-.895-2-2 0-.8 0-1.5 1-2.5 1 1 1 1.7 1 2.5 0 1.105-.895 2-2 2z"
        fill="#00f4fd"
      />
    </svg>
  );
}

// 13. Custom Glowing Solana Checkmark (Circular Pass Badge)
export function IconCheckmark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="url(#checkGrad)" strokeWidth="1.8" fill="rgba(0, 244, 253, 0.1)" />
      <path
        d="M8 12.5l2.8 2.8L16 9"
        stroke="#00f4fd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 14. Custom X Mark (Circular Vulnerability Badge)
export function IconXMark({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="xMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff5f56" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" stroke="url(#xMarkGrad)" strokeWidth="1.8" fill="rgba(255, 95, 86, 0.1)" />
      <path
        d="M15 9l-6 6M9 9l6 6"
        stroke="#ff5f56"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 15. Sparkles Cluster (Lucide-Caliber 4-Point Starlight Cluster)
export function IconSparkles({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="spkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="50%" stopColor="#5922f6" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      <path
        d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
        fill="url(#spkGrad)"
      />
      <circle cx="19" cy="5" r="1.5" fill="#00f4fd" />
      <circle cx="5" cy="19" r="1" fill="#db15f2" />
    </svg>
  );
}

// 16. Directional Arrows
export function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrowUpRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 17L17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 17. Refresh / Re-Verify Icon (Curved Double Arrows)
export function IconRefresh({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="rfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      <path
        d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
        stroke="url(#rfGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polyline points="21 3 21 8 16 8" stroke="#00f4fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
        stroke="url(#rfGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polyline points="3 21 3 16 8 16" stroke="#db15f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 18. Mail / Email Icon
export function IconMail({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="mailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#0569ff" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="3"
        stroke="url(#mailGrad)"
        strokeWidth="1.8"
        fill="rgba(0, 244, 253, 0.08)"
      />
      <path
        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
        stroke="#00f4fd"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 19. Custom Shield Check Brand Icon (Pass Status)
export function IconShieldCheckBrand({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="shPassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="url(#shPassGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(52, 211, 153, 0.1)"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="#34d399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 20. Custom Shield Alert Brand Icon (Vulnerability Alert)
export function IconShieldAlertBrand({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="shFailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff5f56" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="url(#shFailGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255, 95, 86, 0.1)"
      />
      <line x1="12" y1="8" x2="12" y2="12" stroke="#ff5f56" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="#ff5f56" />
    </svg>
  );
}

// 21. Custom Terminal Prompt Icon
export function IconTerminalPrompt({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="termGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#5922f6" />
        </linearGradient>
      </defs>
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="3"
        stroke="url(#termGrad)"
        strokeWidth="1.8"
        fill="rgba(0, 244, 253, 0.06)"
      />
      <polyline points="7 10 10 13 7 16" stroke="#00f4fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13" y1="16" x2="17" y2="16" stroke="#db15f2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 22. Custom CPU Silicon Chip Icon
export function IconCpuChipBrand({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="cpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="url(#cpuGrad)" strokeWidth="1.8" fill="rgba(0, 244, 253, 0.06)" />
      <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="#00f4fd" strokeWidth="1.5" fill="rgba(89, 34, 246, 0.2)" />
      <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" stroke="#00f4fd" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 23. Custom Menu Hamburger Icon
export function IconMenu({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="menuGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f4fd" />
          <stop offset="100%" stopColor="#db15f2" />
        </linearGradient>
      </defs>
      <line x1="4" y1="7" x2="20" y2="7" stroke="url(#menuGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke="url(#menuGrad)" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="17" x2="20" y2="17" stroke="url(#menuGrad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 24. Custom Close (X) Icon
export function IconClose({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
