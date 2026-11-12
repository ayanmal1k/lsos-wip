import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#040407" },
    { media: "(prefers-color-scheme: dark)", color: "#040407" },
  ],
  colorScheme: "dark",
};

const lsosTech = localFont({
  src: [
    {
      path: "../../public/font/LSOS-Tech-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lsos-tech",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://launchsafeonsolana.com"),
  title: "LSOS — Launch Safe on Solana | Next-Gen Anti-MEV Launchpad",
  description:
    "Launch Safe on Solana (LSOS) is the premier sovereign launchpad engineered with standalone liquidity pools, private Jito validator bundles, programmatic Streamflow locks, and the $7,500 Genesis Founder Utility Suite.",
  icons: {
    icon: "/lsos-svg-icon-acc.svg",
  },
  openGraph: {
    title: "LSOS — Launch Safe on Solana",
    description:
      "Sovereign Anti-MEV Launchpad with Standalone Liquidity Pools & Programmatic Streamflow Locks. Launching February 1, 2027.",
    url: "https://launchsafeonsolana.com",
    siteName: "LSOS",
    images: [
      {
        url: "/lsos with icon-big.png",
        width: 1500,
        height: 500,
        alt: "LSOS — Launch Safe on Solana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lsosTech.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-solana-cyan/20 selection:text-white">
        {/* Subtle Ambient Background Grids & Glow */}
        <div className="bg-grid-pattern pointer-events-none fixed inset-0 z-0 opacity-70" />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed -top-48 left-1/2 z-0 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-gradient-to-r from-solana-cyan/10 via-solana-violet/10 to-solana-magenta/10 blur-[120px]"
        />
        <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
