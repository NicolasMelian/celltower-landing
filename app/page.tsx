import Script from "next/script";
import { Footer, AppStoreButton } from "./components/SiteChrome";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Cell Tower Locator - Find 5G, 4G & LTE Towers",
    description:
      "Find cell towers near you on an interactive map. Locate 5G, 4G LTE, 3G towers, run speed tests, and analyze signal strength.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS, Android",
    keywords:
      "cell tower locator, cell tower map, 5G tower finder, 4G LTE towers, speed test, cell signal",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "350",
    },
    author: {
      "@type": "Organization",
      name: "Cell Tower Locator",
      url: "https://celltowerlocatorapp.com",
    },
    downloadUrl:
      "https://apps.apple.com/app/cell-tower-locator-find-5g/id6758106959",
  };

  const faqs = [
    {
      q: "How does Cell Tower Locator find towers near me?",
      a: "The app uses your device location and a public database of registered cell sites to plot nearby towers on an interactive map. Each pin shows the tower's network type, operator, distance, and cell ID.",
    },
    {
      q: "Is the app free?",
      a: "Yes. You can download Cell Tower Locator and explore nearby towers, run speed tests, and check signal info for free. No account is required.",
    },
    {
      q: "Does it show 5G towers?",
      a: "Yes. You can filter by network generation and see 5G NR, 4G LTE, 3G UMTS, and 2G GSM towers separately, each color-coded on the map.",
    },
    {
      q: "How accurate is the tower data?",
      a: "Tower positions come from crowd-sourced and operator-registered cell databases, so they reflect approximate transmitter locations rather than exact GPS coordinates. They're great for understanding coverage and which carrier serves an area.",
    },
    {
      q: "Can I test my real connection speed?",
      a: "Yes. The built-in speed test measures your live download speed, upload speed, and ping latency, and detects your current carrier.",
    },
    {
      q: "Which carriers does it support?",
      a: "It works with any carrier. The app reads operator codes (MCC/MNC) from the tower database, so AT&T, Verizon, T-Mobile, and regional carriers all show up.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-[#0a0a0e]">
        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
          <div className="flex items-center gap-3">
            <img
              src="/app-icon.jpeg"
              alt="Cell Tower Locator app logo"
              className="w-9 h-9 rounded-lg"
            />
            <span className="text-2xl font-bold text-white">
              Cell<span className="text-blue-500">Tower</span>
            </span>
          </div>
        </nav>

        <main className="relative">
          {/* Hero */}
          <section className="flex min-h-screen items-center px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full pt-20 lg:pt-0">
              <div className="text-left space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Find Cell Towers
                  <br />
                  <span className="text-blue-500 italic">Near You</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                  Discover 5G, 4G LTE, and 3G cell towers on an interactive
                  map. Run speed tests, check signal strength, and find the
                  best coverage in your area.
                </p>

                <AppStoreButton />

                <div className="flex items-center gap-6 pt-2">
                  <div className="text-sm text-gray-300">
                    <div className="font-semibold text-white">
                      Thousands of towers mapped
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★★★★★</span>
                      <span>4.8/5 rating</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-indigo-500/15 to-purple-500/10 rounded-[3rem] blur-3xl"></div>
                  <img
                    src="/app-icon.jpeg"
                    alt="Cell Tower Locator app showing cell towers on interactive map with 5G and 4G coverage"
                    className="relative z-10 w-full h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Network Types */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#111116]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Every Network Generation
              </h2>
              <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
                Filter and discover towers by network type, from legacy 2G to
                the latest 5G NR
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-[#1a1a20] border border-purple-800/40 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-purple-400/10 border border-purple-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-purple-400">
                      5G
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-purple-400">5G NR</h3>
                  <p className="text-gray-300 text-sm">
                    Next-gen ultra-fast network towers
                  </p>
                </div>

                <div className="bg-[#1a1a20] border border-blue-800/40 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-400/10 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-blue-400">4G</span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-400">4G LTE</h3>
                  <p className="text-gray-300 text-sm">
                    High-speed LTE coverage towers
                  </p>
                </div>

                <div className="bg-[#1a1a20] border border-orange-800/40 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-orange-400/10 border border-orange-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-orange-400">
                      3G
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-orange-400">
                    3G UMTS
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Standard mobile data towers
                  </p>
                </div>

                <div className="bg-[#1a1a20] border border-green-800/40 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-green-400/10 border border-green-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-green-400">
                      2G
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-green-400">2G GSM</h3>
                  <p className="text-gray-300 text-sm">
                    Legacy voice and SMS towers
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0e]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Powerful Features
              </h2>
              <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
                Everything you need to explore cellular networks and optimize
                your signal
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-400/10 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Interactive Map
                  </h3>
                  <p className="text-gray-300 text-sm">
                    See all cell towers around you on a real-time interactive
                    map with color-coded pins
                  </p>
                </div>

                <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-400/10 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📡</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Network Detection
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Identify tower type, carrier, signal range, and detailed
                    cell information
                  </p>
                </div>

                <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-400/10 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Speed Test</h3>
                  <p className="text-gray-300 text-sm">
                    Measure download speed, upload speed, and ping latency
                    right from the app
                  </p>
                </div>

                <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-blue-400/10 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Smart Filters
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Filter towers by network type to show only 5G, 4G, 3G, or
                    2G on the map
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#111116]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
                How Cell Tower Locator Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-400/10 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">📍</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    1. Open the Map
                  </h3>
                  <p className="text-gray-300">
                    Allow location access and the app instantly detects your
                    position and nearby towers
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-400/10 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">📡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    2. Explore Towers
                  </h3>
                  <p className="text-gray-300">
                    Tap any tower pin to see its network type, distance,
                    operator, cell ID, and signal range
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-400/10 border border-blue-400/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    3. Test Your Speed
                  </h3>
                  <p className="text-gray-300">
                    Run a speed test to measure your download, upload, and
                    latency in real time
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tower Details */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0e]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Detailed Tower Information
              </h2>
              <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
                Tap any cell tower on the map and get comprehensive technical
                details
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    Tower Data
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">📡</span>
                      Radio type (GSM, UMTS, LTE, NR, CDMA)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">📏</span>
                      Distance from your location
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">🏢</span>
                      Network operator (MCC/MNC)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">🔢</span>
                      Cell ID and signal range
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white">
                    Speed Test Metrics
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">⬇️</span>
                      Download speed (Mbps)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">⬆️</span>
                      Upload speed (Mbps)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">⏱️</span>
                      Ping latency (ms)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">📱</span>
                      Current carrier detection
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#111116]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-center mb-12">
                Everything about finding cell towers and testing your signal
              </p>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group bg-[#1a1a20] border border-gray-700 rounded-2xl px-6 py-5"
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white list-none">
                      {f.q}
                      <span className="ml-4 text-blue-500 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-gray-300 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Explore guides */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0e]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Explore Coverage Guides
              </h2>
              <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                Dig into specific networks, carriers, and signal topics
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="/cell-tower-finder"
                  className="block bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    Cell Tower Finder
                  </h3>
                  <p className="text-gray-300 text-sm">
                    How to locate every tower near you and read its details
                  </p>
                </a>
                <a
                  href="/5g-tower-map"
                  className="block bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    5G Tower Map
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Tell low-band from mid-band 5G and find the fast sites
                  </p>
                </a>
                <a
                  href="/cell-signal-strength"
                  className="block bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    Cell Signal Strength
                  </h3>
                  <p className="text-gray-300 text-sm">
                    What dBm really means and how to fix weak coverage
                  </p>
                </a>
                <a
                  href="/carriers/verizon"
                  className="block bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    Verizon Towers
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Verizon&apos;s bands, 5G tiers, and how to find them
                  </p>
                </a>
                <a
                  href="/carriers/t-mobile"
                  className="block bg-[#1a1a20] border border-gray-700 rounded-2xl p-6 hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    T-Mobile Towers
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Ultra Capacity vs Extended Range 5G explained
                  </p>
                </a>
                <a
                  href="/carriers"
                  className="block bg-[#1a1a20] border border-blue-700/50 rounded-2xl p-6 hover:border-blue-600 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    All Carriers →
                  </h3>
                  <p className="text-gray-300 text-sm">
                    AT&amp;T, Consumer Cellular, UScellular, Boost and more
                  </p>
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0a0a0e] to-[#111116]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Find Cell Towers Around You
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Download now and explore nearby cell towers for free, no
                account needed
              </p>
              <AppStoreButton size="lg" className="justify-center" />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
