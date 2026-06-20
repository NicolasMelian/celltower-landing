import type { Metadata } from "next";
import Link from "next/link";
import { carriers } from "./carriers";
import {
  Nav,
  Footer,
  AppStoreButton,
  HeroBackdrop,
} from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Cell Tower Maps by Carrier | Verizon, AT&T, T-Mobile & More",
  description:
    "Find cell towers by carrier. See Verizon, AT&T, T-Mobile, UScellular, Consumer Cellular, and Boost Mobile 5G and LTE towers near you on an interactive map.",
  alternates: { canonical: "https://celltowerlocatorapp.com/carriers" },
};

export default function CarriersIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      <Nav />
      <main className="relative">
        <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-16 overflow-hidden">
          <HeroBackdrop />
          <div className="relative max-w-5xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Cell Tower Maps <span className="text-blue-500">by Carrier</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Every carrier runs on different frequencies and bands. Pick yours
              to learn which towers serve your area and how to find the nearest
              one on the map.
            </p>
            <div className="flex justify-center pt-2">
              <AppStoreButton />
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 pb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {carriers.map((c) => (
              <Link
                key={c.slug}
                href={`/carriers/${c.slug}`}
                className="block bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 hover:border-blue-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-white">{c.name}</h2>
                  <span className="text-xs font-semibold text-blue-400 border border-blue-500/40 rounded-full px-3 py-1">
                    {c.type}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
