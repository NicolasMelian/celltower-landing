import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://celltowerlocator.app"),
  title: "Cell Tower Locator | Find 5G, 4G & LTE Towers Near You",
  description:
    "Find cell towers near you with Cell Tower Locator. Interactive map showing 5G, 4G LTE, 3G tower locations. Built-in speed test, signal strength analysis, and carrier detection. Free on iOS.",
  keywords:
    "cell tower locator, cell tower map, find cell towers near me, 5G tower locator, 4G LTE tower finder, cell tower finder app, cell signal map, network coverage map, speed test, cell tower location, antenna finder, mobile tower locator",
  authors: [{ name: "Cell Tower Locator" }],
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://celltowerlocator.app",
  },
  openGraph: {
    title: "Cell Tower Locator | Find 5G, 4G & LTE Towers Near You",
    description:
      "Find cell towers near you on an interactive map. 5G, 4G LTE, 3G tower locations, built-in speed test, and signal analysis.",
    url: "https://celltowerlocator.app",
    siteName: "Cell Tower Locator",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cell Tower Locator App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cell Tower Locator | Find 5G, 4G & LTE Towers Near You",
    description:
      "Find cell towers near you on an interactive map. 5G, 4G LTE, 3G tower locations, built-in speed test, and signal analysis.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Cell Tower Locator",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
