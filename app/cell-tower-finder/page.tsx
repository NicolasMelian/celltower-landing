import type { Metadata } from "next";
import Link from "next/link";
import {
  Nav,
  Footer,
  AppStoreButton,
  HeroBackdrop,
  FaqList,
  FaqJsonLd,
} from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Cell Tower Finder | Locate Cell Towers Near You on a Map",
  description:
    "A free cell tower finder for iPhone. Locate nearby cell towers on an interactive map, see the carrier and network type, check distance, and run a speed test.",
  alternates: {
    canonical: "https://celltowerlocatorapp.com/cell-tower-finder",
  },
};

const faqs = [
  {
    q: "What is a cell tower finder?",
    a: "A cell tower finder is an app that plots nearby cell sites on a map using your location and a database of registered towers. It shows each tower's network type, operator, distance, and cell ID so you can see who serves your area.",
  },
  {
    q: "How does a cell tower finder know where towers are?",
    a: "It combines crowd-sourced measurements with operator-registered cell records. Each record includes the tower's approximate coordinates, radio type, and operator codes (MCC/MNC), which the app turns into map pins.",
  },
  {
    q: "Is the cell tower finder free?",
    a: "Yes. Cell Tower Locator lets you find towers, filter by network type, and run speed tests for free, with no account required.",
  },
  {
    q: "Can it tell me which carrier owns a tower?",
    a: "Yes. Tap any pin and the app reads the operator codes to identify the carrier, whether that is Verizon, AT&T, T-Mobile, or a regional network.",
  },
  {
    q: "Why would I want to find the nearest tower?",
    a: "Knowing where your nearest tower is helps you understand dead zones, decide where to place a signal booster, choose the best carrier for your address, and troubleshoot weak coverage.",
  },
];

export default function CellTowerFinder() {
  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      <FaqJsonLd items={faqs} />
      <Nav />
      <main className="relative">
        <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-14 overflow-hidden">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Cell Tower Finder
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Locate the cell towers around you on an interactive map. See the
              carrier, network type, distance, and signal range of every tower,
              then test your real speed in seconds.
            </p>
            <AppStoreButton />
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-white">
              Find every tower near you, not just your own carrier
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Most coverage maps only show one company&apos;s marketing
              footprint. A real cell tower finder shows the actual sites on the
              ground from every operator, so you can compare who has the
              closest tower to your home, office, or cabin.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Each pin is color-coded by network generation. Tap one and you get
              the radio type (GSM, UMTS, LTE, or 5G NR), the operator codes that
              identify the carrier, the distance from where you are standing,
              and the estimated signal range of that cell.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              What the cell tower finder shows you
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                ["Carrier", "Operator codes (MCC/MNC) reveal who owns each tower."],
                ["Network type", "5G NR, 4G LTE, 3G UMTS, or 2G GSM, filterable on the map."],
                ["Distance & direction", "How far each tower is from your exact position."],
                ["Signal range", "The estimated reach of each cell, useful for dead-zone hunting."],
                ["Speed test", "Live download, upload, and ping from where you stand."],
                ["Cell ID", "The unique identifier for each cell, handy for troubleshooting."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-5"
                >
                  <h3 className="font-bold text-white mb-1">{t}</h3>
                  <p className="text-gray-300 text-sm">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-white">
              Looking for a specific carrier?
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Each carrier uses different bands and frequencies, which changes
              how far its towers reach. See the breakdown for yours:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["verizon", "Verizon"],
                ["att", "AT&T"],
                ["t-mobile", "T-Mobile"],
                ["consumer-cellular", "Consumer Cellular"],
                ["us-cellular", "UScellular"],
                ["boost-mobile", "Boost Mobile"],
              ].map(([slug, name]) => (
                <Link
                  key={slug}
                  href={`/carriers/${slug}`}
                  className="bg-[#0f0f14] border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-blue-600 hover:text-white transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Cell tower finder FAQ
            </h2>
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-b from-[#0a0a0e] to-[#111116]">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Find the towers around you now
            </h2>
            <p className="text-lg text-gray-300">
              Free on iPhone, no account needed.
            </p>
            <div className="flex justify-center">
              <AppStoreButton size="lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
