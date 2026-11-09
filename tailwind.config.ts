import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#040407",
        foreground: "#f5f5f7",
        surface: {
          subtle: "#08080d",
          card: "#0d0d15",
          raised: "#13131e",
          hover: "#1a1a28",
        },
        solana: {
          cyan: "#00f4fd",
          blue: "#0569ff",
          violet: "#5922f6",
          magenta: "#db15f2",
        },
      },
      fontFamily: {
        lsos: ["var(--font-lsos-tech)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "solana-gradient": "linear-gradient(135deg, #00f4fd 0%, #0569ff 36%, #5922f6 72%, #db15f2 100%)",
        "solana-gradient-h": "linear-gradient(90deg, #00f4fd 0%, #0569ff 36%, #5922f6 72%, #db15f2 100%)",
        "solana-subtle": "linear-gradient(135deg, rgba(0, 244, 253, 0.08) 0%, rgba(89, 34, 246, 0.08) 60%, rgba(219, 21, 242, 0.08) 100%)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

