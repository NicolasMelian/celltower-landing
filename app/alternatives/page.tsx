import type { Metadata } from "next";
import Link from "next/link";
import { alternatives } from "./alternatives";
import {
  Nav,
  Footer,
  AppStoreButton,
  HeroBackdrop,
} from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Cell Tower App Comparisons | CellMapper & OpenSignal Alternatives",
  description:
    "How Cell Tower Locator compares to CellMapper and OpenSignal. Honest breakdowns of what each app does best and which one fits finding towers on iPhone.",
  alternates: { canonical: "https://celltowerlocatorapp.com/alternatives" },
};

export default function AlternativesIndex() {
  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      <Nav />
      <main className="relative">
        <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-16 overflow-hidden">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Cell Tower App <span className="text-blue-500">Comparisons</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Straight comparisons, no fluff. See what the popular cell tower
              and coverage apps do best, and where Cell Tower Locator fits.
            </p>
            <div className="flex justify-center pt-2">
              <AppStoreButton />
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 pb-24">
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
            {alternatives.map((a) => (
              <Link
                key={a.slug}
                href={`/alternatives/${a.slug}`}
                className="block bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 hover:border-blue-600 transition-colors"
              >
                <h2 className="text-xl font-bold text-white mb-2">
                  vs {a.name}
                </h2>
                <p className="text-gray-300 text-sm">{a.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
