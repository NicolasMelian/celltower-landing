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
  title: "5G Tower Map | Find 5G Towers & Coverage Near You",
  description:
    "Find 5G towers near you on a live map. See 5G NR sites by carrier, tell low-band from mid-band 5G, check coverage, and run a 5G speed test. Free on iPhone.",
  alternates: { canonical: "https://celltowerlocatorapp.com/5g-tower-map" },
};

const faqs = [
  {
    q: "How do I find 5G towers near me?",
    a: "Open Cell Tower Locator, allow location access, and filter the map to 5G. Each 5G NR pin shows the carrier, distance, and band so you can see exactly which 5G sites cover your area.",
  },
  {
    q: "Why is my 5G slow even with full bars?",
    a: "You are likely connected to low-band 5G, which reaches far but is barely faster than LTE. The big speed jump comes from mid-band 5G (C-band or 2.5 GHz). Check the map for a mid-band tower nearby.",
  },
  {
    q: "What is the difference between low-band, mid-band, and mmWave 5G?",
    a: "Low-band (600-850 MHz) travels far and works indoors but is slow. Mid-band (2.5-3.7 GHz) balances speed and reach and is the sweet spot. mmWave (24+ GHz) is extremely fast but only covers a block or two, mostly in stadiums and downtowns.",
  },
  {
    q: "Which carrier has the most 5G towers?",
    a: "T-Mobile has the widest mid-band 5G footprint thanks to its 2.5 GHz spectrum. Verizon and AT&T lead in some markets with C-band. The map lets you compare actual 5G sites near you rather than marketing claims.",
  },
  {
    q: "Does the 5G map work without 5G service?",
    a: "Yes. The map shows 5G towers regardless of your current connection, so you can scout 5G coverage before switching carriers or buying a 5G phone.",
  },
];

const bands = [
  ["Low-band", "600-850 MHz", "Widest reach, good indoors, speeds close to LTE"],
  ["Mid-band", "2.5-3.98 GHz", "The sweet spot: fast and still broad coverage"],
  ["mmWave", "24-39 GHz", "Blazing speed, tiny range, dense urban spots only"],
];

export default function FiveGTowerMap() {
  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      <FaqJsonLd items={faqs} />
      <Nav />
      <main className="relative">
        <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-14 overflow-hidden">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              5G Tower Map
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              See the real 5G towers near you, not a marketing coverage blob.
              Filter to 5G NR, tell low-band from mid-band, and find the fast
              sites worth chasing.
            </p>
            <AppStoreButton />
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-white">
              Not all 5G is the same
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              The 5G icon on your phone hides a huge range of speeds. A low-band
              5G tower a mile away might give you 50 Mbps, while a mid-band tower
              on the next block could give you 800 Mbps. The only way to know
              what is actually near you is to look at the towers, not the bars.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              The three layers of 5G
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1a1a20] text-gray-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Layer</th>
                    <th className="px-5 py-3 font-semibold">Frequency</th>
                    <th className="px-5 py-3 font-semibold">What to expect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {bands.map(([l, f, d]) => (
                    <tr key={l} className="bg-[#0f0f14]">
                      <td className="px-5 py-3 font-semibold text-purple-400 whitespace-nowrap">
                        {l}
                      </td>
                      <td className="px-5 py-3 text-gray-300 whitespace-nowrap">
                        {f}
                      </td>
                      <td className="px-5 py-3 text-gray-300">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-white">
              Compare 5G by carrier
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Each carrier brands its 5G differently and runs it on different
              bands. See how yours stacks up:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["t-mobile", "T-Mobile 5G"],
                ["verizon", "Verizon 5G"],
                ["att", "AT&T 5G"],
                ["us-cellular", "UScellular 5G"],
                ["boost-mobile", "Boost 5G"],
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
              5G tower map FAQ
            </h2>
            <FaqList items={faqs} />
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-16 bg-gradient-to-b from-[#0a0a0e] to-[#111116]">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Map the 5G towers near you
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
