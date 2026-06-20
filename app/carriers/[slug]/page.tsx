import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { carriers, carrierBySlug } from "../carriers";
import {
  Nav,
  Footer,
  AppStoreButton,
  HeroBackdrop,
  FaqList,
  FaqJsonLd,
} from "../../components/SiteChrome";

export function generateStaticParams() {
  return carriers.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = carrierBySlug(params.slug);
  if (!c) return {};
  const title = `${c.name} Cell Tower Map | Find ${c.name} 5G & LTE Towers Near You`;
  const description = `${c.tagline}. See ${c.name}'s bands, frequencies, and 5G coverage, and locate the nearest tower on an interactive map. Free on iOS.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://celltowerlocatorapp.com/carriers/${c.slug}`,
    },
    openGraph: { title, description, type: "article" },
  };
}

export default function CarrierPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = carrierBySlug(params.slug);
  if (!c) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      <FaqJsonLd items={c.faqs} />
      <Nav />
      <main className="relative">
        {/* Hero */}
        <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-12 overflow-hidden">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto space-y-6">
            <nav className="text-sm text-gray-400">
              <Link href="/carriers" className="hover:text-white">
                Carriers
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">{c.name}</span>
            </nav>
            <span className="inline-block text-xs font-semibold text-blue-400 border border-blue-500/40 rounded-full px-3 py-1">
              {c.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {c.name} <span className="text-blue-500">Cell Tower Map</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">{c.tagline}</p>
            <div className="pt-2">
              <AppStoreButton />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-white">
              About {c.legalName}&apos;s network
            </h2>
            {c.hostNote && (
              <p className="bg-[#1a1a20] border-l-4 border-blue-500 rounded-r-xl px-5 py-4 text-gray-200">
                {c.hostNote}
              </p>
            )}
            {c.intro.map((p, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Frequencies */}
        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              {c.name} bands and frequencies
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1a1a20] text-gray-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Band</th>
                    <th className="px-5 py-3 font-semibold">Frequency</th>
                    <th className="px-5 py-3 font-semibold">What it is for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {c.freqTable.map((r) => (
                    <tr key={r.band} className="bg-[#0f0f14]">
                      <td className="px-5 py-3 font-semibold text-blue-400 whitespace-nowrap">
                        {r.band}
                      </td>
                      <td className="px-5 py-3 text-gray-300 whitespace-nowrap">
                        {r.freq}
                      </td>
                      <td className="px-5 py-3 text-gray-300">{r.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5G + Coverage */}
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 space-y-3">
              <h2 className="text-xl font-bold text-white">
                {c.name} 5G explained
              </h2>
              <p className="text-gray-300 leading-relaxed">{c.fiveG}</p>
            </div>
            <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 space-y-3">
              <h2 className="text-xl font-bold text-white">
                Coverage in plain terms
              </h2>
              <p className="text-gray-300 leading-relaxed">{c.coverage}</p>
            </div>
          </div>
        </section>

        {/* How to find towers */}
        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-white">
              How to find {c.name} towers near you
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {c.towersTip}
            </p>
            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">1.</span>
                Open Cell Tower Locator and allow location access.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">2.</span>
                Filter the map to 5G, 4G LTE, or all network types.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">3.</span>
                Tap a pin to read the operator code, distance, and band.
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">4.</span>
                Run the built-in speed test to confirm real-world performance.
              </li>
            </ol>
            <div className="pt-2">
              <AppStoreButton />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">
              {c.name} tower questions
            </h2>
            <FaqList items={c.faqs} />
          </div>
        </section>

        {/* Other carriers */}
        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-2xl font-bold text-white">Other carriers</h2>
            <div className="flex flex-wrap gap-3">
              {carriers
                .filter((o) => o.slug !== c.slug)
                .map((o) => (
                  <Link
                    key={o.slug}
                    href={`/carriers/${o.slug}`}
                    className="bg-[#1a1a20] border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-blue-600 hover:text-white transition-colors"
                  >
                    {o.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
