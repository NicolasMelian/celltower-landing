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
  title: "Cell Signal Strength | Check & Improve Your Signal (dBm Guide)",
  description:
    "Check your cell signal strength the right way. Learn what dBm numbers mean, run a real speed test, find the nearest tower, and fix weak coverage. Free on iPhone.",
  alternates: {
    canonical: "https://celltowerlocatorapp.com/cell-signal-strength",
  },
};

const faqs = [
  {
    q: "What is a good cell signal strength in dBm?",
    a: "Signal is measured in dBm and closer to zero is better. Around -50 to -79 dBm is excellent, -80 to -89 dBm is good, -90 to -99 dBm is fair, -100 to -109 dBm is weak, and -110 dBm or lower usually means dropped calls and stalled data.",
  },
  {
    q: "Why are signal bars unreliable?",
    a: "Bars are not standardized. One phone may show four bars at -100 dBm while another shows two. The actual dBm reading and your real download speed tell you far more than the bar icon.",
  },
  {
    q: "How can I improve a weak cell signal at home?",
    a: "Find your nearest tower on the map and face windows or antennas toward it, move to a higher floor, reduce obstructions, or install a signal booster aimed at that tower. Switching to a carrier with a closer tower is the most reliable fix.",
  },
  {
    q: "Does distance to the tower affect signal strength?",
    a: "Yes. The farther you are from the serving tower, and the more walls, hills, and trees in between, the weaker the signal. Low-band frequencies penetrate obstacles better than mid-band or mmWave.",
  },
  {
    q: "How do I test my real connection speed?",
    a: "Use the built-in speed test to measure live download speed, upload speed, and ping. Pairing speed with signal strength shows whether weak data is a coverage problem or network congestion.",
  },
];

const dbm = [
  ["-50 to -79 dBm", "Excellent", "Full speed, reliable calls and data", "text-green-400"],
  ["-80 to -89 dBm", "Good", "Solid performance for most uses", "text-green-400"],
  ["-90 to -99 dBm", "Fair", "Usable but slower, occasional hiccups", "text-yellow-400"],
  ["-100 to -109 dBm", "Weak", "Buffering, slow loads, shaky calls", "text-orange-400"],
  ["-110 dBm or lower", "Poor", "Dropped calls, data often fails", "text-red-400"],
];

export default function CellSignalStrength() {
  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      <FaqJsonLd items={faqs} />
      <Nav />
      <main className="relative">
        <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-14 overflow-hidden">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Cell Signal Strength
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Bars lie. Learn what your signal really is in dBm, run a true
              speed test, and find the nearest tower so you can fix weak
              coverage instead of guessing.
            </p>
            <AppStoreButton />
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              What your dBm number means
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Cell signal strength is measured in dBm, a negative number where
              closer to zero is stronger. A reading of -75 dBm is far better
              than -105 dBm. Use this scale to judge your real signal:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1a1a20] text-gray-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Signal (dBm)</th>
                    <th className="px-5 py-3 font-semibold">Rating</th>
                    <th className="px-5 py-3 font-semibold">What it feels like</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {dbm.map(([r, rating, feel, color]) => (
                    <tr key={r} className="bg-[#0f0f14]">
                      <td className="px-5 py-3 text-gray-300 whitespace-nowrap">
                        {r}
                      </td>
                      <td className={`px-5 py-3 font-semibold ${color} whitespace-nowrap`}>
                        {rating}
                      </td>
                      <td className="px-5 py-3 text-gray-300">{feel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-white">
              How to improve a weak signal
            </h2>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">→</span>
                Find your nearest tower on the map and note its direction.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">→</span>
                Move toward windows or higher floors that face that tower.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">→</span>
                Aim a signal booster antenna at the serving tower, not randomly.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">→</span>
                Compare carriers: the one with the closest tower usually wins.
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed text-lg pt-2">
              Knowing the exact tower serving you turns signal fixes from
              guesswork into a targeted job. See which carrier has the nearest
              tower to your address:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["verizon", "Verizon"],
                ["att", "AT&T"],
                ["t-mobile", "T-Mobile"],
                ["us-cellular", "UScellular"],
              ].map(([slug, name]) => (
                <Link
                  key={slug}
                  href={`/carriers/${slug}`}
                  className="bg-[#1a1a20] border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-blue-600 hover:text-white transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Cell signal strength FAQ
            </h2>
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-b from-[#0a0a0e] to-[#111116]">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Check your signal and find your tower
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
