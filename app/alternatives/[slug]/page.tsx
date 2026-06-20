import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { alternatives, alternativeBySlug } from "../alternatives";
import {
  Nav,
  Footer,
  AppStoreButton,
  HeroBackdrop,
  FaqList,
  FaqJsonLd,
} from "../../components/SiteChrome";

export function generateStaticParams() {
  return alternatives.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = alternativeBySlug(params.slug);
  if (!a) return {};
  const title = `${a.name} Alternative | Cell Tower Locator vs ${a.name}`;
  const description = `${a.tagline}. An honest comparison of ${a.name} and Cell Tower Locator for finding cell towers, checking signal, and testing speed on iPhone.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://celltowerlocatorapp.com/alternatives/${a.slug}`,
    },
    openGraph: { title, description, type: "article" },
  };
}

export default function AlternativePage({
  params,
}: {
  params: { slug: string };
}) {
  const a = alternativeBySlug(params.slug);
  if (!a) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      <FaqJsonLd items={a.faqs} />
      <Nav />
      <main className="relative">
        {/* Hero */}
        <section className="relative px-6 md:px-12 lg:px-20 pt-32 pb-12 overflow-hidden">
          <HeroBackdrop />
          <div className="relative max-w-4xl mx-auto space-y-6">
            <nav className="text-sm text-gray-400">
              <Link href="/alternatives" className="hover:text-white">
                Comparisons
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">vs {a.name}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Cell Tower Locator <span className="text-blue-500">vs {a.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">{a.tagline}</p>
            <AppStoreButton />
          </div>
        </section>

        {/* What it is */}
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-white">What {a.name} is</h2>
            {a.what.map((p, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-lg">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Strengths + gaps */}
        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 space-y-3">
              <h2 className="text-xl font-bold text-white">
                Where {a.name} is strong
              </h2>
              <ul className="space-y-2 text-gray-300">
                {a.strengths.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 space-y-3">
              <h2 className="text-xl font-bold text-white">
                Where Cell Tower Locator fits
              </h2>
              <ul className="space-y-2 text-gray-300">
                {a.gaps.map((g) => (
                  <li key={g} className="flex gap-2">
                    <span className="text-blue-400">→</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              {a.name} vs Cell Tower Locator
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1a1a20] text-gray-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold"></th>
                    <th className="px-5 py-3 font-semibold">{a.name}</th>
                    <th className="px-5 py-3 font-semibold text-blue-400">
                      Cell Tower Locator
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {a.table.map((r) => (
                    <tr key={r.feature} className="bg-[#0f0f14]">
                      <td className="px-5 py-3 font-semibold text-white whitespace-nowrap">
                        {r.feature}
                      </td>
                      <td className="px-5 py-3 text-gray-300">{r.them}</td>
                      <td className="px-5 py-3 text-gray-200">{r.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Which should you use?
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">{a.verdict}</p>
            <div className="pt-2">
              <AppStoreButton />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 md:px-12 lg:px-20 py-12 bg-[#111116]">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">
              {a.name} comparison FAQ
            </h2>
            <FaqList items={a.faqs} />
          </div>
        </section>

        {/* Other comparisons */}
        <section className="px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-4xl mx-auto space-y-5">
            <h2 className="text-2xl font-bold text-white">Other comparisons</h2>
            <div className="flex flex-wrap gap-3">
              {alternatives
                .filter((o) => o.slug !== a.slug)
                .map((o) => (
                  <Link
                    key={o.slug}
                    href={`/alternatives/${o.slug}`}
                    className="bg-[#1a1a20] border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-blue-600 hover:text-white transition-colors"
                  >
                    vs {o.name}
                  </Link>
                ))}
              <Link
                href="/cell-tower-finder"
                className="bg-[#1a1a20] border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-blue-600 hover:text-white transition-colors"
              >
                Cell Tower Finder
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
